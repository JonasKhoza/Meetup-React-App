import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavoritesContextProvider } from "./components/store/favoritesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
);

/*

import {BrowserRouter} from "react-router-dom";
<BrowserRouter>
</BrowserRouter>

import {Routes, Route} from "react-router-dom";

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/info/:productId" element={<ProductInfo/>}/>
<Route path="/search/:search" element={<Search/>}/>
</Routes>

import {Link} from "react-router-dom"
function Navigation() {
  <ul>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/About">About</Link></li>
  </ul>
  
 
}


import {Link} from "react-router-dom"
import {useState, useEffect, useNavigate} from "react"

function Home(){

 const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const Navigate = useNavigate();

  useEffect( () => {
   async function getProducts() {
    const res = await fetch("jhdshjshsb");
    const products = await res.json();
    setProducts(products)
   }
   getProducts()
 }, [])

 function onEnter(e) {
  const value = e.target.value;
         setSearch(value)
 }

 function searching() {
       Navigate(`/search/${search} `)
 }

   return (<div>
     <h1>Home</h1>

     <div>
     <input type="text" onChange={onEnter} onClick={searching} value={search}/>
     </div>

  <div>
    <ul>
      {products.map( (product)=> {
       return (
       <li>
        <Link to=`/info/${product.id}`>
         <img src={product.image} alt=""/>
         <h2>{product.name}</h2>
         <p>{product.price}</p>
        </Link>
       </li>)
      
     })}
   </ul>
  </div>

</div>)
}


import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

function Search() {
  const [products, setProducts] = useState([]);
  const Params = useParams();

  useEffect( () => {
    async function getProducts() {
      const res = await fetch(`hgehge/${Params.search}`)
      const products = await res.json();

      if(!res.ok) {
           return  console.log(" Searched product is not available")
      }
      getProducts();
      setProducts(products);
    }
  })
  return(
     
      <ul>
      {products.map( (product)=> {
       return (
       <li>
        <Link to=`/info/${product.id}`>
         <img src={product.image} alt=""/>
         <h2>{product.name}</h2>
         <p>{product.price}</p>
        </Link>
       </li>)
      
     })}
   </ul>

  )
}



import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

function ProductInfo() {
 const [product, setProduct] = useState([]);
 const Params = useParams();


 useEffect( () => {
   async function getProduct() {
    const res = await fetch(`jhdshjshsb/{Params.productId}`);
    const product = await res.json();
    setProduct(product)
   }
   getProduct()
 }, [])
  return( 
  <section>
      <h3>Product Info</h3>
    <div>
      <img src={product.image} alt={product.name}/>
      <h2>{product.name</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  </section>
  )
}

.toLocaleString()
*/
