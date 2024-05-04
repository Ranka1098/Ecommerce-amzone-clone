import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null);

// provider it is normal arrow function
export const ProductProvider = (props) => {
  const [product, setProduct] = useState([]); //filter
  const [allproduct, setAllProduct] = useState([]); //coppy of all product

  useEffect(() => {
    const getdata = async () => {
      try {
        const resp = await fetch("https://fakestoreapi.com/products");
        const result = await resp.json();
        setProduct(result);
        setAllProduct(result);
      } catch (error) {
        alert(error);
      }
    };

    getdata();
  }, []);

  return (
    <ProductContext.Provider value={{ product, setProduct, allproduct }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
