import React, { useState, useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function TextPicker(props) {
    const {
        label,
        containerStyle,
        data = [],
        select = null,
        onChange,
        selectId = 'TextPickerSelectId',
        labelId = 'TextPickerLabelId',
    } = props;

    const [selected, setSelected] = useState(select);

    useEffect(() => {
        setSelected(select);
    }, [select]);

    const handleChange = (event) => {
        const selectValue = event.target.value;
        setSelected(selectValue);
        onChange(selectValue);
    };

    return (
        <FormControl style={containerStyle}>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select
                labelId={labelId}
                id={selectId}
                value={selected}
                onChange={handleChange}>
                {data.map((item) => <MenuItem value={item.value}>{item.label}</MenuItem>)}
            </Select>
        </FormControl>
    );
}
