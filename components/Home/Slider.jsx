import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../Config/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
const Slider = () => {
    const [sliderList, setSliderList] = useState([]);
    const GetSliders = async () => {
        const snapshot = await getDocs(collection(db, "Sliders"));
        snapshot.forEach((doc) => {
            setSliderList((sliderList) => [...sliderList, doc.data()]);
        });
    };
    useEffect(() => {
        GetSliders();
    }, []);
    return (
        <View>
            <FlatList
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View>
                        <Image
                            source={{ uri: item?.imageURL }}
                            style={styles.sliderImage}
                        ></Image>
                    </View>
                )}
            ></FlatList>
        </View>
    );
};

export default Slider;
const styles = StyleSheet.create({
    sliderImage: {
        width: Dimensions.get("screen").width * 0.9,
        height: 160,
        borderRadius: 15,
        marginRight: 15,
        marginLeft: 15,
        marginTop: 15,
    },
});
