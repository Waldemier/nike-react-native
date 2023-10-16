import {Image, StyleSheet, View, Text, SafeAreaView} from "react-native";
import {Feather} from "@expo/vector-icons";
import {CartItemType} from "../../types/cartProductType";

type CartListItemProps = {
    cartItem: CartItemType;
}

const CartListItem = (props: CartListItemProps) => {
    const cartItem: CartItemType = props.cartItem;
    const increaseQuantity = () => {

    };

    const decreaseQuantity = () => {

    };

    return (
      <SafeAreaView style={styles.container}>
          <Image source={{ uri: cartItem.product.image }} style={styles.image} />
          <View style={styles.contentContainer}>
              <View style={styles.information}>
                <Text style={styles.name}>{cartItem.product.name}</Text>
                <Text style={styles.size}>Size {cartItem.size}</Text>
              </View>
              <View style={styles.calculationContainer}>
                  <View style={styles.iconContainer}>
                      <Feather name={"minus-circle"} onPress={decreaseQuantity} style={styles.icon} />
                      <Text style={styles.quantity}>{cartItem.quantity}</Text>
                      <Feather name={"plus-circle"} onPress={increaseQuantity} style={styles.icon} />
                  </View>
                  <Text style={styles.price}>${cartItem.product.price}.0</Text>
              </View>
          </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10
    },
    image: {
        width: "40%",
        aspectRatio: 1
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-between'
    },
    icon: {
        fontSize: 24,
        color: 'gray'
    },
    plusIcon: {
        margin: 15
    },
    quantity: {
        color: 'gray',
        marginHorizontal: 10,
        fontWeight: 'bold'
    },
    contentContainer: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        flex: 1
    },
    name: {
        fontWeight: '500',
        fontSize: 18
    },
    size: {
        color: 'gray',
        fontSize: 16
    },
    calculationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    information: {

    },
    price: {
        fontSize: 16,
        fontWeight: '500'
    }
});

export default CartListItem;