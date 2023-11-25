import { View,Text, Image,ScrollView } from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler'
import { COLORS, globalStyles } from '../Components/constants/constants'
import { PaymentReceivedIcon } from '../assets/images'
import PaymentCard from '../Components/PaymentCard'

export default function Payment({navigation}){
    return(
    <ScrollView style={{flex:1,paddingHorizontal:16,backgroundColor:'#F3F8F9',}}>
        <View style={{paddingVertical:10}}>
            <Text style={{textAlign:'center',fontSize:20,fontWeight:'600',color:COLORS.text_color}}>Payments</Text>
        </View>
        <PaymentCard/>
        {/* <PaymentCard/>
        <PaymentCard/> */}
        {/* <PaymentCard/>
        <PaymentCard/>
        <PaymentCard/> */}
    </ScrollView>
    )
}