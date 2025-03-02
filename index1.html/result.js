
//hum ek or database ready karage jo static project tha usse default project karna hao 

let obj=[
    {id:1,pname:"smart Mobile",price:87000,category:"mobile",subcat:"nokia",pimage:"image/krishan4.jpeg"},
    {id:2,pname:"smart Mobile",price:97000,category:"mobile",subcat:"lg",pimage:"image/krishan3.jpg"},
    {id:3,pname:"smart Mobile",price:67000,category:"mobile",subcat:"nokia",pimage:"image/krishan5.webp"},
    {id:4,pname:"smart Mobile",price:37000,category:"mobile",subcat:"samaung",pimage:"image/krishan8.jpeg"},
    {id:5,pname:"shirt",price:700,category:"shirt",subcat:"man",pimage:"image/shirt1.jpeg"},
    {id:6,pname:"shirt",price:900,category:"shirt",subcat:"man",pimage:"image/shirt1.jpeg"},
    {id:7,pname:"shirt",price:1200,category:"shirt",subcat:"woman",pimage:"image/shirt4.jpeg"},
    {id:8,pname:"shirt",price:2000,category:"shirt",subcat:"kids",pimage:"image/shirt1.jpeg"},
    
]
/*
let totaldata=obj.map((item)=>{
    return(

  `
        <div class="product">
  <img src=${item.pimage}> 

<div class="data">
<h2>pname=${item.pname}</h2>
<p>price=${item.price}</p>
<p>category=${item.category}</p>
<p>sub-category=${item.subcat}</p>
</div>
        </div>
  `
    )
})
document.getElementById("myrow").innerHTML=totaldata.join('')
*/
//ye ek hi method se banaya hai or ye hi use karage okk
function filterdata(cat,scat){
   if(cat,scat){
    fdata=obj.filter((pro)=>{
    return cat===pro.category && scat===pro.subcat 
   })
  }
  else if(cat){
    fdata=obj.filter((pro)=>{
    return cat===pro.category
   })
  }
  // yaha humne default method chalaya hai upper baale ko comment karke or bhi short kar liya  
   else{
    fdata=obj
   }
let totaldata=fdata.map((item)=>{
  return(

`
      <div class="product">
<img src=${item.pimage}> 

<div class="data">
<h2>pname=${item.pname}</h2>
<p>price=${item.price}</p>
<p>category=${item.category}</p>
<p>sub-category=${item.subcat}</p>
</div>
      </div>
`
  )
})
document.getElementById("myrow").innerHTML=totaldata.join('')
  }
 // yaha bhi humne default method use kiya hai
filterdata()
/*
First Type=yaha alag alag method se banaya hai

function filterdata(cat){
  let fdata=obj.filter((pro)=>{
    return cat===pro.category
  })
  let totaldata=fdata.map((item)=>{
    return(

  `
        <div class="product">
  <img src=${item.pimage}> 

<div class="data">
<h2>pname=${item.pname}</h2>
<p>price=${item.price}</p>
<p>category=${item.category}</p>
<p>sub-category=${item.subcat}</p>
</div>
        </div>
  `
    )
})
document.getElementById("myrow").innerHTML=totaldata.join('')
  }

function subfilter(cat,scat){
  let fdata=obj.filter((item)=>{
    return cat===item.category && scat===item.subcat
 
  })

  let totaldata=fdata.map((item)=>{
    return(

  `
        <div class="product">
  <img src=${item.pimage}> 

<div class="data">
<h2>pname=${item.pname}</h2>
<p>price=${item.price}</p>
<p>category=${item.category}</p>
<p>sub-category=${item.subcat}</p>
</div>
        </div>
  `
    )
})
document.getElementById("myrow").innerHTML=totaldata.join('')
}
*/