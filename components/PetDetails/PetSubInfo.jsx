import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import PetSubInfoCard from "./PetSubInfoCard";

const PetSubInfo = ({ pet }) => {
    return (
        <View
            style={{
                marginTop: 20,
                padding: 20,
            }}
        >
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <PetSubInfoCard
                    icon={require("../../assets/images/calendar.png")}
                    title={"Age"}
                    value={pet?.age + " Years"}
                ></PetSubInfoCard>
                <PetSubInfoCard
                    icon={require("../../assets/images/bone.png")}
                    title={"Breed"}
                    value={pet?.breed}
                ></PetSubInfoCard>
            </View>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <PetSubInfoCard
                    icon={require("../../assets/images/sex.png")}
                    title={"Sex"}
                    value={pet?.sex}
                ></PetSubInfoCard>
                <PetSubInfoCard
                    icon={require("../../assets/images/bone.png")}
                    title={"Weight"}
                    value={pet?.weight || "unknown"}
                ></PetSubInfoCard>
            </View>
        </View>
    );
};

export default PetSubInfo;
