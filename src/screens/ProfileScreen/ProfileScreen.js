import { Text, View, Image, StyleSheet, useWindowDimensions,ScrollView,ActivityIndicator,SafeAreaView, useColorScheme,StatusBar,FlatList} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Select,FormControl,CheckIcon,TextArea,Input,Stack,AlertDialog,Button,HStack,Spinner,Heading,Modal,Box,AspectRatio,Center,NativeBaseProvider,Pressable,CloseIcon  } from "native-base";
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';


//imports from Apis and libraries

import { createApi } from 'unsplash-js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TransitionPresets } from '@react-navigation/stack';

//import from screens
import GalleryScreen from '../GalleryScreen';
import GalleryProfileScreen from '../GalleryProfileScreen';





const ProfileScreen = ({route,navigation}) => {

    const { userid } = route.params; 

    console.log("el user id");
    console.log(userid);

    useEffect(() => {  

  
        calldata();   
        calluserdata(); 
    
    
    }, [ ]);

    const [Imagedata, setImagedata] = useState([]);
    const [Userdata, setUserdata] = useState([]);

    const [Bio, setBio] = useState();
    const [Name, setName] = useState();
    const [Picurl, setPicurl] = useState();

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      };

      const isDarkMode = useColorScheme() === 'dark';


    const calldata = async () => {

        const unsplash = createApi({
          accessKey: 'a2f508640cb62f314e0e0763594d40aab1c858a7ef796184067c537a88b276aa',   
        });
      
        console.log("esta pasando pore aqui");
      
      // non-feed example
    
      const data = await unsplash.users.getPhotos({
        username: userid,
        page: 1,
        perPage: 6,
        orderBy: 'latest',
        orientation: 'landscape',
      });
      
      console.log("imagenes de naooooooooooooooooooooooo");
      console.log(data);

      console.log(data.response.results);

      setImagedata(data.response.results);
      
      }



      const calluserdata = async () => {

        const unsplash2 = createApi({
          accessKey: 'a2f508640cb62f314e0e0763594d40aab1c858a7ef796184067c537a88b276aa',   
        });
      
        console.log("esta pasando pore aqui");
      
      // non-feed example
    
      const data2 = await unsplash2.users.get({ username: userid});
      
      setUserdata(data2);
      

      setBio(data2.response.bio);
      setName(data2.response.name);
      setPicurl(data2.response.profile_image.large);

      console.log("--------------pic urk-------------");
      console.log(data2.response.profile_image.large);
      
      }

      console.log("------------------user data-------------");
      //console.log(Userdata);

      console.log("la bio");
      //console.log(Userdata.response.bio);


  
    return (


    
   
        
        <View
          style={{
            backgroundColor: Colors.white,
          }}>


         

         

        

       
         
      <FlatList
        data={Imagedata}   
        numColumns={2}           
        ItemSeparatorComponent={
            () => <View style={{ width: 10, backgroundColor: 'white' }}/>
        }
        ListHeaderComponent={

           

            <View>
            <Pressable  onPress={() => navigation.goBack()} >        
            <View  style={{position: 'absolute', top: 0, justifyContent: 'center'}} >
            <CloseIcon style={styles.closeicon} size={8} />
            </View>
            </Pressable>

            <View style={{flexDirection:'row',alignSelf:'flex-start',paddingLeft:35,paddingBottom:0,paddingTop:80,flexShrink: 1,marginBottom:10}} onPress={() => navigation.navigate('Profile',{userid:userid,navigation:navigation})} >
            <Image style={styles.profilepicsyle} source={{uri: Picurl}}/>
            <View style={{flexShrink: 1}} >
              <Text style={styles.textname} > {Name} </Text>
              <Text style={styles.textprofile} > {Bio}  </Text>
            </View>
            </View>          

            <Text style={styles.supertitle} >My Photos</Text>
            </View>
        }     
        renderItem={({item,index}) =>       
       
        
      <GalleryProfileScreen 
      imagelink={item.urls.regular}
      index={index}
      text={item.description}
      likes={item.likes}
      name={item.user.name}
      profile_pic={item.user.profile_image.large}
      navigation={navigation}
      
      />
      
      
      
      }

      
      
      />

      
  



        
          
        </View>
    
   
    );
  
};



const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    container: {
      flex: 1,
      paddingTop: 22
     },
     item: {
       padding: 10,
       fontSize: 18,
       height: 44,
     },
     textname:{
        color:'black',
        fontSize:25,
        textAlign:'left',
        fontWeight:'bold',
      },
      supertitle:{
        color:'black',
        fontSize:40,
        textAlign:'left',
        fontWeight:'bold',
        paddingLeft:30,
       
      },
      textprofile:{
        color:'grey',
        fontSize:14,
        textAlign:'left',
        flexShrink: 1,
      },
      profilepicsyle:{
        width:60,
        height:60,
        borderRadius:100,
        marginRight:10,
        marginLeft:-10,
       },
       closeicon:{
        color:'black', 
        marginLeft:20,
        marginTop:20,
       }
      
  });

export default ProfileScreen


//Nota modificar la consulta para que me traiga las imagenes del mismo autor
//Crear una variable del stack navigator y meterla dentro del stack para ver si asi puedo usar las animaciones