import {ProductType} from "../../types/productType";
import {Animated, FlatList, Image, Pressable, ScrollView, StyleSheet, useWindowDimensions, View} from "react-native";
import Text = Animated.Text;
import Button from "../../components/Button/Button";
import products from '../../../src/data/products.json';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {cartReducer} from "../../store/cartReducer";
import {CartItemType} from "../../types/cartProductType";
import {NavigationProp, useNavigation} from "@react-navigation/native";

type ProductDetailsScreenProps = {
    navigation: any;
    route: any;
}

const ProductDetailsScreen = (props: ProductDetailsScreenProps) => {
    const { productName } = props.route.params;
    const product: ProductType | undefined = products.find((product: ProductType) => product.name === productName);
    const { width } = useWindowDimensions();
    const dispatch = useDispatch();
    const navigation: NavigationProp<any> = useNavigation();
    const addToCart = (product: ProductType | undefined): void => {
        if(!product) return;

        dispatch(cartReducer.actions.addProductToCart({
            product: {
                image: product.image,
                name: product.name,
                price: product.price
            },
            size: product.sizes[0],
            quantity: 1
        } as CartItemType));

        navigation.navigate('Products', {});
    };

    return (
        <View>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <FlatList<string> data={product?.images} renderItem={({item}) => (
                    <Image source={{ uri: item }} style={{ ...styles.image, width: width }} />
                )}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled={true}
                />
                <View style={styles.content}>
                    <Text style={styles.name}>{product?.name}</Text>
                    <Text style={styles.price}>${product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>
            </ScrollView>
            <Button callback={() => addToCart(product)} text={"Add to cart"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    image: {
        aspectRatio: 1
    },
    content: {
        padding: 20
    },
    name: {
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10
    },
    price: {
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 1.5
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: '300'
    }
});

export default ProductDetailsScreen;