import ProductDetail from "./ProductDetails/ProductDetail";
// import './ProductDetails/product.css'
import './ProductDetails/Component/SimilarItem/similar.css'
import OrderDetails from "./OrderDetails";
import ImageDetails from "./ProductDetails/Component/imageDetail/ImageDetails";
import './ProductDetails/Component/imageDetail/imageDetail.css'
// import ImgDetails from "./ProductDetails/Component/imageDetail/ImgDetails";
// import './ProductDetails/Component/imageDetail/ImgDetails.css'
// import './zepto/app.css';
// import Navbar from './zepto/Navbar';
// import { useState } from "react";
function App() {

  // const [searchTerm, setSearchTerm] = useState('');
  return (
   <>
    
    {/* <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> */}
   {/* <OrderDetails/> */}

   {/* <ProductDetail/>  */}
   <ImageDetails/>
 
   </>
  );
}

export default App;
