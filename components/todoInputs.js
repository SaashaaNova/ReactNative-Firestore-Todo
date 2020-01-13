// import React, {useReducer} from 'react';
import React, { Component } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text  } from 'react-native';



export default class todoInputs extends Component {

    state = { 
        title: '',
        author: ''
    }

    handleTitleChange = (value) => {
        this.setState({
            title: value
          })
    }

    handleAuthorChange = (value) => {
        this.setState({
            author: value
          })
    }

    submitAndClear = () => {
        this.props.submitHandler(this.state)
    
        this.setState({
            title: '',
            author: ''
        })
      }


    render() {
        const {title, author} = this.state
        return (
            <View style={style.container}>
                 <TextInput 
                    placeholder="book title"
                    onChangeText={(title) => this.handleTitleChange(title, 'title')}
                    style={style.input}
                    clearButtonMode="always"
                    value={title}
                />
                <TextInput 
                    placeholder="book author"
                    onChangeText={(author) => { this.handleAuthorChange(author, 'title')}}
                    style={style.input}
                    clearButtonMode="always"
                    value={author}
                />
                <TouchableOpacity  onPress={this.submitAndClear} style={style.button}>
                    <Text style={style.text}>add book</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: "center",
        marginBottom: 20
    },
    input: {
        width: '90%',
        borderColor: 'indigo',
        borderStyle: "solid",
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        height: 40
    },
    button: {
        marginTop: 15,
        backgroundColor: 'indigo',
        width: '90%',
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    text : {
        color: 'white',
    }
  });