import { Stack } from "expo-router"; //expo-router: It manages navigation between screens and uses the same components across multiple platforms. 

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="(tabs)" options={{ headerTitle: "StcikerSmash" }}></Stack.Screen>
    <Stack.Screen name="+not-found" options={{}} />
  </Stack>
}
