
import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

import tw from "twrnc"

const data = [
    {
        id: 1,
        type: "Adults",
        desc: "Ages 13 or above"
    },
    {
        id: 2,
        type: "Children",
        desc: "Ages 2-12"
    },
    {
        id: 3,
        type: "Infants",
        desc: "Under 2"
    }
]

const GuestScreen = () => {

    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)
    return (

        <View style={tw`p-4 justify-between h-full`}>
            <View>
            <View style={tw`flex-row items-center  p-2 border-b border-gray-100 justify-between`}>
                        <View>
                            <Text style={tw`text-base font-bold`}>{data[0].type}</Text>
                            <Text style={tw`text-gray-500 text-sm`}>{data[0].desc}</Text>
                        </View>

                        <View style={tw`flex-row items-center justify-center `} >
                            <TouchableOpacity 
                            style={tw` border border-gray-400 w-8  h-8 justify-center items-center rounded-full`} 
                            onPress={()=>setAdults(Math.max(0,adults - 1))}>
                                <Text style={tw`text-gray-500 text-lg`}>-</Text>
                            </TouchableOpacity>
                            <Text style={tw`mx-5 text-base text-gray-500`}>{adults}</Text>
                            <TouchableOpacity style={tw` border border-gray-400 w-8  h-8 justify-center items-center rounded-full`}
                              onPress={ ()=> setAdults(adults + 1)}>
                                <Text style={tw`text-gray-500 text-lg`} >+</Text>
                            </TouchableOpacity>
                        </View>

                    </View>


                    <View style={tw`flex-row items-center  p-2 border-b border-gray-100 justify-between`}>
                        <View>
                            <Text style={tw`text-base font-bold`}>{data[1].type}</Text>
                            <Text style={tw`text-gray-500 text-sm`}>{data[1].desc}</Text>
                        </View>

                        <View style={tw`flex-row items-center justify-center `} >
                            <TouchableOpacity 
                            style={tw` border border-gray-400 w-8  h-8 justify-center items-center rounded-full`} 
                            onPress={()=>setChildren(Math.max(0,children - 1))}>
                                <Text style={tw`text-gray-500 text-lg`}>-</Text>
                            </TouchableOpacity>
                            <Text style={tw`mx-5 text-base text-gray-500`}>{children}</Text>
                            <TouchableOpacity style={tw` border border-gray-400 w-8  h-8 justify-center items-center rounded-full`}
                              onPress={ ()=> setChildren(children + 1)}>
                                <Text style={tw`text-gray-500 text-lg`} >+</Text>
                            </TouchableOpacity>
                        </View>

                    </View>


                    <View style={tw`flex-row items-center  p-2 border-b border-gray-100 justify-between`}>
                        <View>
                            <Text style={tw`text-base font-bold`}>{data[2].type}</Text>
                            <Text style={tw`text-gray-500 text-sm`}>{data[2].desc}</Text>
                        </View>

                        <View style={tw`flex-row items-center justify-center `} >
                            <TouchableOpacity 
                            style={tw` border border-gray-400 w-8  h-8 justify-center items-center rounded-full`} 
                            onPress={()=>setInfants(Math.max(0,infants - 1))}>
                                <Text style={tw`text-gray-500 text-lg`}>-</Text>
                            </TouchableOpacity>
                            <Text style={tw`mx-5 text-base text-gray-500`}>{infants}</Text>
                            <TouchableOpacity style={tw` border border-gray-400 w-8  h-8 justify-center items-center rounded-full`}
                              onPress={ ()=> setInfants(infants + 1)}>
                                <Text style={tw`text-gray-500 text-lg`} >+</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
            </View>

            <TouchableOpacity disabled={(adults===0)}
                    style={tw`bg-red-300 rounded-xl py-3 m-3 ${(adults===0) && "bg-gray-300"}`}>
                    <Text style={tw`text-xl text-center text-white `}>confirm</Text>
                </TouchableOpacity>
        
        

        </View>

    )

}

export default GuestScreen