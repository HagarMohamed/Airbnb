import { useEffect, useRef, useState } from "react"
import { FlatList, Text, TouchableOpacity, useWindowDimensions, View } from "react-native"
import MapView from "react-native-maps"
import tw from "twrnc"
import CarouselPost from "../component/CarouselPost"
import CustomMarker from "../component/customMarker"
import MyPosts from "../data/mockposts"


const MapScreen = () => {

    const [selectedId, setSelected] = useState(null)
    const width = useWindowDimensions().width
    const carusalRef = useRef()
    const map = useRef()

    
    const viewConfig = useRef({ itemVisiblePercentThreshold: 70 })
    const onViewChange = useRef(({ viewableItems }) => {
        if(viewableItems.length > 0)
        setSelected(viewableItems[0].item.id)
    })


    useEffect(() => {
        if (!selectedId || !carusalRef) {
            return;
        }

        let index = MyPosts.findIndex((item) => item.id === selectedId)
        console.log(index)
        carusalRef.current.scrollToIndex({ index })
        let selectedItem = MyPosts[index]
        const region = {
            latitude: selectedItem.coordinate.latitude,
            longitude: selectedItem.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }
        map.current.animateToRegion(region);

    }, [selectedId])
    return (
        <View style={tw`h-full w-full`}>
            <MapView style={tw`flex-1`}
                mapType="standard"
                ref={map}
                initialRegion={{
                    latitude: 28.32922,
                    longitude: -16.514922,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }} >
                {
                    MyPosts.map(item =>
                        <CustomMarker
                            item={item}
                            isSelected={selectedId === item.id}
                            onPress={() => setSelected(item.id)}
                        />
                    )
                }



            </MapView>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                style={tw`absolute bottom-3  left-0 z-50 `}
                data={MyPosts}
                ref={carusalRef}
                snapToInterval={width - 80}
                snapToAlignment={"center"}
                decelerationRate={"fast"}
                viewabilityConfig={viewConfig.current}
                onViewableItemsChanged={onViewChange.current}
                renderItem={({ item }) => (
                    <CarouselPost post={item} />
                )}
            />


        </View>

    )

}

export default MapScreen