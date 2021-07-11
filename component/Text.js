import Typography from '@material-ui/core/Typography';

const styles = {
    text: {
        wordWrap: "break-word",
    }
}

export function Text(props) {
    const { children, style } = props;
    return (
        <Typography
            variant={"body1"}
            style={{ ...style, ...styles }}
            gutterBottom>{children}</Typography>
    );
}

export function Title(props) {
    const { type = 'h6', color = 'primary', children, style } = props;
    return (
        <Typography
            variant={type}
            color={color}
            style={{ ...style, ...styles }}
            gutterBottom>{children}</Typography>
    );
}
