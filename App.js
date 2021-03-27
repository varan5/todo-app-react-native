import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, StatusBar } from 'react-native'
import AddTodo from './components/AddTodo'
import Header from './components/Header'
import TodoItem from './components/TodoItem'

export default () => {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'}, 
    {text: 'play on the switch', key: '3'},
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const handleSubmit = (recievedTextFromAddTodoInput) => {
    setTodos((prevTodos) => {
      return [
        { text: recievedTextFromAddTodoInput, key: Math.random().toString()},
        ...prevTodos
      ]
      // here, [] is a spread operator, which returns the old todos along with the new todo
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
    <Header />
    <View style={styles.content}>
        <AddTodo handleSubmit={handleSubmit} />
        <View style={styles.list}>
          <FlatList 
            showsVerticalScrollIndicator={false}
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  content: {
    padding: 40,
  },
  list: {
      marginTop: 20
  }
})