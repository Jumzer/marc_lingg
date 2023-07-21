import React, { useState } from "react";

function Admin() {
  const [category, setCategory] = useState([]);

  const handleCategory = (value) => {
    setCategory({ ...category, name: value });
  };

  return (
    <div className="text-gray-700 flex flex-col">
      <div className="mt-8 flex justify-center">
        <h1>Backoffice</h1>
      </div>
      <div className="m-4">
        <div className="m-4 w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="mb-4">Modifier une catégorie</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Catégorie
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Modifier le nom de la catégorie
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Nom de la catégorie"
                onChange={(event) => handleCategory(event.target.value)}
                value={category.name}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
