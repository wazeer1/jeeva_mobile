import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/logo/logo.png'
import NotificationIcon from '../assets/icons/Notifications.png'

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.left}>
            <Image source={Logo}/>
            <Text style={styles.logo}>Jeeva Milk</Text>
        </View>
        <Image source={NotificationIcon}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        paddingVertical:10,
        paddingHorizontal:16,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    logo:{
        color:'#1FA7BE',
        fontSize:24,
    },
    left:{
        flexDirection:'row',
        gap:5,
    }
})