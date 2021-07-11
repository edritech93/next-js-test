import styles from '../styles/Home.module.css'
import ItemProduct from '../component/ItemProduct';
import Image from 'next/image'

export default function dashboard() {

    return (
        <div>
            <h1 className={"align-center"}>
                Welcome to <a href="https://nextjs.org">Balila</a>
            </h1>
            <div className="card">
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
            />

        </div>
    );
}