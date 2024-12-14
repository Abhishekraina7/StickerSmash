import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ imgSource, selectedImage }) {
    // if selectedImage is not empty then show the newly selected image and if nothing was selected then show the hardcoded (defautl imgSource)
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource
    return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});