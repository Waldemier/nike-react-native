import {ProductType} from "../../types/productType";
import Product from "../../components/Product/Product";
import {FlatList, StyleSheet} from "react-native";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";

type ProductsScreenProps = {
}

const ProductsScreen = (productsScreenProps: ProductsScreenProps) => {
    const navigation: NavigationProp<any> = useNavigation();
    const products = useSelector((state: any) => state.products.products)

    return (
        <FlatList<ProductType> data={products} renderItem={(item) =>
            (
                <Product product={item.item} navigation={navigation} />
            )}
           numColumns={2}
           showsVerticalScrollIndicator={false}
        />
    );
}

const styles = StyleSheet.create({});

export default ProductsScreen;