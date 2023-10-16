import {Animated, FlatList, StyleSheet, View} from "react-native";
import Text = Animated.Text;
import {CartItemType} from "../../types/cartProductType";
import CartListItem from "../../components/CartListItem/CartListItem";
import Button from "../../components/Button/Button";
import Total from "../../components/Total/Total";
import cart from "../../data/cart";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

type ShoppingCartScreenProps = {
    navigation: any;
}

const ShoppingCartScreen = (props: ShoppingCartScreenProps) => {
    const cartItems = useSelector((state: any) => state.cart?.cart);
    const [total, setTotal] = useState(0);
    const checkout = () => {
        console.warn("Checkout");
    };

    useEffect(() => {
        cartItems.forEach((item: CartItemType) =>
            (setTotal(prevTotal => (prevTotal += (item.product?.price * item.quantity)))));
    }, [cartItems]);

    return (
        <>
            <FlatList data={cartItems ?? []} renderItem={({item}) => (<CartListItem cartItem={item} />)}
                      ListFooterComponent={() => (
                        <Total total={total} />
                      )}
            />
            <Button text={"Checkout"} callback={checkout} />
        </>
    );
}

const styles = StyleSheet.create({});

export default ShoppingCartScreen;