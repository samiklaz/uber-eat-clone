import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SearchBar = ({cityHandler}) => {
    return (
        <View style={{marginTop: 25, flexDirection: "row"}}>
            <GooglePlacesAutocomplete 
            placeholder="Search"
            query={{key:  "AIzaSyB_jD3v_z61WE8a6aV8-_GJ9OT2z-zC_yo"}}
            onPress={(data, details = null) => {
                console.log(data.description)
                const city = data.description.split(",")[0]
                cityHandler(city)
            }}
            styles={{
                textInput: {
                    backgroundColor: "#eee",
                    borderRadius: 20,
                    fontWeight: "700",
                    marginTop: 7,
                },
                textInputContainer: {
                    backgroundColor: "#eee",
                    borderRadius: 50,
                    flexDirection: "row",
                    alignItems: "center",
                    
                }
            }}
            renderLeftButton={() => (
                <View style={{marginLeft: 10,}}>
                    <Ionicons name='location-sharp' size={24} />
                </View>
            )}
            renderRightButton={() => (
                <View style={{flexDirection: "row", 
                marginRight: 8, backgroundColor: "white",
                padding: 9, borderRadius: 30, alignItems: "center"
                }}>
                    <AntDesign name="clockcircle" size={11} style={{marginRight: 6}} />
                    <Text>Search</Text>
                </View>
            )}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})
