import React,{useState} from 'react';
import { StyleSheet,View,Text,ImageBackground,TextInput,TouchableWithoutFeedback,ScrollView,Dimensions} from 'react-native';
import {url} from '../globals/global';

//Login screen 0 with a background screen
function Login({navigation})
{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [access,setAccess] = useState(false);

    myLoginFunc = async() => {
        
        if(username.length == 0 || password.length == 0 )
        {
            alert("Required field is missing");
        }
        else
        {
        await fetch(url+"login",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({"username":username,"password":password})
        }).then(res=>res.json())
        .then(resData => {
            //console.log(resData)
            setAccess(resData.access)
        });
        if(access==true)
        {
        navigation.navigate('TabNavigation');
        }
        else
        {
            alert("Username or password is incorrect");
        }
    }
    }

    return(
        <ScrollView style={{flex:1,width:'100%',}}>
        <ImageBackground source={require('../resources/images/login1.jpg')} resizeMode="cover" style={styles.imgBackground}>
            <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Text style={styles.headerText}>Login</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.containerText}>
                    It seems you are not logged in.{'\n'}
                    Login to view our products
                </Text>

                <TextInput 
                style={styles.txtInput} 
                placeholder={'Username'}
                placeholderTextColor={'black'}
                placeholderStyle={{fontFamily:'OpenSans', marginLeft:50,}} 
                value={username}
                onChangeText={(value)=>setUsername(value)}>
                </TextInput>

                <TextInput style={styles.txtInput2}
                 placeholder={'Password'}
                  placeholderTextColor={'black'}
                  value={password}
                  onChangeText={(value)=>setPassword(value)}
                  >
                </TextInput>


                <TouchableWithoutFeedback
                onPress={myLoginFunc}
                >
                <View style={styles.customButton}>
                    <Text style={styles.buttonText}>Login</Text>
                </View>
                </TouchableWithoutFeedback>
            </View>
            </View>
           
        </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        height:'100%',
        width:'100%',
        flex:1,
        flexGrow:1,
        margin:0,
        padding:0,
    },
    imgBackground:{
        flex:1,
        width:'100%',
        height:Dimensions.get('screen').height,
    },
    topContainer:{
        position:'absolute',
        top:'20%',
        marginLeft:"7%",
    },
    headerText:{
        fontSize:30,
        fontFamily:'Lato-Bold',
        color:'black',
    },
    bottomContainer:{
        backgroundColor:'rgba(0, 0, 0, 0.7)',
        borderRadius:30,
        position:'absolute',
        top:'30%',
        marginLeft:"7%",
        width:'90%',
        height:'50%',
        alignContent:'center',
        alignSelf:'center',
    },
    containerText:{
        color:'white',
        fontSize:16,
        marginLeft:'7%',
        marginTop:'7%',
        fontFamily:'Lato-Regular',
    },
    txtInput:{
        width:'90%',
        height:'12%',
        backgroundColor:'white',
        borderRadius:10,
        alignSelf:'center',
        marginTop:'12%',
        color:'black',
        fontFamily:'Lato-Regular',
    },
    txtInput2:{
        width:'90%',
        height:'12%',
        backgroundColor:'white',
        borderRadius:10,
        alignSelf:'center',
        marginTop:'7%',
        color:'black',
        fontFamily:'Lato-Regular',
    },
    customButton:{
        //backgroundColor:'rgba(88,196,248,1)',
        backgroundColor:'wheat',
        width:'90%',
        alignSelf:'center',
        height:'12%',
        borderRadius:10,
        marginTop:'20%',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
    },
    buttonText:{
        color:'black',
        alignContent:'center',
        alignSelf:'center',
        justifyContent:'center',
        fontFamily:'Lato-Regular',
    },
});

export default Login;