import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import PetListByCategory from "../../components/Home/PetListByCategory";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "../../constants/Colors";
const Home = () => {
    return (
        <View style={{ padding: 20, marginTop: 20 }}>
            {/*Header*/}
            <Header></Header>
            {/*Slider*/}
            <Slider></Slider>
            {/*List of PETS*/}
            <PetListByCategory></PetListByCategory>
            {/*Add New Pet options*/}
            <TouchableOpacity style={styles.addNewPetContainer}>
                <MaterialIcons name="pets" size={24} color="black" />
                <Text
                    style={{
                        fontFamily: "outfit-medium",
                        fontSize: 18,
                    }}
                >
                    Add New Pet
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;
const styles = StyleSheet.create({
    addNewPetContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        marginTop: 20,
        padding: 20,
        backgroundColor: Colors.LIGHT_PRIMARY,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 15,
        borderStyle: "dashed",
        justifyContent: "center",
    },
});
