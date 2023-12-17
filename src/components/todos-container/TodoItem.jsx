import checkIcon from '../../assets/icon-check.svg'
import crossIcon from '../../assets/icon-cross.svg'
import PropTypes from 'prop-types';

export const TodoItem = ({ todoId, todoDesc, todoIsDone, onClicked, deleteTodo }) => {

    return (
        <>
            <li className={`todo-control todo-item ${todoIsDone ? 'comp-todo' : ''}`}>
                <span className="mini-circle" onClick={() => { onClicked(todoId) }}>
                    <img src={checkIcon} alt="check-icon" />
                </span>
                <p>{todoDesc}</p>
                <img src={crossIcon} alt="cross-icon" className="del-icon" onClick={() => { deleteTodo(todoId) }} />
            </li>

        </>
    )
}


TodoItem.propTypes = {
    todoId: PropTypes.number.isRequired,
    todoDesc: PropTypes.string.isRequired,
    todoIsDone: PropTypes.bool.isRequired,
    onClicked: PropTypes.func.isRequired,
};