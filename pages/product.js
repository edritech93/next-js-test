import React, { useState } from 'react';
import { ItemProduct, ProductAdd, GridView } from '../component';
import { TEXT_TEST } from '../src/constants';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
}

export default function product() {
    const [dataProduct, setDataProduct] = useState([
        {
            attachmentUrl: 'https://picsum.photos/200',
            productName: 'Product Name',
            productDesc: TEXT_TEST,
            productPrice: 1000,
        },
        {
            attachmentUrl: 'https://picsum.photos/200',
            productName: 'Product Name',
            productDesc: TEXT_TEST,
            productPrice: 1000,
        },
    ]);

    const _renderItem = ({ item }) => {
        return (
          <ItemProduct
            title={item.productName}
            price={item.productPrice}
            image={item.attachmentUrl}
          />
        )
      }

    return (
        <div style={styles.container}>
          <GridView data={dataProduct} renderItem={_renderItem} />
          <ProductAdd />
        </div>
      )
}