import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw from "twrnc";
import PostScreen from "../screen/PostScreen";
import GuestScreen from "../screen/GuestScreen";
import SearchSuggestionScreen from "../screen/SearchSuggestionScreen";
import HomeBottomTabNavigator from "./HomeBottomTabNavigator";
import HomeTopPostNavigator from "./HomeTopPostNavigator";



const Router = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeBottomTabNavigator}  options={{ headerShown: false }}  />
            <Stack.Screen name="PostScreen" component={PostScreen} options={{ headerShown: false }} />
            <Stack.Screen name="GuestScreen" component={GuestScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SearchSuggestionScreen" component={SearchSuggestionScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default Router