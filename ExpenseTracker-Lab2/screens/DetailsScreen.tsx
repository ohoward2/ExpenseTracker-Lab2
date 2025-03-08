import { View, Text, StyleSheet } from "react-native";

const TransactionDetailsScreen = ({ route }: any) => {
    const { transaction } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.label}>Date:</Text>
                <Text style={styles.value}>{transaction.date}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.label}>Amount:</Text>
                <Text style={styles.value}>${transaction.amount}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.label}>Description:</Text>
                <Text style={styles.value}>{transaction.description}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.label}>Location:</Text>
                <Text style={styles.value}>{transaction.location}</Text>
            </View>
            
            <View style={styles.card}>
                <Text style={styles.label}>Type:</Text>
                <Text style={styles.value}>{transaction.type}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.label}>Category:</Text>
                <Text style={styles.value}>{transaction.category}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    card: {
        backgroundColor: "#ffffff",
        padding: 15,
        marginBottom: 15,
        borderRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    value: {
        fontSize: 18,
        color: "#555"
    }
});

export default TransactionDetailsScreen;

