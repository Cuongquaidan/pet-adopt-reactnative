import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";
import Colors from "../../constants/Colors";
const Category = ({ category }) => {
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(["Dog"]);
    const getCategories = async () => {
        setCategoryList([]);
        const snapshot = await getDocs(collection(db, "Category"));
        snapshot.forEach((doc) => {
            setCategoryList((categoryList) => [...categoryList, doc.data()]);
        });
    };
    useEffect(() => {
        getCategories();
    }, []);
    return (
        <View style={{ marginTop: 20 }}>
            <Text
                style={{
                    fontFamily: "outfit-medium",
                    fontSize: 20,
                }}
            >
                Category
            </Text>
            <FlatList
                data={categoryList}
                numColumns={4}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => {
                            setSelectedCategory(item.name);
                            category(item.name);
                        }}
                    >
                        <View
                            style={[
                                styles.container,
                                selectedCategory == item.name &&
                                    styles.selectedCategoryContainer,
                            ]}
                        >
                            <Image
                                source={{ uri: item?.imageURL }}
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            ></Image>
                        </View>
                        <Text
                            style={{
                                textAlign: "center",
                                fontFamily: "outfit",
                            }}
                        >
                            {item?.name}
                        </Text>
                    </TouchableOpacity>
                )}
            ></FlatList>
        </View>
    );
};

export default Category;
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.LIGHT_PRIMARY,
        padding: 15,
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.PRIMARY,
        margin: 5,
    },
    selectedCategoryContainer: {
        backgroundColor: Colors.SECONDARY,
        borderColor: Colors.SECONDARY,
    },
});
