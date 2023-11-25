// import * as React from 'react';
import { Image, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Main from './router/Main.js'
import Store from './context/Store'
import messaging, { firebase } from '@react-native-firebase/messaging';
// import {requestUserPermission} from './utils/NotificationService'
import { useEffect } from 'react';
// import { AppRegistry } from 'react-native';
// const firebaseConfig = {
//   projectId: 'YOUR_PROJECT_ID',
//   appId: 'YOUR_APP_ID',
// };

// firebase.initializeApp(firebaseConfig);
const Tab = createBottomTabNavigator();

// const CustomTabBarButton = ({ children, onPress }) => (
//   <TouchableOpacity
//     style={{
//       top: -50,
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}
//     onPress={onPress}
//   >
//     <View
//       style={{
//         width: 60,
//         height: 60,
//         borderRadius: 40,
//         backgroundColor: '#fff',
//         borderColor:'#56C9DC',
//         borderWidth:1,
//       }}
//     >
//       {children}
//     </View>
//   </TouchableOpacity>
// );

function App() {
  // firebase.initializeApp
    useEffect(()=>{
      // requestUserPermission()
    },[])

  return (
    <GestureHandlerRootView style={styles.container}>
      <Store>
      <View style={{flex:1}}>
        {/* <BottomNavigation/> */}
        <Main/>
        {/* <BottomCurved/> */}
        {/* <MainContainer/> */}
        {/* <LoginScreen/> */}
      </View>
      </Store>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8F9',
    paddingTop: 50,
  },
  container2:{
    flex: 1,
    backgroundColor: '#F3F8F9',
    // paddingTop: 50,
  }
});
