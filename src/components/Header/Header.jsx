import PropTypes from 'prop-types';

import './header.css'

export const Header = ({ title, subtitle }) => {
    return(
        <header>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    )
}

Header.propTypes = {
    title1: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}