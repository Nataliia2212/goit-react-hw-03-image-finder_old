import PropTypes from 'prop-types';
import css from './Button.module.css'

export const Button = ({ onButtonClick }) => {
    return (
       <button type='button' className={css.button} onClick={onButtonClick}>Load more</button>
    )
}

Button.propTypes = {
    onButtonClick: PropTypes.func,
}