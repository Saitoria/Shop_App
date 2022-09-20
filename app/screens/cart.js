import React,{useState} from 'react';
import { StyleSheet,View,Text,ImageBackground,TextInput,TouchableWithoutFeedback,ScrollView,Dimensions} from 'react-native';

export default function Cart()
{
    return(
        <View style={{flex:1,width:'100%',}}>
        <ImageBackground source={require('../resources/images/login1.jpg')} resizeMode="cover" style={styles.imgBackground}>
        <View style={styles.coverContainer}>
            <Text>Cart page</Text>
        </View>
        </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    imgBackground:{
        flex:1,
        width:'100%',
        height:Dimensions.get('screen').height,
    },
    coverContainer:{
        flex:1,
        width:'100%',
        backgroundColor:'rgba(0,0,0,0.7)',
    }

});