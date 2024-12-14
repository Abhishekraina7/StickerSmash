import { View, StyleSheet } from "react-native";
import ImageViewer from "../../Components/ImageViewer";
import Button from "../../Components/Button";
import { launchImageLibraryAsync } from "expo-image-picker";
import { useState } from "react";


const PlaceholderImage = require("../../assets/images/background-image.png");

// function ImageSelector() {
//   // Initialize state for selectedImage with an initial value of undefined
//   const [selectedImage, setSelectedImage] = useState(undefined);

//   // Function to handle image selection
//   const handleImageSelection = (imageUrl) => {
//     setSelectedImage(imageUrl); // Update the state with the selected image URL
//   }
// }

export default function Index() {

  // Initialize state for selectedImage with an initial value of undefined
  const [selectedImage, setSelectedImage] = useState(undefined);

  // Function to handle image selection
  const handleImageSelection = (imageUrl) => {
    setSelectedImage(imageUrl); // Update the state with the selected image URL
  }

  const pickImageAsync = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    })
    if (!result.canceled) {
      //extract the uri from result object and assign it to the setSelectedImage state
      handleImageSelection(result.assets[0].uri);
      console.log(result);
    } else {
      alert('You did not select the image')
    }
  }

  return (// we are using javascript objects to access the props inside the styles constant below
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        <View style={styles.footerContainer}>
          <Button theme='primary' label="Choose a Photo" onPress={pickImageAsync} />
          <Button label="Use this photo" />
        </View>
      </View>
    </View >
  );
}

// actully we created a constent which will hand the styling using the react component (StyleSheet)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  ImageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
