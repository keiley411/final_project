import React from 'react'
import { useGetAllProductsQuery } from '../../Features/api'
import Caution from '../IconComponent/Caution'
import Product from './Product'
const ProductList = () => {
    const result = useGetAllProductsQuery()

    if (result.isLoading) {
        return <div>Loading...</div>;
      }
    
      if (result.isError) {
        return (
          <div className="category-form-component">
            {" "}
            <p style={{ color: "red" }}>
              <Caution />
              {result.error}
            </p>
          </div>
        );
      }
      console.log(result)
  return (
    <div>
        {result.data.map((product)=>{
            return(<Product product={product} key={product.id}/>)
        })}
    </div>
  )
}

export default ProductList