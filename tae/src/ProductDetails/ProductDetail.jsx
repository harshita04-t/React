
import Detail from "./Component/Detail/Detail";
import ImageDetails from "./Component/imageDetail/ImageDetails";
import SimilarItem from "./Component/SimilarItem/SimilarItem";
import { useState } from "react";
function ProductDetail() {
      const [searchTerm, setSearchTerm] = useState('');


return(

    <>
    <div className="Product">
      <div className="Product2">
      <div style={{width:'80%',margin:'0 auto'}}>
       <div><ImageDetails/></div>
       <div><Detail/></div> 
       </div>
       <SimilarItem searchTerm={searchTerm} title={'Similar Product'}/>
       <SimilarItem searchTerm={searchTerm} title={'You might also like'}/>
     </div>
   </div>
 </>
)
}

export default ProductDetail;