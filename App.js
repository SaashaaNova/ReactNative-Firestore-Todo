import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import TodoInputs from './components/todoInputs';
import Header from './components/header';
import TodoList from './components/todoList';
import firebase from './firebase/config'
import '@firebase/firestore'

const ref = firebase.firestore().collection('books');

export default class App extends Component {

  state = {books: []}

  submitHandler = (book) => {
    ref.doc().set({
      title: book.title,
      author: book.author, 
      createdAt: new Date().getTime()
    }).then(function () {
      console.log('document save')
    }).catch(function (error) {
      console.log('Errrrorrrrr', error)
    });
  }

  componentDidMount() {

    ref.orderBy('createdAt').onSnapshot(doc => {
      let books = [];
      doc.docs.forEach(doc => 
        books.push({...doc.data(), id: doc.id})
      );

      this.setState({
        books: books.reverse(),
      });
      
    });
    
  }
  
  render() {
    const {books} = this.state;
    console.log('state', books)
  
    return (
      <View style={styles.container}>
        <Header/>
        <TodoInputs submitHandler={this.submitHandler}/>
        <TodoList books={books}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});