let serumdata=[
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/SkinAwakening_360x.jpg?v=1610017602" ,
        info:"20% VITAMIN C SERUM WITH BLOOD ORANGE|FOR SKIN GLOW|FADES PIGMENTATION & DARK SPOTS" ,
        oldprice:"Rp: 800.000",
        price:"Rp: 680.000",
        },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_11_360x.webp?v=1644493946",
     info:"10% NIACINAMIDE FACE SERUM WITH ZINC & ANTIOXIDANTS| TREATS ACNE,DARK SPOTS& ACNE SCARES|WOMEN & MEN",
     oldprice:"Rp: 700.000",
    price:"Rp: 598.000",
        },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/SkinAwakening_360x.jpg?v=1610017602",
     info:"RETINOL TIME REVERpE FACE SERUM",
     oldprice:"Rp: 900.000",
    price:"Rp: 715.000", 
         },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_11_360x.webp?v=1644493946",
     info:"HYALURONIC + CEREMIDE HYDRATING",
     oldprice:"Rp: 790.000",
    price:"Rp: 598.000", 
        },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/SkinAwakening_360x.jpg?v=1610017602",
     info:"VITAMIN C++ GLOW FACE SERUM WITH KAKADU PLUM|FOR SKIN",
     oldprice:"Rp: 102.200",
    price:"Rp: 715.000",
      },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_11_360x.webp?v=1644493946",
     info:"10% AHA +2% BHA EXFOLIATING GLOW HYDRO PEEL",
     oldprice:"Rp: 769.000",
    price:"Rp: 565.000",
        },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/SkinAwakening_360x.jpg?v=1610017602",
     info:"ALPHA ARBUTIN + AZELAIC BIPHASIC RADIANCE SERUM ",
     oldprice:"Rp: 790.000",
    price:"Rp: 590.000",
      },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_11_360x.webp?v=1644493946",
     info:"PHA + BAKUCHIOL DAILY PEEL SERUM",
     oldprice:"Rp: 750.000",
    price:"Rp: 600.000",
      },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/SkinAwakening_360x.jpg?v=1610017602",
     info:"2% SALICYLIC FACE SERUM WITH TEA TREE OIL & ZINC | TREATES ACNE",
     oldprice:"Rp: 690.000",
    price:"Rp: 500.000", 
       },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_11_360x.webp?v=1644493946",
     info:"GLOW ELIXIR FACE OIL",
     oldprice:"Rp: 700.000",
    price:"Rp: 540.000",
     },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/SkinAwakening_360x.jpg?v=1610017602",
     info:"30% AHA +2% BHA GLOW ACCELERATOR PEEL",
     oldprice:"Rp: 800.000",
    price:"Rp: 698.000",
     },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_11_360x.webp?v=1644493946",
     info:"SUPERFOODS NOURISHING FACE OIL",
     oldprice:"Rp: 789.000",
    price:"Rp: 520.000",
       },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/SkinAwakening_360x.jpg?v=1610017602",
     info:"AGE DEFENCE + GLOW NIGHT SERUM",
     oldprice:"Rp: 639.000",
    price:"Rp: 400.000",
      },
    {img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_11_360x.webp?v=1644493946",
     info:"MOISTURIZING SERUM",
     oldprice:"Rp: 780.000",
    price:"Rp: 500.000",
       },
    ]

  let data=JSON.parse(localStorage.getItem("serumdata")) || []


  function what_to_show() {
    let len = JSON.parse(localStorage.getItem("login-data")) || [];
    if (len.length > 0) {
      window.location.href = "details.html";
    } else {
      window.location.href = "login.html";
    }
  }

  function yes(){
    let x=document.querySelector("#filter").value;
    if(x==="Home"){
      window.location.href = "Index.html";
   }else if(x=="hair care"){
      window.location.href = "HairCare.html";
   }else if(x=="body care"){
      window.location.href = "BodyCare.html";
   }else if(x=="nutrition"){
      window.location.href = "Nutrition.html";
   }else if(x=="serum"){
      window.location.href = "Serum.html";
   }else if(x=="moisturizers"){
      window.location.href = "Moisturizers.html";
   }else if(x=="knowUsBatter"){
      window.location.href ="aboutus.html";
   }else if(x=="profile"){
      window.location.href ="details.html";
   }
  }




  displayproduct(serumdata)

function  displayproduct(serumdata)
{
    serumdata.forEach(function(ele){
        let box=document.createElement("div")
         
        box.addEventListener("click",function(){
          serumpage(ele);
    })

        let image=document.createElement("img")
        image.setAttribute("src",ele.img)
        let Info=document.createElement("p")
        Info.setAttribute("class", "para");
        Info.innerText=ele.info;
        let pricediv=document.createElement("div")
        pricediv.setAttribute("id","pricediv")
        let oldprice=document.createElement("p")
        oldprice.innerText=ele.oldprice
        oldprice.style.textDecoration="line-through"
        oldprice.style.color="grey"
        let price=document.createElement("p")
        price.innerText=ele.price;
        let button= document.createElement("button")
        button.innerText="ADD TO CART"
        button.setAttribute("class","addToCart")
        
         

        // starbox.append(star)
        pricediv.append(oldprice,price)
        box.append(image,Info,pricediv,button);
        
        document.querySelector("#middle").append(box)

    })
    
}

function serumpage(ele)
    {
   localStorage.setItem("serumdata",JSON.stringify(ele))
   window.location.href="./serumLS.html"
    }

