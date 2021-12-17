import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import ReportsScreen from "./src/screens/ReportsScreen/ReportsScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import LocationScreen from "./src/screens/LocationScreen/LocationScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import CustomDrawer from "./src/components/Drawer/Drawer";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./src/redux/store";
import MessageScreen from "./src/screens/MessageScreen/MessageScreen";
import ReportScreen from "./src/screens/ReportScreen/ReportScreen";
import ComingSoonScreen from "./src/screens/ComingSoonScreen/ComingSoonScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setCurrentUser } from "./src/redux/actions/user.action";
import AirlineScreen from "./src/screens/AirlinesScreen/AirlinesScreen";

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

function App() {
  const [fontLoaded, setfontLoaded] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const Drawer = createDrawerNavigator();

  const loadFonts = async () => {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
      Raleway: require("./assets/fonts/Raleway-Regular.ttf"),
      DancingScript: require("./assets/fonts/DancingScript-Regular.ttf"),
    });

    setfontLoaded(true);
  };

  const checkForUser = async () => {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      const userJson = JSON.parse(user);
      dispatch(setCurrentUser(userJson));
    }
  };

  useEffect(() => {
    loadFonts();
    checkForUser();
  }, []);

  return fontLoaded ? (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={({ navigation }) => (
          <CustomDrawer navigation={navigation} />
        )}
        screenOptions={{ unmountInactiveRoutes: true }}
        initialRouteName="Welcome"
      >
        <Drawer.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Drawer.Screen
          name="Reports"
          options={{ headerShown: false }}
          component={currentUser ? ReportsScreen : LoginScreen}
        />
        <Drawer.Screen
          options={{ headerShown: false }}
          name="LogIn"
          component={LoginScreen}
        />
        <Drawer.Screen
          name="Location"
          component={({ navigation }) => (
            <ComingSoonScreen title="LOCATION" navigation={navigation} />
          )}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Message"
          options={{ headerShown: false }}
          component={MessageScreen}
        />
        <Drawer.Screen
          name="Report"
          options={{ headerShown: false, unmountOnBlur: true }}
          component={ReportScreen}
        />
        <Drawer.Screen
          name="Doctors"
          component={({ navigation }) => (
            <ComingSoonScreen navigation={navigation} title="Doctors" />
          )}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Airlines"
          component={AirlineScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Services"
          component={({ navigation }) => (
            <ComingSoonScreen title="services" navigation={navigation} />
          )}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Certificates"
          component={({ navigation }) => (
            <ComingSoonScreen title="Certificates" navigation={navigation} />
          )}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Feedback"
          component={({ navigation }) => (
            <ComingSoonScreen title="Feedback" navigation={navigation} />
          )}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Timings"
          component={({ navigation }) => (
            <ComingSoonScreen title="Timing" navigation={navigation} />
          )}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="About"
          component={({ navigation }) => (
            <ComingSoonScreen title="About Us" navigation={navigation} />
          )}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : null;
}

export default AppWrapper;
