import PropTypes from 'prop-types';

export const TodoInputForm = ({ handleInput, inputRef }) => {

    const mainHandleInput = (e) => {
        e.preventDefault();
        handleInput();
    }


    return (
        <>
            <form className="todo-control todo-input-form" onSubmit={mainHandleInput} >
                <span className="mini-circle"></span>
                <input type="text" placeholder="Create a new todo..." required ref={inputRef} />
            </form>
        </>
    )
}

TodoInputForm.propTypes = {

    handleInput: PropTypes.func.isRequired,
    inputRef: PropTypes.object.isRequired,
}