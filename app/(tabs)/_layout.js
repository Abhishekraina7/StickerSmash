import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Tablayout() {
    return (
        <Tabs
            // this part changes the color of the whole section as a whole
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
                headerstyle: {
                    backgroundColor: '#25292e',
                },
                headerShadowVisibl: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#25292e',
                }
            }}
        >
            <Tabs.Screen
                // this section deals with the navigation and the styling of that specific tab or Icon on the tab bar.
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                // this section deals with the navigation and the styling of that specific tab or Icon on the tab bar.
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}