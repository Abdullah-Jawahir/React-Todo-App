import { TodoItem } from "./TodoItem"
import PropTypes from 'prop-types';


export const TodoList = ({ todos, todoCompleted, deleteTodo }) => {


    return (
        <>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        todoId={todo.id}
                        todoDesc={todo.desc}
                        todoIsDone={todo.isDone}
                        onClicked={todoCompleted}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        </>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        desc: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired,
    })).isRequired,
    todoCompleted: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};