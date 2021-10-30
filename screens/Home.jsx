import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/Home/BottomTabs'
import Categories from '../components/Home/Categories'
import HeaderTabs from '../components/Home/HeaderTabs'
import RestaurantItem, { localRestaurants } from '../components/Home/RestaurantItem'
import SearchBar from '../components/Home/SearchBar'

const YELP_API_KEY = "jg9G0U4H9WCXVyNw4PRx6u_dXqzHKygZDSkNvOPYLYTwjjM4aFpiD3RHCV0fYv6B1wKxswmEHM6Ra_4F4c-8rlGTu2dZQnJ75tMH84b5ylrt96qaGUcjfKFDCuJaYXYx"
const GOOGLE_API_KEY = "AIzaSyB_jD3v_z61WE8a6aV8-_GJ9OT2z-zC_yo"


const Home = ({navigation}) => {
    const [restaurantData, setRestaurantData] =useState(localRestaurants)
    const [city, setCity] = useState("San Franscisco")
    const [activeTab, setActiveTab] = useState('Delivery')

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
        
    const apiOptions = {
        headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
        },
    }

    return fetch(yelpUrl, apiOptions)
        .then((response) => response.json())
        .then((json) => setRestaurantData(
            json.businesses.filter((business) => 
            business.transactions.includes(activeTab.toLowerCase()))
            ))
        .catch((error) => console.log('found error', error));

    };
        

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    console.log("data", "datas")
    
    return (
        <SafeAreaView style={{marginTop: StatusBar.currentHeight, backgroundColor: "#eee",flex: 1,}}>
            <View style={{backgroundColor: "white", padding: 15}}>
             <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
             <SearchBar cityHandler={setCity} />
            </View>    

            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories /> 
                <RestaurantItem restaurantData={restaurantData} navigation={navigation} />  
            </ScrollView>
            
          
            <Divider width={1} />
            <BottomTabs />
       
            
        </SafeAreaView>
    )
}


export default Home


 