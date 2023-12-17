import { useState, useRef, useEffect } from "react"
import { TodoInputForm } from "./TodoInputForm"
import { TodoList } from "./TodoList"
import { TodosHead } from "./TodosHead"
import PropTypes from 'prop-types'

export const TodosBox = ({ isLightTheme, toggleTheme }) => {

    let oldTodos = [

        {
            id: 0,
            desc: 'I want to complete the React JS Course',
            isDone: false,
        },
        {
            id: 1,
            desc: 'I want to become a Frontend Expert',
            isDone: false,
        },
        {
            id: 2,
            desc: 'I want to build my LinkedIn Page',
            isDone: false,
        },
    ]

    const [todos, setTodos] = useState([...oldTodos]);
    const inputRef = useRef(null);
    const [count, setCount] = useState(3)


    const handleInput = () => {

        const inputedValue = inputRef.current.value;

        if (inputedValue.trim() !== '') {
            setTodos(prevTodos => [
                ...prevTodos,
                {
                    id: count,
                    desc: inputedValue,
                    isDone: false,
                }
            ]);

            setCount((prevCount) => prevCount + 1)
        }


        inputRef.current.value = '';

    }

    const todoCompleted = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    }

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }


    useEffect(() => {
        setCount(JSON.parse(localStorage.getItem("count")));
        setTodos(JSON.parse(localStorage.getItem("todos")));
    }, [])

    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem("count", JSON.stringify(count));
            localStorage.setItem("todos", JSON.stringify(todos));
        }, 100)
    }, [todos, count])


    return (
        <div className='todos-box'>
            <TodosHead isLightTheme={isLightTheme} onClicked={toggleTheme} />
            <TodoInputForm handleInput={handleInput} inputRef={inputRef} />
            <TodoList todos={todos} todoCompleted={todoCompleted} deleteTodo={deleteTodo} />
        </div>
    )
}


TodosBox.propTypes = {

    isLightTheme: PropTypes.bool.isRequired,
    toggleTheme: PropTypes.func.isRequired,
}