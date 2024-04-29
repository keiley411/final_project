import React from "react";
import { useParams } from "react-router-dom";
import { useGetCategoryByIdQuery, useGetProductsByCategoryQuery } from "../../../Features/api";
import Caution from "../../IconComponent/Caution";
import Product from "../../ProductComponent/Product";
import ProductForm from "../../ProductComponent/ProductForm/ProductForm";

const AdminCategory = () => {
  const { category_id } = useParams();
  console.log({category_id})
  const result = useGetProductsByCategoryQuery(category_id);
  const categoryResult = useGetCategoryByIdQuery(category_id);

  if (result.isLoading || categoryResult.isLoading) {
    return <div>Loading...</div>;
  }

  if (result.isError || categoryResult.isError)  {
    return (
      <div className="product-form-component">
        {" "}
        <p style={{ color: "red" }}>
          <Caution />
          {result.error ? result.error : categoryResult.error}
        </p>
      </div>
    );
  }

  console.log(result.currentData, categoryResult);
  

  return (
    <div>
      <h1>{categoryResult.data.title}</h1>
      <ProductForm category_id={category_id}/>
      {categoryResult.data.products.map((product)=>{
            return(<Product product={product} key={product.id}/>)
        })}
    </div>
  );
};

export default AdminCategory;
