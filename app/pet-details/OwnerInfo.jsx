import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";
const OwnerInfo = ({ pet }) => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flex: 1,
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                    }}
                >
                    {pet?.userImage ? (
                        <Image
                            source={{ uri: pet?.userImage }}
                            style={styles.userImage}
                        ></Image>
                    ) : (
                        <Ionicons name="person" size={50} color="black" />
                    )}
                    <View>
                        <Text
                            style={{
                                fontFamily: "outfit-medium",
                                fontSize: 17,
                            }}
                        >
                            {pet?.username || "Unknown"}
                        </Text>
                        <Text
                            style={{
                                fontFamily: "outfit",
                                color: Colors.GRAY,
                            }}
                        >
                            Pet Owner
                        </Text>
                    </View>
                </View>
                <Ionicons name="send" size={24} color="black" />
            </View>
        </View>
    );
};

export default OwnerInfo;
const styles = StyleSheet.create({
    userImage: {
        width: 50,
        height: 50,
        objectFit: "cover",
        borderRadius: 99,
    },
    container: {
        paddingHorizontal: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        borderWidth: 1,
        borderRadius: 15,
        padding: 20,
        marginHorizontal: 20,
        backgroundColor: Colors.WHITE,
    },
});
