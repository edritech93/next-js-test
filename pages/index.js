import React, { useState } from 'react';
import { ItemProduct, AppBarView, GridView, Banner } from '../component';
import { TEXT_TEST } from '../src/constants';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  appBar: {
    marginBottom: 16,
  }
}

export default function Dashboard() {
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
  const [dataBanner, setdataBanner] = useState([
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      attachmentUrl: 'https://picsum.photos/200',
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      attachmentUrl: 'https://picsum.photos/200',
    }
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
      <AppBarView style={styles.appBar} />
      {/* <Banner data={dataBanner} /> */}
      <GridView data={dataProduct} renderItem={_renderItem} />
    </div>
  )
}


