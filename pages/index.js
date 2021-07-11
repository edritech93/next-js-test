import React, { useState } from 'react';
import { ItemProduct, AppBarView } from '../component';
import { TEXT_TEST } from '../src/constants';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }
}

export default function Dashboard() {
  const [dataProduct, setDataProduct] = useState([
    {
      attachmentUrl: '',
      productName: 'qweasd',
      productDesc: TEXT_TEST,
      productPrice: 12000,
    }
  ]);
  return (
    <div style={styles.container}>
      <AppBarView />
      {dataProduct.map((item, index) => {
        return (
          <ItemProduct
            key={index}
            title={item.productName}
            price={item.productPrice}
          />
        )
      })}
    </div>
  )
}


