import { Text, View, Image, StyleSheet, useWindowDimensions,ScrollView,ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import { Select,FormControl,CheckIcon,TextArea,Input,Stack,AlertDialog,Button,HStack,Spinner,Heading,Modal,Box,AspectRatio,Center,NativeBaseProvider,Pressable  } from "native-base";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { SharedElement } from 'react-navigation-shared-element';


const GalleryScreen = ({navigation,imagelink,index,text,likes,name,profile_pic,userid}) => {

//const [alternativestyle,setalternativestyle] = useState();

var alternativestyle = styles.imagestyle1;

 console.log("los valores de los indices");
 console.log(index);

    if (index % 2 === 0){
        console.log("es par");
        var alternativestyle = 0;
    }else{
        console.log("ews impar");
        var alternativestyle = 8;
    }

    console.log("el link de las imagenes");
    console.log(imagelink)

    console.log("el nombre");
    console.log(name);

    console.log("profile pic");
    console.log(profile_pic);


  
    return (
        <NativeBaseProvider>
      <View style={styles.estilo}>

        

     

<Box   alignItems="center">
<Pressable onPress={() => navigation.navigate('Details',{imagelink:imagelink,text:text,likes:likes,name:name,profile_pic:profile_pic,navigation:navigation,userid:userid})}>
    <SharedElement id={`item.${imagelink}.photo`}>
      <Box marginTop={alternativestyle} marginLeft={3} marginRight={3} maxW="80" rounded="lg" overflow="hidden"  borderColor="coolGray.600" borderWidth="0"  >
        <Box >
          <AspectRatio  w="100%" ratio={9 / 16}>
            <Image   source={{
            uri: imagelink
          }} alt="image" />
          </AspectRatio>
          <Center 
          width="100%"
          bg="#00000065"   
                  
         position="absolute" bottom="0" px="3" py="1.5">

            

            <View>
            <Text style={styles.textprimary} >{text}</Text>
        <Text style={styles.textlikes} >{likes} Likes </Text>        
            </View>
       

          </Center>
        </Box>
        
      </Box>
      </SharedElement>
      </Pressable>
    </Box>
    

      </View>
      </NativeBaseProvider>
    );
  
};



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
    fontSize:14,
    textAlign:'left',
 },

 textprimary:{
    color:'white',
    fontSize:18,
 },

 estilo:{
    flex: 1,

    flexDirection: 'column',

    margin: 1,
    backgroundColor:'white',
 },

 

});

export default GalleryScreen