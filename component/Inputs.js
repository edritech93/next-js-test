import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Inputs(props) {
    const {title, ...restProps} = props;
    return (
        <TextField id={"standard-basic"} label={title} {...restProps} />
    );
}
