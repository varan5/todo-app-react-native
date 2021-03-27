import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.textTitle}>My Todos</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'teal'
    },
    textTitle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default Header