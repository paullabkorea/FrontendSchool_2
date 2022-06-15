import { useContext } from "react";
import { ProductInfo } from "./context/productinfo";


const HelloLicatFour = () => {
  const { name, price } = useContext(ProductInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{price}</strong>
    </div>
  );
};

export default HelloLicatFour;