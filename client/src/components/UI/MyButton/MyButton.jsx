import React from 'react';
import classes from './MyButton.module.scss'

function MyButton({ children, ...props }) {
    const classFromProps = {...props}.className

    return (
        <button {...props} className={`${classes.myBtn} ${classFromProps}`}>
            {children}
        </button>
    )
}

export default React.memo(MyButton);