import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,FlatList,Dimensions,ImageBackground,TouchableOpacity} from 'react-native';
import {url} from '../globals/global';
import Card from "../components/Card";

const numColumns = 2;

function Home()
{
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch(url+"show")
        .then(res=>res.json())
        .then(resData => setProduct(resData.products) )
        .catch(err=> console.error(err))
        .finally(()=>setLoading(false));
        //console.log(product);
    }, []);

    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.flatlistItem}>
        <Card title={item.name} id={item.id} price={item.price}/>
        </TouchableOpacity>
    );
        
    return(
        <View style={{flex:1,width:'100%',}}>
        <ImageBackground source={require('../resources/images/login1.jpg')} resizeMode="cover" style={styles.imgBackground}>
        <View style={styles.coverContainer}>
        <View style={styles.flatListContainer}>
            <FlatList
                data={product}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                style={{flex:1,height:'50%'}}
                numColumns={numColumns}
            />
        </View>
        </View>
        </ImageBackground>
        </View>
    );
}
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
    },
    flatListContainer:{
        width:'100%',
        height:'90%',
    },
    flatlistItem:{
        //backgroundColor:'cyan',
        width:'45%',
        height:250,
        marginVertical:'5%',
        marginHorizontal:'2%',
    },

});

export default Home;

