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
    const { title, price, image = null, style, onPressAdd } = props;

    const loadImage = ({ src, width, quality }) => {
        return image ?? null;
    }

    return (
        <CardView style={{ ...styles.container, ...style }}>
            <Image
                loader={loadImage}
                src={"image.png"}
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
