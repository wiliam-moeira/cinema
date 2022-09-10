import React from 'react';
import f1 from '../img/filme1j.jpg'
import f2 from '../img/filme3j.jpg'
import f3 from '../img/filme4j.jpg'
import f4 from '../img/filme5j.jpg'
import f5 from '../img/filme6j.jpg'
import f6 from '../img/filme7j.jpeg'
import f7 from '../img/filme8j.jpg'
import f8 from '../img/filme9j.jpg'
function Content(){
    return(
    
   <content>
       
       <div class="Filmes">
       <img src = {f1} ></img>
        <img src = {f2}></img>
      <img src = {f3}></img>
      <img src = {f4}></img>

       </div>
       <div class="Filmes">
       <img src = {f5} ></img>
        <img src = {f6}></img>
      <img src = {f7}></img>
      <img src = {f8}></img>
    
      
       </div>
       

   </content>
    )
  }
  export default Content;
  