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

  { id: "D3", label: "Casual Wear top", color: "Cream & Pink", price: 891.45, size: ["L","M","XL","XXL"],
    type:"Soft Silk",Pieces:2,
    images: ["/images/sowch/D3-1.jpg","/images/sowch/D3-2.jpg"] },

  { id: "D4", label: "Co-Ords Set", color: "Mustard", price: 891.45, size: ["M","L","XL","XXL"],
    type:"Soft Silk",Pieces:2,
    images: ["/images/sowch/D4-1.jpg","/images/sowch/D4-2.jpg"] },

  { id: "D5", label: "Casual Wear top", color: "Merron", price: 891.45, size: ["M","XL","XXL"],
    type:"Soft Silk",Pieces:2,
    images: ["/images/sowch/D5-1.jpg","/images/sowch/D5-2.jpg"] },

  { id: "D6", label: "Casual Wear top", color: "Violet", price: 891.45, size: ["M","L","XL","XXL"],
    type:"Soft Silk",Pieces:2,
    images: ["/images/sowch/D6-1.webp","/images/sowch/D6-2.webp","/images/sowch/D6-3.webp"] },

  { id: "D7", label: "Casual Wear top", color: "Dark Green", price: 891.45, size: ["M","L","XL","XXL"],
    type:"Soft Silk",Pieces:2,
    images: ["/images/sowch/D7-1.jpg","/images/sowch/D7-2.jpg"] },

  { id: "D8", label: "Casual Wear top", color: "Black", price: 891.45, size: ["M","L","XL"],
    type:"Soft Silk",Pieces:2,
    images: ["/images/sowch/D8-1.jpg","/images/sowch/D8-2.jpg"] },

  { id: "D9", label: "Casual Wear top", color: "Sea Green", price: 891.45, size: ["M","L","XL","XXL"],
    type:"Soft Silk",Pieces:2,
    images: ["/images/sowch/D9-1.jpg","/images/sowch/D9-2.jpg","/images/sowch/D9-3.jpg","/images/sowch/D9-4.jpg"] },

  { id: "D10", label: "Classic Wear", color: "Black", price: 1573.95, size: ["M","L","XL","XXL"],
   type:"Soft Silk",Pieces:3,
    images: ["/images/sowch/D10-1.jpg","/images/sowch/D10-2.jpg"] },



  { id: "D11", label: "Trendy Kurta", color: "Pink", price: 1468.95, size: ["M","L","XXL"],
   type:"Soft Silk",Pieces:3,
    images: ["/images/sowch/D12-1.jpg","/images/sowch/D12-2.jpg","/images/sowch/D12-3.jpg"] },

  { id: "D13", label: "Royal Collection", color: "Pink", price: 1363.95, size: ["M","L","XL","XXL"],
   type:"Mal Cotton",Pieces:3,
    images: ["/images/sowch/D13-1.jpg","/images/sowch/D13-2.jpg","/images/sowch/D13-3.jpg","/images/sowch/D13-4.jpg"] },

  { id: "D14", label: "Graceful Wear", color: "Blue", price: 1573.95, size: ["M","L","XL","XXL"],
    type:"Cotton",Pieces:3,
    images: ["/images/sowch/D14-1.jpg","/images/sowch/D14-2.jpg","/images/sowch/D14-3.jpg","/images/sowch/D14-4.jpg"] },

  { id: "D15", label: "Comfort Fit", color: "Red", price: 1048.95, size: ["M","L","XL","XXL"],
    type:"Cotton",Pieces:2,
    images: ["/images/sowch/D15-1.jpg","/images/sowch/D15-2.jpg","/images/sowch/D15-3.jpg"] },

  { id: "D16", label: "Kurta set", color: "Mustard Cream", price: 1048.95, size: ["M","L","XL","XXL"],
    type:"Cotton",Pieces:2,
    images: ["/images/sowch/D16-1.jpg","/images/sowch/D16-2.jpg","/images/sowch/D16-3.jpg","/images/sowch/D16-4.jpg"] },

  { id: "D17", label: "Festive Kurta", color: "Light Green", price: 1993, size: ["M","L","XL","XXL","XXXL"],
    type:"Pure Fendy Satin",Pieces:2,
    images: ["/images/sowch/D17-1.jpg","/images/sowch/D17-2.jpg","/images/sowch/D17-3.jpg","/images/sowch/D17-4.jpg"] },

  { id: "D18", label: "Premium Wear", color: "Cream &Pink", price: 1048.95, size: ["M","L","XL","XXL"],
    type:"Cotton",Pieces:2,
    images: ["/images/sowch/D18-1.jpg","/images/sowch/D18-2.jpg","/images/sowch/D18-3.jpg","/images/sowch/D18-4.jpg"] },

  { id: "D19", label: "Modern Ethnic", color: "Pink", price: 891.45, size: ["M","L","XL","XXL"],
    type:"Cotton Mixed Silk",Pieces:2,
    images: ["/images/sowch/D19-1.jpg","/images/sowch/D19-2.jpg","/images/sowch/D19-3.jpg","/images/sowch/D19-4.jpg"] },

  { id: "D20", label: "Classic Kurta", color: "Baby Pink", price: 1678.95, size: ["M","L","XL","XXL"],
    type:"Mal Cotton",Pieces:3,
    images: ["/images/sowch/D20-1.jpg","/images/sowch/D20-2.jpg","/images/sowch/D20-3.jpg","/images/sowch/D20-4.jpg"] },

  { id: "D21", label: "Festive Edition", color: "Black", price: 1573.95, size: ["M","L","XL","XXL"],
    type:"Cotton&Mixed Silk",Pieces:3,
    images: ["/images/sowch/D21-1.jpg","/images/sowch/D21-2.jpg","/images/sowch/D21-3.jpg","/images/sowch/D21-4.jpg"] },

  { id: "D22", label: "Luxury Set", color: "Cream&Blue", price: 1678.95, size: ["M","L","XL","XXL"],
    type:"Cotton",Pieces:3,
    images: ["/images/sowch/D22-1.jpg","/images/sowch/D22-2.jpg","/images/sowch/D22-3.jpg","/images/sowch/D22-4.jpg","/images/sowch/D22-5.jpg","/images/sowch/D22-6.jpg","/images/sowch/D22-7.jpg"] },

  { id: "D23", label: "Comfort Wear", color: "Light Green &Gold shade", price: 1783.95, size: ["M","L","XL","XXL"],
    type:"Soft Silk",Pieces:3,
    images: ["/images/sowch/D23-1.jpg","/images/sowch/D23-2.jpg","/images/sowch/D23-3.jpg","/images/sowch/D23-4.jpg"] },

  { id: "D24", label: "Elegant Style", color: "Multi Color", price: 2098.95, size: ["M","L","XL","XXL"],
    type:"Soft Silk",Pieces:3,
    images: ["/images/sowch/D24-1.jpg","/images/sowch/D24-2.jpg","/images/sowch/D24-3.jpg","/images/sowch/D24-4.jpg"] },

  { id: "D25", label: "Trendy Collection", color: "Orange with Pink", price: 2413.95, size: ["M","L","XL","XXL"],
    type:"Pure Soft Silk",Pieces:3,
    images: ["/images/sowch/D25-1.jpg","/images/sowch/D25-2.jpg","/images/sowch/D25-3.jpg","/images/sowch/D25-4.jpg"] },

  { id: "D26", label: "Festive Wear", color: "White", price: 1783.95, size: ["M","L","XL","XXL"],
    type:"Pure Fendy Satin",Pieces:3,
    images: ["/images/sowch/D26-1.jpg","/images/sowch/D26-2.jpg","/images/sowch/D26-3.jpg","/images/sowch/D26-4.jpg"] },

  { id: "D27", label: "Modern Look", color: "Gold", price: 2623.95, size: ["L","XL","XXL","XXXL"],
    type:"Pure Fendy Satin",Pieces:3,
    images: ["/images/sowch/D27-1.jpg","/images/sowch/D27-2.JPG","/images/sowch/D27-3.jpg","/images/sowch/D27-4.JPG"] },

  { id: "D28", label: "Designer Pick", color: "Blue", price: 2623.95, size: ["L","XL","XXL","XXXL"],
    type:"Pure Fendy Satin",Pieces:3,
    images: ["/images/sowch/D28-1.jpg","/images/sowch/D28-2.jpg","/images/sowch/D28-3.jpg"] },

  { id: "D29", label: "Premium Choice", color: "Red", price: 2623.95, size: ["L","XL","XXL","XXXL"],
    type:"Pure Fendy Satin",Pieces:3,
    images: ["/images/sowch/D29-1.JPG","/images/sowch/D29-2.JPG","/images/sowch/D29-3.jpg"] }
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

<h1 className="top-header">New Collections</h1>

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