import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'

const items = [
    {
      image: require("../../assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      image: require("../../assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../../assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
      image: require("../../assets/images/deals.png"),
      text: "Deals",
    },
    {
      image: require("../../assets/images/coffee.png"),
      text: "Coffee & Tea",
    },
    {
      image: require("../../assets/images/desserts.png"),
      text: "Desserts",
    },
  ];

const Categories = () => {
    return (
        <View style={{marginTop: 5, backgroundColor: "white", paddingVertical: 10, paddingLeft: 10,}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item, index) => (   
                <TouchableOpacity key={index}>
                    <View style={{alignItems: 'center', marginRight: 30,}}>
                        <Image source={item.image}
                        style={{
                            width: 40,
                            height: 50,
                            resizeMode: "contain"
                        }}
                        />
                        <Text style={{fontSize: 13, fontWeight: "900"}}>{item.text}</Text>
                    </View>
                </TouchableOpacity>                
            ))}       
        </ScrollView>
        </View>
        
    )
}

export default Categories

const styles = StyleSheet.create({})
