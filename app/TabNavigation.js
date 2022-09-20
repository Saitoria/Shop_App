import  React from 'react';
import { StyleSheet,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Home from './screens/home';
import Profile from './screens/profile';
import Favorites from './screens/favorites';
import Cart from './screens/cart';
const Tab = createBottomTabNavigator();

export default function TabNavigation()
{
    return(
    <Tab.Navigator
    screenOptions={{
      //headerShown:false,
    tabBarStyle:{    
      position: 'absolute',
      left:'5%',
      flex:1,
      width:'90%',
      height:'8%',
      justifyContent:'center',
      alignSelf:'center',
      alignItems:'center',
      borderRadius:25,
      paddingBottom:'2%',
      paddingTop:'1%',
      marginBottom:'3%',
      backgroundColor:'rgba(255,255,255,1)',
      
  },
  }}>
    <Tab.Screen 
    name="Home"
     component={Home}
     options = {{
      tabBarLabelStyle:{
        fontFamily:'Lato-Regular',
      },
      tabBarIcon : ({size,focused,color}) => {
          return(
              <Image 
              style={{width:size,height:size}}
              source={require('./resources/icons/home.png')}/>
          );
      }
  }}
      />
    <Tab.Screen 
    name="Favorites"
     component={Favorites}
     options = {{
      tabBarLabelStyle:{
        fontFamily:'Lato-Regular',
      },
      tabBarIcon : ({size,focused,color}) => {
          return(
              <Image 
              style={{width:size,height:size}}
              source={require('./resources/icons/favorites.png')}/>
          );
      }
  }}
      />

    <Tab.Screen 
    name="Cart"
     component={Cart}
     options = {{
      tabBarLabelStyle:{
        fontFamily:'Lato-Regular',
      },
      tabBarIcon : ({size,focused,color}) => {
          return(
              <Image 
              style={{width:size,height:size}}
              source={require('./resources/icons/cart.png')}/>
          );
      }
  }}
      />

    <Tab.Screen
     name="Profile"
      component={Profile}
      options = {{
        tabBarLabelStyle:{
          fontFamily:'Lato-Regular',
        },
        tabBarIcon : ({size,focused,color}) => {
            return(
                <Image 
                style={{width:size,height:size}}
                source={require('./resources/icons/profile.png')}/>
            );
        }
    }}
       />
  </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
  bottomTabStyle:{
    position: 'absolute',
    width:'90%',
    justifyContent:'center',
  },

})