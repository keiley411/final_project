import React from "react";
import { useGetAllCategoriesQuery } from "../../Features/api";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../constants";
import "./Category_list.scss";
import Banner from "../BannerComponent/Banner";
const Category_list = () => {
  const result = useGetAllCategoriesQuery();

  if (result.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="banner">
      <Banner />
      <div className="lists">
        {result.data.map((category) => {
          return (
            <div key={category.id} className="category-card">
              <Link to={`/categories/${category.id}`}>
                <img
                  src={`${SERVER_URL}/${category.image_url}`}
                  alt={`${category.title}`}
                />
              </Link>
              <p>{category.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category_list;
