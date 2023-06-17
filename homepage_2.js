    

    let award_promise_Array=[
        {title:"AWARD WINING",
        stitle:"SKINCARE",
        content:"Don't just take our word for it. Here's what the beauty gurus have to say about our products.",
        img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/ezgif.com-gif-maker_ff4dc633-9c9a-40b1-810f-2614147ac68d_540x.gif?v=1615273304"
    },
    {title:"PROMISE",
        stitle:"GLAM PEARL BEAUTY",
        content:"We beleive in delightfully safe, surprisingly gentle and unquestionably effective skincare products that are free from nasty chemicals",
        img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Little-things-that-matter-2_540x.jpg?v=1596602464"
    }
    ];
    let arr=0;
    
    
    let left=document.querySelector("#btnLeft");
    left.addEventListener("click",leftbuttonfun);
    function leftbuttonfun(){
        
    if(arr==0){
        arr++;
       let title=document.querySelector("#awardwiningText>div>span:first-child");
       title.innerText=award_promise_Array[arr].title;
       let stitle=document.querySelector("#awardwiningText>div>span:last-child");
       stitle.innerText=award_promise_Array[arr].stitle;
       let content=document.querySelector("#awardwiningText>div>p");
       content.innerText=award_promise_Array[arr].content;
       let image=document.querySelector("#awardwiningBanner>img");
       image.src=award_promise_Array[arr].img;
    }else if(arr==1){
        arr--;
       let title=document.querySelector("#awardwiningText>div>span:first-child");
       title.innerText=award_promise_Array[arr].title;
       let stitle=document.querySelector("#awardwiningText>div>span:last-child");
       stitle.innerText=award_promise_Array[arr].stitle;
       let content=document.querySelector("#awardwiningText>div>p");
       content.innerText=award_promise_Array[arr].content;
       let image=document.querySelector("#awardwiningBanner>img");
       image.src=award_promise_Array[arr].img;
    }
       
     }

     let right=document.querySelector("#btnRight");
     right.addEventListener("click",rightbuttonfun);
    function rightbuttonfun(){
        
    if(arr==0){
        arr++;
       let title=document.querySelector("#awardwiningText>div>span:first-child");
       title.innerText=award_promise_Array[arr].title;
       let stitle=document.querySelector("#awardwiningText>div>span:last-child");
       stitle.innerText=award_promise_Array[arr].stitle;
       let content=document.querySelector("#awardwiningText>div>p");
       content.innerText=award_promise_Array[arr].content;
       let image=document.querySelector("#awardwiningBanner>img");
       image.src=award_promise_Array[arr].img;
    }else if(arr==1){
        arr--;
       let title=document.querySelector("#awardwiningText>div>span:first-child");
       title.innerText=award_promise_Array[arr].title;
       let stitle=document.querySelector("#awardwiningText>div>span:last-child");
       stitle.innerText=award_promise_Array[arr].stitle;
       let content=document.querySelector("#awardwiningText>div>p");
       content.innerText=award_promise_Array[arr].content;
       let image=document.querySelector("#awardwiningBanner>img");
       image.src=award_promise_Array[arr].img;
    }
       
     }

     let reviewArray=[
        {
        img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Artboard1_2.jpg?v=1635157945",
        text: "Aku suka pelembab ini. Itu membuat kulit Aku sangat lembut dan kenyal dan tidak berminyak atau lengket sama sekali.",
        reviwer:"Nabila"
        },
        {
        img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/a.jpg?v=1634903074",
        text: "Plumping Lip mask yang luar biasa bisa membuat bibir halus dan merah muda alami.",
        reviwer:"Gisel"
        },
        {
        img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/nightresetretinolcream_f7f3a49c-5a22-4173-81a7-6aad8d00fe8d.jpg?v=1634903102",
        text: "Aku cape banget, mau gunain produk a salah produk b salah karena aku punya kulit yang sensitive. Akhirnya, aku menemukan produk Glam Pearl Beauty dan setelah aku cari tau ternyata Glam Pearl Beauty memakai bahan-bahan yang alami dan aku sangat tertarik untuk mencobanya. Setelah aku coba, aku merasa kulit aku cocok dengan produk ini yang dimana kulit aku sehat sepanjang hari.",
        reviwer:"Lina"
        },
        {
        img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/image-2.png?v=1635158596",
        text: "Setiap hari aku selalu merasa kulit muka aku kering, udah coba beberapa macam moisturizer tapi kurang melembabkan untuk kulit ku yang sangat kering ini. Lalu aku menonton salah satu beauty vlogger dan dia menggunakan produk dari Glam Pearl Beauty yang dimana produk moisturizernya menjaga kelembaban sepanjang hari.",
        reviwer:"Nadine"
        },
        {
        img:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-1_2.png?v=1634903414",
        text: "Kemarin kulit aku berjerawat selama 1-2 bulan, udah coba berbagai produk skincare tapi hasilnya nihil.  Lalu, aku nanya ke temen dan dia merekomendasikan produk skincare dari Glam Pearl Beauty dan aku langsung mencobanya. Ketika  7 hari pemakaian, aku sudah merasakan perubahannya, bekas jerawatku mulai memudar dan kulit muka aku disaat pagi hari merasa sehat dan kenyal.",
        reviwer:"Tiara"
        }

        
        ];
       



        let x=0;

