import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
    return (// we are using javascript objects to access the props inside the styles constant below
        <View
            style={styles.container}>
            <Text style={styles.text}> ABOUT WALI SCREEN</Text>
        </View >
    );
}

// actully we created a constent which will hand the styling using the react component (StyleSheet)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white', // you can also use hex-triplets here 
    }
});
