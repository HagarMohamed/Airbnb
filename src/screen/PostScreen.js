import { FlatList } from "react-native"

import { tw } from "twrnc"
import Post from "../component/post"
import MyPosts from "../data/mockposts"

const PostScreen = () => {
    return (
        <FlatList
            data={MyPosts}
            renderItem={({ item }) => (
                <Post post={item} />
            )}
        />
    )

}

export default PostScreen