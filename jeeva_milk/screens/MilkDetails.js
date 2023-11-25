import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import MilkCard from '../Components/MilkCard'
import { ScrollView } from 'react-native-gesture-handler'
import { milkDetails } from '../api/auth'

const MilkDetails = () => {
    const [datas,setDatas] = useState([])
    useEffect(()=>{
        milkDetails().then((res)=>{
            console.log(res.data.app_data.data);
            if(res.data.app_data.StatusCode == 6000){
                console.log(res.data.app_data.data,"wazeerr_____");
                setDatas(res.data.app_data.data)
            }
        })
    },[])
    console.log(datas);
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.Head}>Milk Status</Text>
        </View>
        <ScrollView style={{gap:20}}>
            {datas.map((item)=>(
                <MilkCard datas={item}/>
            ))}
            {/* <MilkCard/> */}
            {/* <MilkCard/>
            <MilkCard/>
            <MilkCard/>
            <MilkCard/>
            <MilkCard/> */}
        </ScrollView>
    </View>
  )
}

export default MilkDetails
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F3F8F9',
        paddingHorizontal:16,
        color:'#000'
    },
    Head:{
        fontSize:24,
        color:'#000'
    }
})