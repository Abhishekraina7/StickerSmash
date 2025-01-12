import { View, StyleSheet, Pressable, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function Button({ label, theme, onPress }) {
    if (theme === 'primary') {
        return (
            <View style={[
                styles.buttonContainer,
                { borderWidth: 4, borderColor: 'yellow', borderRadius: 18 }
            ]}>
                <Pressable
                    style={[styles.button, { backgroundColor: 'white' }]}
                    onPress={(onPress)}>
                    <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
                    <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
                </Pressable>
            </View>
        );
    }
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1,
    },
    button: {
        boarderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: 'white',
        fontsize: 16,
    },
});