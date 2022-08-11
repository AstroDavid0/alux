import { Text, View, Image, StyleSheet, useWindowDimensions,ScrollView,ActivityIndicator,ImageBackground, Pressable} from 'react-native'
import React, { useState } from 'react'
import { Select,FormControl,CheckIcon,TextArea,Input,Stack,AlertDialog,Button,HStack,Spinner,Heading,Modal,Box,AspectRatio,Center,NativeBaseProvider,CloseIcon  } from "native-base";
import { color } from 'native-base/lib/typescript/theme/styled-system';

import { SharedElement } from 'react-navigation-shared-element';



const DetailsScreen = ({route,navigation}) => {

  const { imagelink,text,likes,name,profile_pic,userid } = route.params; 

  const image = { uri: imagelink };

  console.log("la ultima profilepic");
  console.log(profile_pic);
  
    return (
        <NativeBaseProvider>
      <View >
      <SharedElement id={`item.${imagelink}.photo`}>

     
      <ImageBackground  source={image} style={{width: '100%', height: '100%'}}>

        <Pressable onPress={() => navigation.goBack()} >

        
        <View  style={{position: 'absolute', top: 0, justifyContent: 'center'}} >
        <CloseIcon style={styles.closeicon} size={8} />
        </View>
        </Pressable>


        <View style={{position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center',backgroundColor:"#00000065", width:'100%'}}>

          
         <View  style={{alignSelf:'flex-start',paddingLeft:35}} >         
            <Text style={styles.textprimary} >  {text}  </Text>
            <Text style={styles.textlikes} >  {likes} Likes </Text>            
         </View>  

         
        
         <Pressable style={{flexDirection:'row',alignSelf:'flex-start',paddingLeft:45,paddingBottom:20,paddingTop:10}} onPress={() => navigation.navigate('Profile',{userid:userid,navigation:navigation})} >
         <Image style={styles.profilepicsyle} source={{uri: profile_pic}}/>
            <View>
              <Text style={styles.textname} > {name}  </Text>
              <Text style={styles.textprofile} > View Profile  </Text>
            </View>
            </Pressable>
       
         

      </View>
      </ImageBackground>
      </SharedElement>


      </View>
      </NativeBaseProvider>
    );
  
};

/*

      <Center 
          width="100%"
          bg="#00000065"   
           
         position="absolute" bottom="0" px="3" py="1.5">

            <View>
            
        <Text style={styles.textlikes} > Likes </Text>
            </View>
       

      </Center>
*/

const styles = StyleSheet.create({

  root:{
    alignItems:'center',
    padding: 20,
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    color: '#ad2a37',
    margin: 30,
  },

  link:{
     color: '#FDB075',    
  },

  text:{
    color: 'grey', 
    marginVertical:10,  
    
 },

 imagestyle1:{
  backgroundColor:'blue', 
       
 },

 imagestyle2:{
  backgroundColor:'red', 
  marginTop:30,
  
   
 },

 textlikes:{
    color:'grey',
    fontSize:18,
    textAlign:'left',
    paddingBottom:10,
 },

 textname:{
  color:'white',
  fontSize:14,
  textAlign:'left',
},
textprofile:{
  color:'grey',
  fontSize:14,
  textAlign:'left',
},

 textprimary:{
    color:'white',
    fontSize:30,
    elevation: 3,
    paddingTop:20,
    paddingBottom:10,
    marginLeft:-10,
    textAlign:'left',
   
    
 },

 estilo:{
    flex: 1,

    flexDirection: 'column',

    margin: 1,
    backgroundColor:'white',
 },
 profilepicsyle:{
  width:40,
  height:40,
  borderRadius:100,
  marginRight:10,
 },
 closeicon:{
  color:'white', 
  marginLeft:20,
  marginTop:20,
 }

 

});

export default DetailsScreen