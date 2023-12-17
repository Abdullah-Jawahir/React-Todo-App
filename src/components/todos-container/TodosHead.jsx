import sunIcon from '../../assets/icon-sun.svg';
import moonIcon from '../../assets/icon-moon.svg';
import PropTypes from 'prop-types';

export const TodosHead = ({ isLightTheme, onClicked }) => {
    return (
        <div className='todo-head'>
            <h1>todo</h1>
            <img src={isLightTheme ? moonIcon : sunIcon} alt="sun-icon" onClick={onClicked} />
        </div>
    )
}

TodosHead.propTypes = {

    isLightTheme: PropTypes.bool.isRequired,
    onClicked: PropTypes.func.isRequired,
}
