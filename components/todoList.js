import React  from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

export default function TodoList({books}) {
    return (
        <View style = {style.container}>
            <FlatList
                data={books}
                renderItem={({ item }) => (
                    <Text style = {style.listItem}>{item.title} {item.author}</Text>       
                )}
                keyExtractor={item => item.id}
                style = {style.list}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '90%',
        flex: 1,
        
    },
    listItem : {
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'indigo',
        margin: 5,  
        width: '100%',
        padding: 10,
    }
  });