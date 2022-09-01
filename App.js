/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Node, useState,useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//imports from Apis and libraries


import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { createStackNavigator,TransitionSpecs,TransitionPresets } from '@react-navigation/stack';


//import from screens
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

//import componets
import NavBar from './src/componets/NavBar/NavBar';




const App = () => {

  //const Stack = createSharedElementStackNavigator();

  const Stack = createStackNavigator();


  const isDarkMode = useColorScheme() === 'dark';

  const forFade = ({ current }) => ({
    cardStyle    : {
      opacity: current.progress,
    },
  });
 

  return (

    <NativeBaseProvider>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Discover" options={{ title: <NavBar/> ,     headerShadowVisible: false, headerBackTitleVisible: false   }}   component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: false,  cardStyleInterpolator: forFade}}  />
        <Stack.Screen name="Profile" options={{ title:"X", headerShown: false, headerShadowVisible: false, headerBackTitleVisible: false,...TransitionPresets.SlideFromRightIOS  }}   component={ProfileScreen}  />
         
      </Stack.Navigator>
    </NavigationContainer> 

    </NativeBaseProvider>
  );
};

//<Text style={styles.item}>{item.key}</Text>

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
   texttitle:{
    fontWeight:'bold',
    color: 'black',
    fontSize:24,   
   
},
containertext:{
  textAlign:'center',
}
});


/*
   <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>


         

          <View style={styles.container}>
         
      <FlatList
        data={Imagedata}   
        numColumns={2}    
       
        
        ItemSeparatorComponent={
            () => <View style={{ width: 10, backgroundColor: 'pink' }}/>
        }     
        renderItem={({item,index}) =>       
       
        
      <GalleryScreen 
      imagelink={item.urls.regular}
      index={index}
      text={item.alt_description}
      likes={item.likes}
      
      />
      
      
      
      }

      
      
      />

      
    </View>



        
          
        </View>
      </ScrollView>
    </SafeAreaView>



*/

export default App;


