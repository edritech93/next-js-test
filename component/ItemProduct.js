import Image from 'next/image'

export default function ItemProduct(props) {
    const {title, description} = props;

    const myLoader = ({ src, width, quality }) => {
        return `https://picsum.photos/200`
    }

    return (
        <div className="card width: 100px;">
            <Image
                loader={myLoader}
                src="me.png"
                alt="image-product"
                width={200}
                height={200}
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Buy</a>
            </div>
        </div>
    );
}
