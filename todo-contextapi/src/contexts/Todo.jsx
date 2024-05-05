import { createContext,useContext } from "react";


const todoContext = createContext({
    todo:[{
        id:1,
        todo:"Message",
        completed:false
    }],
    addTodo: (todo) => {},
    updateTodo: (id,todo) =>{},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},

})

export const TodoProvider = todoContext.Provider

export const useTodo = () => {
    return useContext(todoContext);
}