let rightbtnReview=document.querySelector("#reviewbtnRight");

rightbtnReview.addEventListener("click",reviewRight);
function reviewRight(){
    let reviewImage=document.querySelectorAll("#newReviewContent>div>img");
    let reviewstars=document.querySelectorAll(".content>p>span");
    let reviewers=document.querySelectorAll("#reviewer");

    
    
if(x==reviewArray.length-3){
    x=0;
    reviewImage[0].src=reviewArray[0].img;
    reviewImage[1].src=reviewArray[1].img;
    reviewImage[2].src=reviewArray[2].img;

    reviewstars[0].innerText=reviewArray[0].text;
    reviewstars[1].innerText=reviewArray[1].text;
    reviewstars[2].innerText=reviewArray[2].text;

    reviewers[0].innerText=reviewArray[0].reviwer;
    reviewers[1].innerText=reviewArray[1].reviwer;
    reviewers[2].innerText=reviewArray[2].reviwer;

}
else if(x<reviewArray.length-3){
    x++;
   
    for(let i=0;i<reviewImage.length;i++){
    reviewImage[i].src=reviewArray[i+x].img;
    reviewstars[i].innerText=reviewArray[i+x].text;
    reviewers[i].innerText=reviewArray[i+x].reviwer;

}
}
}





let leftbtnReview=document.querySelector("#reviewbtnLeft");

leftbtnReview.addEventListener("click",reviewLeft);
function reviewLeft(){
    let reviewImage=document.querySelectorAll("#newReviewContent>div>img");
    let reviewstars=document.querySelectorAll(".content>p>span");
    let reviewers=document.querySelectorAll("#reviewer");
    
if(x==reviewArray.length-3){
    x=0;
    reviewImage[0].src=reviewArray[0].img;
    reviewImage[1].src=reviewArray[1].img;
    reviewImage[2].src=reviewArray[2].img;

    reviewstars[0].innerText=reviewArray[0].text;
    reviewstars[1].innerText=reviewArray[1].text;
    reviewstars[2].innerText=reviewArray[2].text;

    reviewers[0].innerText=reviewArray[0].reviwer;
    reviewers[1].innerText=reviewArray[1].reviwer;
    reviewers[2].innerText=reviewArray[2].reviwer;

}
else if(x<reviewArray.length-3){
    x++;
    for(let i=0;i<reviewImage.length;i++){
    reviewImage[i].src=reviewArray[i+x].img;
    reviewstars[i].innerText=reviewArray[i+x].text;
    reviewers[i].innerText=reviewArray[i+x].reviwer;

}
}
}






let skincareArray=[
        "Decoding Retinol - Who Is It Good For?",
        "Make Way for L-Ascorbic Acid: The New Vitamin C Game Changer",
        "Importance of Face Serum? How do you choose what suits your skin best?",
        "Why is Scalp Care Important? Importance of Healthy Scalp",
        "JUST DROPPED: The Next Gen Vitamin C Serum Your Skin Deserves!",
        "9 Summer Skincare Mistakes You Should Avoid  For Flawless Skin",
        "What Is Beauty Sleep? Importance Of Beauty Sleep For Your Skin",
        "Summer Skincare Essentials You Need To Carry In Your Handbag",
        "Things To Remember Pre and Post Swim",
        "3 Magical Fruits For Weight Loss And Glowing Skin",
        "What is the Purpose & Benefits of Day Cream?",
        "10 Most Effective Homemade Detanning Remedies"

]

localStorage.setItem("JC",0);


document.querySelector("#journalright").addEventListener("click",function(){
let JC=localStorage.getItem("JC");


let journalContent=document.querySelector("#journalleft+div>p");
journalContent.innerText=skincareArray[JC];

if(JC==skincareArray.length-1){
    localStorage.setItem("JC",0);
    JC=0;  
    journalContent.innerText=skincareArray[JC];

}

else
{
JC++;
localStorage.setItem("JC",JC);
journalContent.innerText=skincareArray[JC];


}
})



document.querySelector("#journalleft").addEventListener("click",function(){
    let JC=localStorage.getItem("JC");
    
    
    let journalContent=document.querySelector("#journalleft+div>p");
    journalContent.innerText=skincareArray[JC];
    
    if(JC==0){
        localStorage.setItem("JC",skincareArray.length-1);
        JC=skincareArray.length-1;  
        journalContent.innerText=skincareArray[JC];
    
    }
    
    else
    {
    JC--;
    localStorage.setItem("JC",JC);
    journalContent.innerText=skincareArray[JC];
    
    
    }
    })