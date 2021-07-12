import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({

    wrapBanner: {
        height: 200,
        width: '100%'
    }
}));

export default function Banner(props) {
    const { data = [] } = props;
    const classes = useStyles();
    return (
        <Carousel>
            {data.map((item, i) => <ItemBanner key={i} item={item} />)}
        </Carousel>
    )
}

const styles = {
    wrapBanner: {
        height: 200,
        width: '100%'
    }
}

function ItemBanner(props) {
    const { item } = props;
    const classes = useStyles();

    const loadImage = ({ src, width, quality }) => {
        return item?.attachmentUrl ?? null;
    }

    return (
        <div className={classes.wrapBanner}>
            <Image
                loader={loadImage}
                src={"image.png"}
                alt={"image-product"}
                layout="fill"
                objectFit="cover"
            />
        </div>
    )
}
