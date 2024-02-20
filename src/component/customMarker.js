
import { Text } from "react-native"
import { Marker } from "react-native-maps"
import tw from "twrnc"


const CustomMarker = (props) => {
    const { item , isSelected,onPress } = props
    return (
        <Marker
        onPress= {onPress}
        coordinate={item.coordinate}
        title={item.title}
        identifier={item.id}
    >
        <Text style={tw`${isSelected ?"bg-black text-white":"bg-white text-black" }  border border-gray-400 rounded-xl p-1 font-bold text-sm`}>${item.totalPrice}</Text>
    </Marker>

)}

export default CustomMarker


