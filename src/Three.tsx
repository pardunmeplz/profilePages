import react from "react"
import { View, Text } from "react-native"
import styles from "./ThreeStyle"

export default function Three() {
    return <View style={styles.container}>
        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.picture} />
        </View>
        <View style={styles.tab}></View>
    </View>
}
