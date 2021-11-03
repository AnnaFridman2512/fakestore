import Product from './Product.js';
import {CatalogContext} from './CatalogContext';
import {useContext} from 'react';

export default function Catalog() {
    const {products} = useContext(CatalogContext);
console.log(products.docs)
    return (
        <div className="products">
           
            {products.docs.map(product=> <Product key={product._id} {...product} />)}
               
        </div>
    );
}
