import "./App.css";
import { useState } from "react";

// Shop Inventory App
// inventory [] item name, quantity, price

// POST /inventory
// PUT /inventory/:productId
// GET /inventory{/:productId}
// DELETE /inventory/:productId

// class Product {
//   constructor(name, quanity, price) {
//     this.name = name
//   }
// }

function App() {
  // state variables
  const [inventory, setInventory] = useState([]); // { name: string, quantity: number, price: number }[]

  const validateProduct = (payload) => {
    // payload - {}

    try {
      const keys = Object.keys(payload);
      console.log("keys =", keys);
      const neededKeys = ["name", "price", "quanity"];
      if (keys.length !== 3) throw new Error("not enough params");
      keys.sort();
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] !== neededKeys[i])
          throw new Error("wrong parameters passed");
      }

      if (typeof payload["name"] !== "string") throw new Error();
      if (typeof payload["price"] !== "number") throw new Error();
      if (typeof payload["quanity"] !== "number") throw new Error();

      return payload;
    } catch (error) {
      console.error("error =", error.toString());
      return null;
    }
  };

  const addProduct = async (payload) => {
    setInventory((prev) => {
      return [...prev, payload];
    });
  };

  const deleteProduct = async (idx) => {
    // idx - 2
    // [1, 2, 3, 4, 5]
    // [1, 2, 4, 5]

    // - id - undefined
    const updatedInventory = inventory.filter((_, index) => index !== idx);
    setInventory(updatedInventory);
  };

  const updateProduct = async (idx, payload) => {
    const updatedInventory = inventory.map((product, index) => {
      if (index === idx) {
        return { ...product, ...payload };
      }
      return product;
    });
    setInventory(updatedInventory);
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    const payload = {
      name: e.target.name.value,
      quanity: e.target.quantity.value,
      price: e.target.price.value,
    };
    const validatedProduct = validateProduct({
      name: payload.name,
      price: +payload.price,
      quanity: +payload.quanity,
    });
    if (!validatedProduct) {
      console.error("Invalid product data");
      return;
    }
    await addProduct(validatedProduct);
  };

  return (
    <>
      <h1>Shop invetory</h1>
      <form
        action=""
        onSubmit={handleCreateProduct}
        style={{ display: "flex", gap: "1rem" }}
      >
        <input type="text" name="name" id="name" />
        <input type="number" name="quantity" id="quantity" />
        <input type="number" name="price" id="price" />
        <button type="submit">Add</button>
      </form>
      {/* List of producs (Inventory) */}
      <div
        style={{
          paddingTop: "1rem",
        }}
      >
        <h2>Inventory</h2>
        {inventory.map((item, idx) => {
          // 0, 1, 2, 3, 4, ....
          console.log("item =", item);
          return (
            <div key={idx.toString()} style={{ display: "flex", gap: "1rem" }}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.quanity}</p>
              <button onClick={() => deleteProduct(idx)}>Delete</button>
              <button
                onClick={() => updateProduct(idx, { name: "Updated Name" })}
              >
                Update
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
