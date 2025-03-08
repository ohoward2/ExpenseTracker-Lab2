import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import TransactionDetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator();

// User authentication
// If username is "admin" and password is "admin" then user is authenticated
const userAuthent = () => {
    const [user, setUser] = useState<null | { username: string }>(null);

    const signIn = (username: string, password: string) => {
        if (username === "admin" && password === "admin") {
            setUser({ username });
        } else {
            console.log("Incorrect username or password");
        }
    };

    const signOut = () => {
        setUser(null);
    };

    return { user, signIn, signOut };
};

export default function RootNavigation() {
    const { user, signIn, signOut } = userAuthent();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={user ? "HomeScreen" : "SignInScreen"}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "darkseagreen",
                    },
                    headerTintColor: "white",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            >
                <Stack.Screen
                    name="SignInScreen"
                    options={{ 
                        headerShown: false,
                        title: 'Sign In'
                    }}
                >
                    {(props) => <SignInScreen {...props} signIn={signIn} />}
                </Stack.Screen>

                <Stack.Screen 
                    name="HomeScreen"
                    options={{ title: 'Dashboard' }}>
                    {(props) => <HomeScreen {...props} signOut={signOut} />}
                </Stack.Screen>

                <Stack.Screen 
                    name="TransactionDetailsScreen"
                    options={{ title: 'Transaction Details' }}>
                    {(props) => <TransactionDetailsScreen {...props} />}
                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    );
}
