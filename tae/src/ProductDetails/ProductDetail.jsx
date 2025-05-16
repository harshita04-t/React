
import Detail from "./Component/Detail/Detail";
import ImageDetails from "./Component/imageDetail/ImageDetails";
import SimilarItem from "./Component/SimilarItem/SimilarItem";
import MoreArrow from './Component/MoreArrow'
import './Component/Detail/Details.css';
import './Component/imageDetail/imageDetail.css';
import { useState } from "react";
function ProductDetail() {
      const [searchTerm, setSearchTerm] = useState('');


return(

    <>
      <div style={{width:'80%',marginLeft: 'auto',
    marginRight: 'auto'}}>
      <div className="Nav">
              <span><a href="/">Home</a> <MoreArrow/></span>
              <span><a href="/">Tea&Coffee</a><MoreArrow/></span>
              <span><a href="/">Vietnamese Cold Coffee</a></span>
          </div>
      <div style={{flexDirection: 'row',display:'flex',gap: '1.25rem',marginTop: '2rem'}}>
       <ImageDetails/>
       <Detail/>

      </div>
       

      </div>
       {/* <SimilarItem searchTerm={searchTerm} title={'Similar Product'}/>
       <SimilarItem searchTerm={searchTerm} title={'You might also like'}/> */}
    
    
 </>
)
}

export default ProductDetail;