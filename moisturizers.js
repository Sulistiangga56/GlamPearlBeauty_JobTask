

    //Details of all the products that will be shown in Moisturizer page is being stored in allProdArr
    let allProdArr=[
    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/day-night_1800x1800_1_360x.png?v=1628595712",
    Details:"Vitamin C Moisturizer With Kakadu Plum & Vitamin E| Fades Pigmentation & Dark Spots| Oily & Dry Skin| Wom...",
    Pricecrossed:"Rp.̶5̶9̶5̶.̶0̶00̶",
    Pricevalue:"565.001",
    Discount:"save 5%",
    Star:"fa fa-star rd"},

    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-Rose_360x.jpg?v=1644862602",
    Details:"CICA Niacinamide Night Gel With Green Tea, Tea Tree Oil & Hyaluronic| Reduces Acne & Dark Spots | Oily,...",
    Pricecrossed:"Rp.̶5̶9̶5̶.̶0̶00̶",
    Pricevalue:"565.001",
    Discount:"save 5%",
    Star:"fa fa-star rd"},

    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/day-night_1800x1800_1_360x.png?v=1628595712",
    Details:"72 HR Hydrating Probiotic Gel Moisturizer For Face With Hyaluronic & Rice Water|For...",
    Pricecrossed:"Rp.̶ ̶7̶4̶5̶.̶0̶00̶",
    Pricevalue:"670.005",
    Discount:"save 10%",
    Star:"fa fa-star rd",
    Starvacant:"fa fa-star checked"},

    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-Rose_360x.jpg?v=1644862602",
    Details:"Retinol & Ceramide Age Defense Night Cream For Face| Treats Fine Lines & Wrinkles | Mature,...",
    Pricecrossed:"Rp.̶ ̶9̶4̶5̶.̶0̶00̶",
    Pricevalue:"850.002",
    Discount:"save 10%",
    Star:"fa fa-star rd",
    Starvacant:"fa fa-star checked"},

    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/day-night_1800x1800_1_360x.png?v=1628595712",
    Details:"Watermelon Super Glow Matte Face Cream With Glycolic | Minimizes Pores & Evens Skin Tone|...",
    Pricecrossed:"Rp.̶5̶9̶5̶.̶0̶00̶",
    Pricevalue:"565.000",
    Discount:"save 5%",
    Star:"fa fa-star rd"},

    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-Rose_360x.jpg?v=1644862602",
    Details:"AVOCADO SMOOTHIE DAY CREAM SPF 20",
    Pricecrossed:"Rp.̶ ̶8̶4̶5̶.̶0̶00̶",
    Pricevalue:"718.000",
    Discount:"save 15%",
    Star:"fa fa-star rd",
    Starvacant:"fa fa-star checked"},

    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/day-night_1800x1800_1_360x.png?v=1628595712",
    Details:"DAY & NIGHT CARE COMBO",
    Pricecrossed:"Rp.̶ ̶1̶5̶9̶0̶.̶0̶00̶",
    Pricevalue:"1.43.100",
    Discount:"save 10%",
    Star:"fa fa-star rd",
    Starvacant:"fa fa-star checked"},

    {Image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HandCream-Rose_360x.jpg?v=1644862602",
    Details:"HAND CREAM + SANITIZER, LAVENDER",
    Pricecrossed:"",
    Pricevalue:"395.000",
    Discount:"",
    Star:"fa fa-star rd",
    Starvacant:"fa fa-star checked"},

];


    //Calling displayProduct function
    displayProduct();



    //function for displaying all the products of Moisturizer Page
    function displayProduct() { 
        allProdArr.forEach(function(el,index){
        let divC=document.createElement("div");
        let prodImg=document.createElement("img");
        prodImg.setAttribute("src", el.Image);
        divC.append(prodImg);
        if(index===2||index===3||index===5||index===6||index===7||index===8||index===9) {
            for(let i=1; i<=5; i++) {
                if(i===5) {
                    let starIcon=document.createElement("span");
                    starIcon.setAttribute("class",el.Starvacant);
                    divC.append(starIcon);
                    break;
                }  
                let starIcon=document.createElement("span");
                starIcon.setAttribute("class",el.Star);
                divC.append(starIcon);  
            }
        } else if(index===0||index===1||index===4) {
            for(let i=1; i<=5; i++) {
                let starIcon=document.createElement("span");
                starIcon.setAttribute("class",el.Star);
                divC.append(starIcon);
            }
        }
        let icon=document.createElement("p");
        icon.innerText="♡";  
        divC.append(icon); 
        let prodDet=document.createElement("h4");
        prodDet.innerText=el.Details;
        let oldPrice=document.createElement("p");
        oldPrice.innerText=el.Pricecrossed;
        let priceSpan=document.createElement("span");
        priceSpan.innerText=el.Pricevalue;
        let recentPrice=document.createElement("p");
        recentPrice.innerText="Rp.";
        recentPrice.append(priceSpan);
        divC.append(recentPrice);
        let cartBtn=document.createElement("button");
        cartBtn.innerText="ADD TO CART";
        cartBtn.setAttribute("class","addToCart")
        let discountPercent=document.createElement("div");
        discountPercent.innerText=el.Discount;
        divC.append(discountPercent);
        divC.append(prodDet,oldPrice,recentPrice,cartBtn);
        document.querySelector("#allProd").append(divC);
        })   
    }



    //Adding Products to the cartData key of loacl storage
    let addToCartBtn=document.querySelectorAll(".addToCart");
    let items=[];
    for(let i=0; i<addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener("click",function(event){ 
        let item = {
          id: "Moisturizer"+(i+1),
          image:event.target.parentElement.children[0].src,
          name: event.target.parentElement.children[8].innerText,
          price: event.target.parentElement.children[10].children[0].innerText,
          quantity:1
        }
        if(JSON.parse(localStorage.getItem("cartData"))===null) {
            items.push(item);
            localStorage.setItem("cartData", JSON.stringify(items));
            window.location.reload();
        } else {
            let localItems=JSON.parse(localStorage.getItem("cartData"));
            localItems.map(data=> {
              if(item.id===data.id) {
                item.quantity=data.quantity+1;
              } else {
                items.push(data);
              }
            });
        items.push(item);
        localStorage.setItem("cartData", JSON.stringify(items)); 
        window.location.reload();      
        }
       });
    }
