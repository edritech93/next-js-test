import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    container: {
        flex: 1,
        display: 'flex',
        alignSelf: 'center',
    },
    contentStyle: {
        flex:1,
        display: 'flex',
        flexDirection: 'column',
    }
}

export default function CardView(props) {
    const { style, contentStyle, children } = props;
    return (
        <Card style={{ ...styles.container, ...style }}>
            <CardContent style={{...styles.contentStyle, contentStyle}}>
                {children}
            </CardContent>
        </Card>
    );
}
