import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

const AddTodo = ({ handleSubmit }) => {

    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
        val = ''
    }

    return (
        <View>
            <TextInput 
                style={style.input}
                placeholder='new todo ...'
                onChangeText={changeHandler}
            />
            <Button 
                onPress={() => handleSubmit(text)} title='add todo' color='teal'
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default AddTodo