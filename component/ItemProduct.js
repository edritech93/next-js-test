import Image from 'next/image';
import CardView from './CardView';
import { Text, Title } from './Text';
import { ButtonPrimary } from './Buttons';

const styles = {
    container: {
        width: 250,
    }
}

export default function ItemProduct(props) {
    const { title, price, style, onPressAdd } = props;

    const myLoader = ({ src, width, quality }) => {
        return `https://picsum.photos/200`
    }

    return (
        <CardView style={{ ...styles.container, ...style }}>
            <Image
                loader={myLoader}
                src={"me.png"}
                alt={"image-product"}
                width={200}
                height={200}
            />
            <Title>{title}</Title>
            <Text>{price}</Text>
            <ButtonPrimary
                title={'Add'}
                onPress={() => onPressAdd()}
            />
        </CardView>
    );
}
