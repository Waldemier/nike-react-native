import {StyleSheet, View, Text} from "react-native";

type TotalProps = {
  total: number;
};

const Total = (props: TotalProps) => {
    const total = props.total ?? 0.00;
    const deliveryDefaultValue: number = 10.00;
    return (
        <View style={styles.totalContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.text}>{total.toFixed(2)} US$</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>{deliveryDefaultValue.toFixed(2)} US$</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.textTotal}>Total</Text>
                <Text style={styles.textTotal}>{(total + deliveryDefaultValue).toFixed(2)} US$</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    totalContainer: {
        borderTopWidth: 1,
        borderColor: 'gainsboro',
        marginTop: 10,
        paddingTop: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginVertical: 2
    },
    text: {
        fontSize: 16,
        color: 'gray'
    },
    textTotal: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500'
    }
});

export default Total;