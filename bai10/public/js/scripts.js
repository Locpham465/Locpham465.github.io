const flower = document.querySelectorAll(".btn-f");
const pot = document.querySelectorAll(".pot");
const money = document.querySelector("#cash");
let name = "";
let price = 0;
flower.forEach(function(item){
item.addEventListener("click",function(){
    // item.style.borderStyle = "groove";
    // item.style.borderColor = "yellow";
    name = item.getAttribute("id");
    price = item.innerHTML;
    console.log(name);
    // flower.forEach(function(item){
    //     if(item.style.borderStyle == "groove"){
    //         item.style.borderStyle = "hidden"; 
    //     }
        
    // })
})
})
pot.forEach(function(item){
    item.addEventListener("click",function(){
        if (name == "") {
            alert("Chua chon Hoa!");
        }
        else if(money.innerHTML < price ){
            alert("Khong du Tien!");
        }
        else if (item.firstElementChild.getAttribute("src")!="") {
            alert("Chau da co Hoa");
        }
        else{
            item.firstElementChild.setAttribute("src","public/images/"+name+".png");
            money.innerHTML -= price;
        }
        

    })
})