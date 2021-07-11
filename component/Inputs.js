import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Inputs(props) {
    const { title, style, onChange } = props;
    return (
        <TextField
            id={"standard-basic"}
            label={title}
            style={style}
            onChange={(value) => onChange(value)}
        />
    );
}
