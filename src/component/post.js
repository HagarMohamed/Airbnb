import { Image, Text, View } from "react-native"
import tw from "twrnc";

const Post = (props) => {

    const post = props.post
    //'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
    return (
        <View style={tw`m-2`}>

            <Image style={[tw`w-full aspect-video rounded-xl`, {
                resizeMode: "cover",
            }]} source={{
                uri: post.image
            }} />

            <Text style={tw`my-2 text-gray-600 `}>{post.bed} bed {post.bedroom} bedroom</Text>
            <Text style={tw`leading-5 text-base`} numberOfLines={2}>{post.title}</Text>
            <Text style={tw`my-2 text-base `}>
                <Text style={tw`text-gray-600 line-through`}>${post.oldPrice} </Text>
                <Text style={tw`font-bold`}>${post.newPrice}  </Text>
                / night
            </Text>
            <Text style={tw`underline text-gray-600`}>$75 {post.totalPrice} </Text>
        </View>
    );

};

export default Post