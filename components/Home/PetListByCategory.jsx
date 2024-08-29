import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";
import PetListItem from "./PetListItem";

const PetListByCategory = () => {
    const [petList, setPetList] = useState([]);
    const [isLoading, SetIsLoading] = useState(false);
    const GetPetList = async (category) => {
        SetIsLoading(true);
        setPetList([]);
        const q = query(
            collection(db, "Pets"),
            where("category", "==", category)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setPetList((petList) => [...petList, doc.data()]);
        });
        SetIsLoading(false);
    };
    useEffect(() => {
        GetPetList("Dog");
    }, []);
    return (
        <View>
            <Category category={(value) => GetPetList(value)}></Category>
            <FlatList
                style={{ marginTop: 20 }}
                data={petList}
                horizontal={true}
                renderItem={({ item, index }) => (
                    <PetListItem pet={item}></PetListItem>
                )}
                refreshing={isLoading}
            ></FlatList>
        </View>
    );
};

export default PetListByCategory;
