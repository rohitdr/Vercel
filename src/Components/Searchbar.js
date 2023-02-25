import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import './searchbar.css'
import NavbarToggler from "./NavbarToggler";
import RecipeContext from "../Context/RecipeContext";
export default function Searchbar(props) {
  const context = useContext(RecipeContext)
  const {recipe,NameRecipe, setName_to_search,name_to_search,searchRecipe} = context

//  useEffect(()=>{
// NameRecipe("pasta")
// console.log("hlo")
// console.log(recipe)
//  },[])
const changesize=()=>{
 document.getElementById("searchbar-searchbox").style.width="400px"
 
}
var searchentered


  return (
   
    <>




<nav class="navbar navbar-expand-lg bg-light" id="Searchbar">
  <div class="container-fluid">
    <span class="navbar-brand"><span  class="name text-white"> <NavbarToggler></NavbarToggler>
  
          <span class="R">R</span>
          <span class="e">e</span>
          <span class="c">c</span>
          <span class="i">i</span>
          <span class="p">p</span>
          <span class="e2">e</span>
          <span class="R2">R</span>
          <span class="i2">i</span>
          <span class="o">o</span>
          <span class="t">t</span>
          </span></span>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-magnifying-glass "></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        
         
        </li>
       
      </ul>
      <form class="d-flex text-white">
        <input class="form-control me-2 search_input" id="searchbar-searchbox" type="search" placeholder="Search" aria-label="Search" onClick={changesize} onChange={(e)=>{
          searchentered=e.target.value
          setName_to_search(searchentered)
      
        }}  />
        
      
      <Link  class="btn btn-outline-light" tabindex="-1" to={"/SearchResult"} role="button" onClick={()=>{ console.log("h");  NameRecipe(`/${name_to_search}`); console.log(searchRecipe); console.log("done")}}  aria-disabled="true">Search</Link>
      </form>
    </div>
  </div>
</nav>
    </>
  );
}
