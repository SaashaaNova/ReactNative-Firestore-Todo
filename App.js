import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import TodoInputs from './components/todoInputs';
import Header from './components/header';
import TodoList from './components/todoList';

export default function App() {
  const [books, setBooks] = useState([
    {id: 1, title: 'Book', author: 'Booker'},
    {id: 2, title: 'Bear', author: 'Bear Man'},
    {id: 3, title: 'Lion', author: 'Lioner'},
]);

const submitHandler = (book) => {
  setBooks(prevTodos => {
    return [
      {id: book.id,
        title: book.title,
        author: book.author
      },
      ...prevTodos
    ]
  })
}

  return (
    <View style={styles.container}>
      <Header/>
     <TodoInputs submitHandler={submitHandler}/>
     <TodoList books={books}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});