import { Entypo, EvilIcons, Feather, FontAwesome5 } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { Icon } from "react-native-elements"
import MapScreen from "../screen/MapScreen"
import PostScreen from "../screen/PostScreen"


const HomeTopPostNavigator = () => {
    const Tab = createMaterialTopTabNavigator()
    return (
        
        <Tab.Navigator 
        tabBarOptions={{
            activeTintColor: '#f15454',
            inactiveTintColor: 'gray',
            tabStyle:{
                marginTop:(Platform.OS === 'ios') ? 0 : 0,
                height : 55,
                flexDirection: 'row'
              },
            labelPosition: 'beside-icon',
            indicatorStyle:{
                backgroundColor:'#f15454'
            }
            
        }}>
            <Tab.Screen
                name="List"
                component={PostScreen}

                options={
                    {
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
                name="Map"
                component={MapScreen}
                options={
                    {
                            tabBarIcon: ({ color }) => (
                            <Entypo 
                                name="heart-outlined"
                                color={color}
                                size={25} />
                        )
                    }
                }
            />





        </Tab.Navigator>
    )

}

export default HomeTopPostNavigator