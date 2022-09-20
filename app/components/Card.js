import React from "react";
import {View,Image,Text,StyleSheet,TouchableOpacity} from "react-native";
import { imgUrl } from "../globals/global";

export default function Card({title,id,price})
{
    return(
        <View style={styles.item}>
        <Image source={{uri:imgUrl+id+".jpg"}} style={styles.imgStyle}/>

        <View style={styles.itemBottomContainer}>
        <View style={styles.itemLabelContainer}>
        <Text style={styles.itemText}>{title}</Text>
        <Text style={styles.itemPriceText}>{price} TZS</Text>
        </View>
        <TouchableOpacity style={styles.favoriteIconContainer}>
        <Image source={require('../resources/icons/favorites.png')} style={styles.favoriteIconStyle}/>
        </TouchableOpacity>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    item:{
        width:'100%',
        height:'100%',

        backgroundColor:'rgba(255,255,255,0.9)',
        borderRadius: 15,
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
    },
    itemText:{
        width:'100%',
        paddingLeft:'7%',
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
        color:'black',
        fontSize:16,
        fontFamily:'Lato-Regular',
        //backgroundColor:'green',
    },
    imgStyle:{
        width:'100%',
        height:'75%',
        position:'absolute',
        top:'0%',
        borderRadius:15,
    },
    itemPriceText:{
        width:'100%',
        paddingLeft:'7%',
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
        color:'black',
        fontSize:12,
        fontFamily:'Lato-Regular', 
        //backgroundColor:'green',
    },
    itemLabelContainer:{
        //backgroundColor:'red',
        flexDirection:'column',
        width:'75%',
        height:'100%',
        justifyContent:'center',

    },
    itemBottomContainer:{
        flexDirection:'row',
        position:'absolute',
        top:'75%',
        width:'100%',
        height:'25%',
        //backgroundColor:'blue',
        justifyContent:'space-evenly',
    },
    favoriteIconContainer:{
        width:36,
        height:36,
        borderRadius:18,
        backgroundColor:'rgba(211,211,211,1)',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginRight:'2%',
    },
    favoriteIconStyle:{
        width:18,
        height:18,
        alignSelf:'center',
    }
});