import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import Colors from "../../constants/Colors";
import { useLocalSearchParams, useRouter } from "expo-router";

const PetListItem = ({ pet }) => {
    const router = useRouter();
    return (
        <TouchableOpacity
            onPress={() => {
                router.push({
                    pathname: "/pet-details",
                    params: pet,
                });
            }}
            style={{
                padding: 10,
                marginRight: 15,
                backgroundColor: Colors.WHITE,
                borderRadius: 10,
            }}
        >
            <Image
                source={{ uri: pet?.imageURL }}
                style={{
                    width: 150,
                    height: 135,
                    objectFit: "cover",
                    borderRadius: 10,
                }}
            ></Image>
            <Text
                style={{
                    fontFamily: "outfit-medium",
                    fontSize: 18,
                    textAlign: "center",
                }}
            >
                {pet.name}
            </Text>

            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        color: Colors.GRAY,
                        fontFamily: "outfit",
                    }}
                >
                    {pet?.breed}
                </Text>
                <Text
                    style={{
                        color: Colors.PRIMARY,
                        fontFamily: "outfit",
                        backgroundColor: Colors.LIGHT_PRIMARY,
                        paddingHorizontal: 5,
                        borderRadius: 10,
                        fontSize: 12,
                    }}
                >
                    {pet?.age} Years
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default PetListItem;
