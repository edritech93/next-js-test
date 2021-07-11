import React from 'react';
import Button from '@material-ui/core/Button';

export function ButtonPrimary(props) {
    const {title} = props;
    return (
        <Button variant={"contained"} color={"primary"}>{title}</Button>
    );
}

export function ButtonSecondary(props) {
    const {title} = props;
    return (
        <Button variant={'outlined'} color={"primary"}>{title}</Button>
    );
}