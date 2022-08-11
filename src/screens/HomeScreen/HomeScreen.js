import { Text, View, Image, StyleSheet, useWindowDimensions,ScrollView,ActivityIndicator,SafeAreaView, useColorScheme,StatusBar,FlatList} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Select,FormControl,CheckIcon,TextArea,Input,Stack,AlertDialog,Button,HStack,Spinner,Heading,Modal,Box,AspectRatio,Center,NativeBaseProvider  } from "native-base";
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

//import from screens
import GalleryScreen from '../GalleryScreen';


const HomeScreen = ({navigation}) => {



    useEffect(() => {  

  
        calldata();    
    
    
    }, [ ]);

    const [Imagedata, setImagedata] = useState([]); // Initial empty array of the imagedata

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
    
      const data = await unsplash.search.getPhotos({
        query: 'beach',
        page: 1,
        perPage: 10,
        color: 'green',
        orientation: 'portrait',
      }).then(result => {
        if (result.errors) {
           //handle error here
          console.log('error occurred: ', result.errors[0]);
          
        } else {
          // handle success here
          const photo = result.response.results;
          setImagedata(photo);
          console.log(photo);
          
          
        }
      }); 
      
    
      
      }


  
    return (


   
   
        
        <View
          style={{
            backgroundColor:  Colors.white,
          }}>         

         
         
      <FlatList
        data={Imagedata}   
        numColumns={2}           
        ItemSeparatorComponent={
            () => <View style={{ width: 10, backgroundColor: 'white' }}/>
        }     
        renderItem={({item,index}) =>       
       
        
      <GalleryScreen 
      imagelink={item.urls.regular}
      index={index}
      text={item.description}
      likes={item.likes}
      name={item.user.name}
      profile_pic={item.user.profile_image.large}
      userid={item.user.username}
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
  });

export default HomeScreen