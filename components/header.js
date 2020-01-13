import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={style.container}>
            <Text style={style.text}>AddBook</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingBottom: 20,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#C8C8C8',
    },
    text : {
        color: 'white',
        fontSize: 25,
    }
  });