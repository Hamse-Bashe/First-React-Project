import { use, useState } from "react";

const ShoppingCart = () => {
  const [products, setProduct] = useState([]);
  const [productInput, setProductInput] = useState("");
  const [priceInput, setPriceInput] = useState("");

  const handleAddProduct = () => {
    if (productInput.trim() !== '' && priceInput.trim() !== '') {
      const newProduct = {
        id: crypto.randomUUID(),
        name: productInput,
        price: priceInput,
        quantity: 1,
      };
    //   setProduct([newProduct]);
      setProduct([...products, newProduct] )
      setPriceInput("");
      setProductInput("");
    }

  };

//   subtract quantity function
  const subQuantity = (id) => {
    const subProducts = products.map((product) =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product,
    );
    setProduct(subProducts);
  };

//   addition quantity function
  const addQuantity = (id) => {
    const addProducts = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product,
    );
    setProduct(addProducts);
  };

//   remove product function
  const removeProduct = (id) => {
    const removedProducts = products.filter((product) => product.id !== id);
    setProduct(removedProducts);
  };

//   total price
  const totalPrice = products.reduce((total, product)=>(
        total + product.price * product.quantity
    ), 0)
  

  return (
    <div>
      <h1>Simple Shopping Cart</h1>
      <h2>Add a Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        onChange={(e) => setProductInput(e.target.value)}
        value={productInput}
      />
      <input
        type="number"
        placeholder="Price"
        onChange={(e) => setPriceInput(e.target.value)}
        value={priceInput}
      />
      <button onClick={handleAddProduct}>Add to Cart</button>

      {products.length > 0 ? (
        <div>
          <h2>Products in Cart</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <b>{product.name}</b> - ${product.price} <br />
                <div>
                    Quantity:
                    <button onClick={() => subQuantity(product.id)}>-</button>
                    {product.quantity}
                    <button onClick={() => addQuantity(product.id)}>+</button>
                    <br></br>
                </div>
                <button onClick={() => removeProduct(product.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h2>Total Price: ${totalPrice}</h2>
        </div>
      ) : (
        <p>The Cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
