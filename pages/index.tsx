import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {useGetProductsQuery} from "../store/product/product.api";
import {useActions} from "../hooks/useActions";

const Home: NextPage = () => {
    const {data, isLoading, error} = useGetProductsQuery(6);
    const {addItem} = useActions();

    return (
        <div className={styles.container}>

            {isLoading && <p>Loading ...</p>}

            {data &&
            <div style={{display: 'grid', gridTemplateColumns: 'repeat( 2, minmax(0, 1fr) )', gap: 20}}>
                {
                    data.map(product =>
                        <div key={product.id} className={'item'} style={{
                            height: '400px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '30px',
                            border: '1px solid black'
                        }}>
                            <h3>{product.title}</h3>
                            <img src={product.image} alt="" style={{
                                maxWidth: '100%',
                                maxHeight: '200px'
                            }}/>
                            <button onClick={() => addItem(product)}>
                                Add to cart
                            </button>
                        </div>
                    )
                }
            </div>
            }


        </div>
    )
}

export default Home
