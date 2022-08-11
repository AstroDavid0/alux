import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import { HamburgerIcon,Select,FormControl,CheckIcon,TextArea,Input,Stack,AlertDialog,Button,HStack,Spinner,Heading,Modal,Box,AspectRatio,Center,NativeBaseProvider,StatusBar,IconButton,Icon,MaterialIcons  } from "native-base";


const NavBar = ({}) => {

    return(       
        

        <View style={styles.container} >            
            <Text style={styles.logo} >
            <HamburgerIcon  size="8" color="black" />
            </Text>           
           
            <Text style={styles.texttitle}>
            Discover
            </Text>         
            

        </View> 
 

    );
};


const styles= StyleSheet.create({
    container:{       
        width:'100%',       
        flexDirection: "row",      
       
    },

    container_PRIMARY:{
        backgroundColor:'#fa4b4b',
    },

    container_TERTIARY:{

    },

    texttitle:{
        fontWeight:'bold',
        color: 'black',
        fontSize:24,
        paddingLeft:120,
        flex:2,       
       
    },
   
    logo:{
        paddingTop:5,
        flex:1,
       
    }
})

export default NavBar;