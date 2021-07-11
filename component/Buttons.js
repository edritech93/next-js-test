import React from 'react';
import Button from '@material-ui/core/Button';

export function ButtonPrimary(props) {
    const { title, style, disabled = false } = props;
    return (
        <Button
            variant={"contained"}
            color={"primary"}
            style={style}
            disabled={disabled}
        >{title}</Button>
    );
}

export function ButtonSecondary(props) {
    const { title, style, disabled } = props;
    return (
        <Button
            variant={'outlined'}
            color={"primary"}
            style={style}
            disabled={disabled}
        >{title}</Button>
    );
}