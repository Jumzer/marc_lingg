import React, { useEffect, useState } from "react";
import Header from "@components/Header";
import connexion from "@services/connexion";

function Categories() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const categoriesz = await connexion.get(`/categories`);
      setCategories(categoriesz);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <div>{category.name}</div>
      ))}
      <Header />
      <div />
    </div>
  );
}

export default Categories;
