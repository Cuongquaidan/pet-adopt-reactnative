import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";

const AboutPet = ({ pet }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <View
            style={{
                padding: 20,
            }}
        >
            <Text
                style={{
                    fontFamily: "outfit-medium",
                    fontSize: 20,
                }}
            >
                About {pet?.name}
            </Text>
            <Text
                numberOfLines={readMore ? 3 : 30}
                style={{
                    fontFamily: "outfit",
                    fontSize: 14,
                }}
            >
                {pet?.about ||
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos quis veritatis molestias ullam nesciunt sequi recusandae tenetur est mollitia voluptatum quae perspiciatis itaque quo, dicta exercitationem aut dolorem porro?"}
            </Text>
            {!readMore ? (
                <Pressable onPress={() => setReadMore(true)}>
                    <Text
                        style={{
                            fontFamily: "outfit",
                            fontSize: 14,
                            color: Colors.SECONDARY,
                        }}
                    >
                        Read more
                    </Text>
                </Pressable>
            ) : (
                ""
            )}
        </View>
    );
};

export default AboutPet;
