

import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

type SignInScreenProps = {
    signIn: (username: string, password: string) => void;
    navigation: any;
};

const SignInScreen = ({ signIn, navigation }: SignInScreenProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // function to handle signing in
    const handleSignIn = () => {
        if (email === "admin" && password === "admin") {
            signIn(email, password); 
            navigation.navigate("HomeScreen");
        } else {
            setError("Incorrect username or password");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to
            </Text>
            <Text style={styles.title}>ExpenseTracker!</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {error && <Text style={styles.error}>{error}</Text>}
            <TouchableOpacity onPress={handleSignIn} style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    welcome: {
        alignSelf: "center",
        justifyContent: "center",
        fontFamily: "serif",
        fontSize: 32,
    },
    title: {
        alignSelf: "center",
        justifyContent: "center",
        fontFamily: "serif",
        fontSize: 32,
        marginBottom: 32,
        fontWeight: "bold",
        color: "steelblue"

    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
    button: {
        backgroundColor: "darkseagreen",
        padding: 10,
        alignItems: "center",
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    error: {
        color: "red",
        marginBottom: 15,
    },

});

export default SignInScreen;
