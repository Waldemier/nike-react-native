import {NavigationContainer} from "@react-navigation/native";
import ProductsScreen from "./screens/ProductsScreen/ProductsScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProductDetailsScreen from "./screens/ProductDetailsScreen/ProductDetailsScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen/ShoppingCartScreen";
import { FontAwesome5 } from '@expo/vector-icons';
import {Pressable, StyleSheet, Text} from "react-native";
import {useSelector} from "react-redux";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const cartItems = useSelector((state: any) => state.cart?.cart)

    return (
       <NavigationContainer>
           <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', contentStyle: { backgroundColor: 'white' } }}>
               <Stack.Screen name="Products" component={ProductsScreen} options={({ navigation }) => ({
                   headerRight: () => (
                       <Pressable onPress={() => navigation.navigate('Cart')} style={styles.cart}>
                           <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                           <Text style={styles.cartQuantity}>{cartItems.length}</Text>
                       </Pressable>
                   )
               })} />
               <Stack.Screen name="Product Details"
                             component={ProductDetailsScreen}
                             options={{ presentation: 'fullScreenModal' }} />
               <Stack.Screen name="Cart" component={ShoppingCartScreen} />
           </Stack.Navigator>
       </NavigationContainer>
    );
}

const styles = StyleSheet.create({
   cart: {
       flexDirection: 'row'
   },
   cartQuantity: {
       marginLeft: 5,
       fontWeight: '500'
   }
});

export default Navigation;