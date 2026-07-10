import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './collection.css'


const Collection=()=>{
const [view,setView]=useState(false)
const[item_details,setitem_details]=useState([])


const products = [
  { id: "D1", label: "Designer Kurti", color: "Red", price: 1783.95, size: ["S","M","L","XL"],
  type:"Soft Silk",Pieces:3,
    images: ["/images/sowch/D1-1.webp","/images/sowch/D1-2.webp","/images/sowch/D1-3.webp"] },

  { id: "D2", label: "Traditional Wear Suit", color: "Green", price: 1573.95, size: ["XXL","L","XL"],
    type:"Soft Silk",Pieces:3,
    images: ["/images/sowch/D2-1.webp","/images/sowch/D2-2.webp","/images/sowch/D2-3.webp","/images/sowch/D2-4.webp"] },







  { id: "D6", label: "Casual Wear top", color: "Violet", price: 891.45, size: ["M","L","XL","XXL"],
    type:"Soft Silk",Pieces:2,
    images: ["/images/sowch/D6-1.webp","/images/sowch/D6-2.webp","/images/sowch/D6-3.webp"] },




  { id: "D15", label: "Comfort Fit", color: "Red", price: 1048.95, size: ["M","L","XL","XXL"],
    type:"Cotton",Pieces:2,
    images: ["/images/sowch/D15-1.jpg","/images/sowch/D15-2.jpg","/images/sowch/D15-3.jpg"] },

  

  { id: "D28", label: "Designer Pick", color: "Blue", price: 2623.95, size: ["L","XL","XXL","XXXL"],
    type:"Pure Fendy Satin",Pieces:3,
    images: ["/images/sowch/D28-1.jpg","/images/sowch/D28-2.jpg","/images/sowch/D28-3.jpg"] },


];

const viewcollection=(id)=>{

setitem_details(products.filter(list=>list.id===id))
setView(true)
}
const viewback=()=>{
setView(false)
}
return(
<div className="collection-container">

<h1 className="top-header">New Collectionsa</h1>

<div className="container-fluid p-10" style={{width:"100%" }}>
  <div
    id="carouselExampleControls"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner"  >

      <div className="carousel-item active">
        <img
          src="./images/sowch/D1-1.webp"
         
          alt="first"
          style={{ height: "500px", objectFit: "contain" }}
        /> 
        <img
          src="./Images/sowch/D1-2.webp"
         
          alt="slide1"
          style={{ height: "500px", objectFit: "contain" }}
        />
           <img
          src="/images/sowch/D1-3.webp"
         
          alt="slide1"
          style={{ height: "500px", objectFit: "contain" }}
        />
      </div>

      <div className="carousel-item">
        <img
          src="/images/sowch/D15-1.jpg"
         
          alt="slide2"
          style={{ height: "500px", objectFit: "contain" }}
        />
         <img
          src="/images/sowch/D15-2.jpg"
         
          alt="slide2"
          style={{ height: "500px", objectFit: "contain" }}
        />
         <img
          src="/images/sowch/D15-3.jpg"
         
          alt="slide2"
          style={{ height: "500px", objectFit: "contain" }}
        />
      </div>

      <div className="carousel-item">
        <img
          src="/images/sowch/D28-1.jpg"
         
          alt="slide3"
          style={{ height: "500px", objectFit: "contain" }}
        />
         <img
          src="/images/sowch/D28-2.jpg"
         
          alt="slide3"
          style={{ height: "500px", objectFit: "contain" }}
        />
         <img
          src="/images/sowch/D28-3.jpg"
         
          alt="slide3"
          style={{ height: "500px", objectFit: "contain" }}
        />
      </div>

    </div>

    <button
      className="carousel-control-prev btn-dark"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon"></span>
    </button>

    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon"></span>
    </button>

  </div>
</div>

<h1>Featured Products</h1>

<ul className="collection_c">
{ products.map(product=><div className="list-container"
><li><img src={product.images[0]} alt={product.label} loading="lazy" className="item"/></li>
<li>{product.label}</li>
<li>Price:₹{product.price}</li>
<li>(Including GST)</li>
<li>Fabric:{product.type}</li>
<li>Pieces:{product.Pieces}</li>
<li><button type="button" className="viewcollection" onClick={()=>viewcollection(product.id)}>View Details</button></li></div>)}
</ul>



{view && (
  <div className="modal show d-block" >
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content">

        <div className="modal-header">
          <button
            type="button"
            className="btn-close"
            onClick={() => viewback(null)}
          ></button>
        </div>

        <div className="modal-body text-center">

          {/* Product Images */}
         { item_details.map(product=>product.images.map((items)=>
<div className="list-container"
>
<ul className="collection_c"><li><img src={items} alt={product.label} loading="lazy" className="item"
        style={{ width: "100%", height: "auto", objectFit: "contain" }}
/></li>
 </ul>
  <h5> {product.label}</h5>
  <h5>{product.color}</h5>
  <h5> ₹{product.price}</h5>
  <h5> <select   style={{ width: "100px", textAlign:"center",justifyContent:"center"}}>
  {product.size.map(size=>
 <option>{size}</option>)}</select></h5>
 
</div>
)
)}

 
             

       </div>


      </div>
    </div>
  </div>
)}


       


</div>
)}

export default Collection