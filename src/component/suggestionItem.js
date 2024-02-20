import { View } from "react-native"
import { Icon } from "react-native-elements"



const SuggestionItem = ({ item }) => {
    return (
    <View>
        <View style={tw`flex-row items-center p-2 border-b border-gray-100`}>
            <Icon
                style={tw`w-10 rounded-md bg-gray-200 p-2 mr-5`}
                type="Entypo"
                name="location-pin"
                size={25} />
            <Text>{item.description}</Text>
        </View>
    </View>

)}

export default SuggestionItem


