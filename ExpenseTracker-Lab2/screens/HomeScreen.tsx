import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from "react-native";
import { useState, useEffect } from "react";

const HomeScreen = ({ signOut, navigation }: any) => {
    const [transactions, setTransactions] = useState([
        { id: "1", date: "2023-03-01", amount: 50, description: "Grocery Shopping", location: "London, ON", type: "Debit", category: "Shopping"  },
        { id: "2", date: "2023-03-02", amount: 120, description: "return train ticket to Toronto", location: "London, ON", type: "Credit", category: "Travel" },
    ]);

    // State management for "add transaction" inputs
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState("");


    // Function to handle adding a new transaction
    const handleAddTransaction = () => {
        // Error handling
        if (!date || !amount || !description || !location || !type || !category) {
            setError("Please fill out all fields.")
            return;
        }

        setError("");

        // Create new transaction
        const newTransaction = {
            id: (transactions.length + 1).toString(),
            date,
            amount: parseFloat(amount),
            description,
            location,
            type,
            category,
        };

        // Add new transaction to the list
        setTransactions([...transactions, newTransaction]);

        // Reset the input states
        setDate("");
        setAmount("");
        setDescription("");
        setLocation("");
        setType("");
        setCategory("");
    };

    // function to navigate to transactions details page
    const handleViewDetails = (transaction: any) => {
        navigation.navigate("TransactionDetailsScreen", { transaction });
    };

    // function to handle the logout and navigate back to the sign in screen
    const handleLogout = () => {
        signOut();
        navigation.navigate("SignInScreen");
    };

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={handleLogout} style={styles.logOutButton}>
                     <Text style={styles.buttonText}>Log Out</Text>
                </TouchableOpacity>

            ),
        });
    })

    return (
        <View style={styles.container}>
            <Text style={styles.sectionHeader}>Your Expenses:</Text>
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.transactionItem}>
                        <TouchableOpacity onPress={() =>handleViewDetails(item)}>
                            <View style={styles.transactionRow}>
                                <View>
                                    <Text style={styles.boldText}>{item.date}</Text>
                                    <Text>Category: {item.category}</Text>
                                </View>
                                <Text style={styles.boldText}>${item.amount}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />

            <Text style={styles.sectionHeader}>
                New Expense:
            </Text>
            <TextInput
                placeholder="Date"
                value={date}
                onChangeText={setDate}
                style={styles.input}
            />
            <TextInput
                placeholder="Amount"
                value={amount}
                onChangeText={setAmount}
                style={styles.input}
            />
            <TextInput
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                style={styles.input}
            />
             <TextInput
                placeholder="Location"
                value={location}
                onChangeText={setLocation}
                style={styles.input}
            />
            <TextInput
                placeholder="Transaction Type"
                value={type}
                onChangeText={setType}
                style={styles.input}
            />
            <TextInput
                placeholder="Category"
                value={category}
                onChangeText={setCategory}
                style={styles.input}
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TouchableOpacity onPress={handleAddTransaction} style={styles.addButton}>
                    <Text style={styles.buttonText}>Add Transaction</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    sectionHeader: {
        fontWeight: "bold",
        fontSize: 16,
        paddingBottom: 8
    },
    transactionItem: {
        backgroundColor: "#ffffff",
        padding: 15,
        marginBottom: 15,
        borderRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    logOutButton: {
        backgroundColor: "steelblue",
        padding: 10,
        alignItems: "center",
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    addButton: {
        backgroundColor: "steelblue",
        padding: 10,
        alignItems: "center",
        borderRadius: 5,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: "white",
        marginBottom: 8,
        paddingHorizontal: 10,
    },
    errorText: {
        color: "red",
        marginBottom: 10,
    },
    transactionRow: {
        display: "flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    boldText: {
        fontWeight: "bold"
    }
});

export default HomeScreen;
