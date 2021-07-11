import React, { useState } from 'react';
import { ItemProduct } from '../component';
import { TEXT_TEST } from '../src/constants';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
      {dataProduct.map((item) => {
        return (
          <ItemProduct
            title={item.productName}
            price={item.productPrice}
          />
        )
      })}
    </div>
  )
}


