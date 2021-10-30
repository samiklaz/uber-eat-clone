import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

export default function BottomTabs() {
    return (
        
            <View style={{
                flexDirection: "row", 
                margin: 10, 
                marginHorizontal: 20, 
                justifyContent: "space-between"
            }}
            >
                
                <Icon icon="home" text="Home" />
                <Icon icon="search" text="Browse" />
                <Icon icon="shopping-bag" text="Grocery" />
                <Icon icon="receipt" text="Orders" />
                <Icon icon="user" text="Account" />
            </View>
        
    )
}

const Icon = (props) => (
    <View>
        <TouchableOpacity>
            <FontAwesome5 name={props.icon} size={20} style={{
                marginBottom: 3, 
                alignSelf: "center",
                }} 
            />
            <Text style={{color: "gray"}}>{props.text}</Text>
        </TouchableOpacity>
        
    </View>
)

