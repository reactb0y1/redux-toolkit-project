import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {useGetProductsQuery} from "../store/product/product.api";

const Home: NextPage = () => {
    const {data, isLoading, error} = useGetProductsQuery(6);

    return (
        <div className={styles.container}>

            {data && <p>data</p>}
            {isLoading && <p>Loading</p>}
            {error && <p>error</p>}

        </div>
    )
}

export default Home
