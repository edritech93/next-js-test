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
    const { type = 'h4', children, style } = props;
    return (
        <Typography
            variant={type}
            color={"primary"}
            style={{ ...style, ...styles }}
            gutterBottom>{children}</Typography>
    );
}
