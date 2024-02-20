import { Image, Text, useWindowDimensions, View } from "react-native"
import tw from "twrnc";

const CarouselPost = (props) => {



    const post = props.post
    const width = useWindowDimensions().width
    return (
        <View style={tw`m-2 h-30`}>

            <View style={[tw`overflow-hidden flex-row  rounded-xl bg-white shadow  shadow-lg shadow-gray-900/50`,{
                width:width-80
            }]}>
                <Image style={[tw` bg-white aspect-square   h-full`, {
                    resizeMode: "cover",
                }]} source={{
                    uri: post.image
                }} />
                <View style={tw` mx-2 flex-auto`}>
                    <Text style={tw`my-2 text-gray-600 `}>{post.bed} bed {post.bedroom} bedroom</Text>
                    <Text style={tw` text-base`} numberOfLines={2}>{post.type} {post.title}</Text>
                    <Text style={tw`my-2 text-base `}>
                        <Text style={tw`text-gray-600 line-through`}>${post.oldPrice} </Text>
                        <Text style={tw`font-bold`}>${post.newPrice}  </Text>
                        / night
                    </Text>
                
                </View>
            </View>



        </View>
    );

};

export default CarouselPost