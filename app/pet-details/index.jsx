import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import PetInfo from "../../components/PetDetails/PetInfo";
import PetSubInfo from "../../components/PetDetails/PetSubInfo";
import AboutPet from "../../components/PetDetails/AboutPet";
import OwnerInfo from "./OwnerInfo";
import Colors from "../../constants/Colors";

const PetDetails = () => {
    const pet = useLocalSearchParams();
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: "",
        });
    }, []);
    return (
        <View>
            <ScrollView>
                <PetInfo pet={pet}></PetInfo>
                <PetSubInfo pet={pet}></PetSubInfo>
                <AboutPet pet={pet}></AboutPet>
                <OwnerInfo pet={pet}></OwnerInfo>

                <View style={{ height: 70 }}></View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.adoptBtn}>
                    <Text
                        style={{
                            textAlign: "center",
                            fontFamily: "outfit-bold",
                        }}
                    >
                        Adopt me
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PetDetails;
const styles = StyleSheet.create({
    adoptBtn: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        marginTop: 20,
    },
    bottomContainer: {
        position: "absolute",
        width: "100%",
        bottom: 0,
    },
});
