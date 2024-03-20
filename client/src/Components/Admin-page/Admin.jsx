import React from "react";
import { SERVER_URL } from "../../constants";
import CategoryForm from "./CategoryForm/CategoryForm";
import "./admin.scss";
import { useGetAllCategoriesQuery } from "../../Features/api";
import { Link } from "react-router-dom";

const Admin = () => {
  const result = useGetAllCategoriesQuery();
  if (result.isLoading) {
    return <div>Loading...</div>;
  }

  if (result.isError) {
    return (
      <div className="category-form-component">
        <p style={{ color: "red" }}>
          <Caution />
          {result.error}
        </p>
      </div>
    );
  }

  const handleCategoryEdit = async (category_id) => {
    console.log("Category Edit", category_id);
  };

  const handleCategoryDelete = async (category_id) => {
    console.log("Category Delete ", category_id);
  };

  return (
    <>
      <div class="categories-section">
        <CategoryForm />
        <div className="categories-container">
          {result.data.length < 1 && <div> No Categories</div>}
          {result.data.map((category) => {
            return (
              <div className="category-container" key={category.id}>
                <Link to={`/admin/categories/${category.id}`}>
                  <img
                    width={240}
                    height={240}
                    src={`${SERVER_URL}/${category.image_url}`}
                    alt={`${category.title} image`}
                  />
                </Link>
                <p className="category-title">{category.title}</p>
                <div className="category-actions">
                  <button
                    className="edit"
                    onClick={() => handleCategoryEdit(category.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleCategoryDelete(category.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Admin;
