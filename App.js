import React, {useEffect, useState} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import ReportsScreen from './src/screens/ReportsScreen/ReportsScreen';
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import NewsScreen from './src/screens/NewsScreen/NewsScreen';
import ServicesScreen from './src/screens/ServicesScreen/ServicesScreen';
import DoctorsScreen from './src/screens/DoctorsScreen/DoctorsScreen';
import CertificatesScreen from './src/screens/CertificatesScreen/CertificatesScreen';
import FeedbackScreen from './src/screens/FeedbackScreen/Feedback';
import LocationScreen from './src/screens/LocationScreen/LocationScreen';
import TimingScreen from './src/screens/TimingScreen/TimingScreen';
import AboutScreen from './src/screens/AboutScreen/AboutScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';



export default function App() {

  const [fontLoaded, setfontLoaded] = useState(false)

  const Drawer = createDrawerNavigator();

  const loadFonts = async() => {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
      Raleway: require('./assets/fonts/Raleway-Regular.ttf'),
      DancingScript: require('./assets/fonts/DancingScript-Regular.ttf'),

    });

    setfontLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, [])

  const options = {
    animations: {
          setRoot: {
            enter: {
              waitForRender: true,
              enabled: false,
              translationY: {
                from: 0,
                to: 1,
                duration: 3,
              },
            },
            exit:{
              waitForRender: true,
              enabled: false,
              translationY: {
                from: 1,
                to: 0,
                duration: 3,
              },
            }
          },
        },
      };

  return (
    fontLoaded ?
      <NavigationContainer>
      <Drawer.Navigator  screenOptions={options} initialRouteName="LogIn" mode="modal">
          <Drawer.Screen options={{headerTitleStyle: {color: "white"}}} name="Welcome" component={WelcomeScreen} />
          <Drawer.Screen name="Reports" component={ReportsScreen} />
          <Drawer.Screen options={{ headerShown: false }} name="LogIn" component={LoginScreen} />
          <Drawer.Screen name="News" component={NewsScreen} />
          <Drawer.Screen name="Services" component={ServicesScreen} />
          <Drawer.Screen name="Doctors" component={DoctorsScreen} />
          <Drawer.Screen name="Certificates" component={CertificatesScreen} />
          <Drawer.Screen name="Feedback" component={FeedbackScreen} />
          <Drawer.Screen name="Location" component={LocationScreen} />
          <Drawer.Screen name="Timings" component={TimingScreen} />
          <Drawer.Screen name="About Us" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer> : null
  );
}

