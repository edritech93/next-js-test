import styles from '../styles/Home.module.css'
import {ButtonPrimary, ButtonSecondary} from '../component';

export default function Home() {
  return (
    <div className={styles.container}>
      <ButtonPrimary title={'Hello'} />
      <ButtonSecondary title={'World'} />

      {/* <div className="card">
        <div className="row">
          <div className="col">

          </div>
          <div className="col">
            Column
          </div>
          <div className="col">
            Column
          </div>
        </div>
      </div>

      <ItemProduct
        title={'Product A'}
        description={'description of Product A'}
      /> */}
    </div>
  )
}


