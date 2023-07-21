import React, { useEffect, useState } from "react";
import Header from "@components/Header";
import connexion from "../services/connexion";

function Categories() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const allCategory = await connexion.get(`/categories`);
      setCategories(allCategory);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-col flex-1">
        {categories.map((category) => (
          <div className="basis-1/3" key={category.id}>
            <img
              className="object-cover w-96 h-40"
              src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                category.img_src
              }`}
              alt={category.img_alt}
            />
            {category.name}
          </div>
        ))}
        <div />
      </div>
    </div>
  );
}

export default Categories;
