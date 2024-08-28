import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

const Index = () => {
    const { user } = useUser();
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {user ? (
                <Redirect href={"/(tabs)/home"}></Redirect>
            ) : (
                <Redirect href={"/login"}></Redirect>
            )}
        </View>
    );
};

export default Index;
