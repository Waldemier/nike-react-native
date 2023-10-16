import {Image, Pressable, StyleSheet, View} from "react-native";
import {ProductType} from "../../types/productType";
import navigation from "../../navigation";
import {NavigationProp} from "@react-navigation/native";

type ProductProps = {
  navigation: NavigationProp<any>;
  product: ProductType;
};

const Product = (props: ProductProps) => {
    return (
        <Pressable onPress={() => props.navigation.navigate('Product Details', { productName: props.product.name })} style={styles.itemContainer}>
            <Image style={styles.image}  source={{uri: props.product.image }}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        aspectRatio: 1
    },
    itemContainer: {
        width: "50%",
        padding: 1
    }
});

export default Product;