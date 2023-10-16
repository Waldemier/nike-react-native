import {Pressable, StyleSheet, Text} from "react-native";

type ButtonProps = {
    text: string;
    callback: () => void;
}

const Button = (props: ButtonProps) => {
    return (
        <Pressable onPress={props.callback} style={styles.button}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        alignSelf: 'center',
        width: '90%',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    }
})

export default Button;