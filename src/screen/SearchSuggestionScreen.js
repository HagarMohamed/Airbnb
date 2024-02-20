import { FlatList, Pressable, Text, TextInput, View } from "react-native"
import { Icon } from "react-native-elements"

import tw from "twrnc"
// import search from "../data/search"
import SuggestionItem from "../component/suggestionItem";
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SearchSuggestionScreen = () => {

    // const [searchInput, setSearch] = useState('')
    const navigation = useNavigation()

    return (
        <View style={tw`mb-4`}>

            <View style={tw`p-4 text-sm`}>
                <GooglePlacesAutocomplete
                    debounce={400}
                    placeholder={"What is your destination ..."}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    styles={{
                        container: {
                            flex: 0
                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}
                    renderItem = {(item) => <SuggestionItem item={item}/>}
                    query={{
                        key: 'AIzaSyB8TYYYt6N_tX97_lkNRGJrDFVy3o96wc4',
                        language: "en",
                        types:'(cities)'
                    }}
                    minLength={2}
                    fetchDetails={true}
                    suppressDefaultStyles
                    enablePoweredByContainer={false}
                    onPress={(data, details = null) => {
                            navigation.navigate("GuestScreen")
                    }}
                />
            </View>
            {/* <TextInput
                style={tw`m-5 text-sm`}
                placeholder="Where are you going ..."
                value={searchInput}
                onChange={setSearch} /> */}

            {/* <FlatList
                data={search}
                renderItem={({ item }) => (
                    <Pressable onPress={() => {
                        navigation.navigate("GuestScreen")
                    }}>
                        <View style={tw`flex-row items-center p-2 border-b border-gray-100`}>
                            <Icon
                                style={tw`w-10 rounded-md bg-gray-200 p-2 mr-5`}
                                type="Entypo"
                                name="location-pin"
                                size={25} />
                            <Text>{item.description}</Text>
                        </View>
                    </Pressable>

                )}
            /> */}

        </View>

    )

}

export default SearchSuggestionScreen