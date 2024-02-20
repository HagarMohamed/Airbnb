import Post from "../component/post";

const Router = () => {
    const Stack = createNativeStackNavigator()
    return (
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Post}  options={{ headerShown: false }}  />
            <Stack.Screen name="Home" component={HomeBottomTabNavigator}  options={{ headerShown: false }}  />

            </Stack.Navigator>

    );
};