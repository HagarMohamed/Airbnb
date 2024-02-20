import { Entypo, EvilIcons, Feather, FontAwesome5 } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "react-native-elements"
import GuestScreen from "../screen/GuestScreen"
import PostScreen from "../screen/PostScreen"
import SearchSuggestionScreen from "../screen/SearchSuggestionScreen"
import HomeTopPostNavigator from "./HomeTopPostNavigator"


const HomeBottomTabNavigator = () => {
    const Tab = createBottomTabNavigator()

    return (
        
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454'
        }}>
            <Tab.Screen
                name="Explore"
                component={HomeTopPostNavigator}

                options={
                    {
                        headerShown: false,
                        headerShadowVisible: false,
                        headerTintColor: '#fff',
                        tabBarIcon: ({ color }) => (
                            <Icon type="Entypo"
                                name="search"
                                color={color}
                                size={25} />
                        )
                    }
                }
            />

            <Tab.Screen
                name="Saved"
                component={SearchSuggestionScreen}

                options={
                    {
                        headerShown: false,
                        headerShadowVisible: false,
                        headerTintColor: '#fff',
                        tabBarIcon: ({ color }) => (
                            <Entypo 
                                name="heart-outlined"
                                color={color}
                                size={25} />
                        )
                    }
                }
            />


            <Tab.Screen
                name="Airbnb"
                component={GuestScreen}

                options={
                    {
                        headerShown: false,
                        headerShadowVisible: false,
                        headerTintColor: '#fff',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5 type="FontAwesome5Brands"
                                name="airbnb"
                                color={color}
                                size={25} />
                        )
                    }
                }
            />




            <Tab.Screen
                name="Messages"
                component={PostScreen}

                options={
                    {
                        headerShown: false,
                        headerShadowVisible: false,
                        headerTintColor: '#fff',
                        tabBarIcon: ({ color }) => (
                            <Feather 
                                name="message-square"
                                color={color}
                                size={25} />
                        )
                    }
                }
            />


            <Tab.Screen
                name="Profile"
                component={PostScreen}

                options={
                    {
                        headerShown: false,
                        headerShadowVisible: false,
                        headerTintColor: '#fff',
                        tabBarIcon: ({ color }) => (
                            <EvilIcons 
                                name="user"
                                color={color}
                                size={25} />
                        )
                    }
                }
            />




        </Tab.Navigator>
    )

}

export default HomeBottomTabNavigator