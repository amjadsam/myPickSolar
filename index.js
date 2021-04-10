const products=[
    {
        productName:"Pro Prestige 50 leakgaurd",
        price:"$1500",
        id:1,
        volume:"40",
        annualsaving:"$150"
    },
    {
        productName:"dummy5",
        price:"$1800",
        id:5,
        volume:"40",
        annualsaving:"$140"
    },
    {
        productName:"Pro Prestige 65-15 amp",
        price:"$1600",
        id:2,
        volume:"50",
        annualsaving:"$155"
    },
    {
        productName:"dummy3",
        price:"$1700",
        id:3,
        volume:"65",
        annualsaving:"$160"
    },
    {
        productName:"dummy4",
        price:"$1800",
        id:4,
        volume:"80",
        annualsaving:"$165"
    }
];

let container=document.getElementById("container");
let totalCards=products.length;
for(let i=0;i<totalCards;i++)
{
let card=document.createElement("div");
card.className="card";
container.appendChild(card);
card.setAttribute("volume",products[i].volume);
let topText=document.createElement("div");
topText.className="top-text";
card.appendChild(topText);
let rheem=document.createElement("p");
rheem.innerHTML="Rheem";
rheem.setAttribute("style","font-size:20px;")
let productsName=document.createElement("p");
productsName.innerHTML=products[i].productName;
productsName.setAttribute("style","font-size:10px");
topText.appendChild(rheem);
topText.appendChild(productsName);
let middleText=document.createElement("div");
middleText.className="middle-text";
card.appendChild(middleText);
let image=document.createElement("img");
image.setAttribute("src","./image/product_image");
image.setAttribute("height",250);
image.setAttribute("width",100);
middleText.appendChild(image);
let unorderedList=document.createElement("ul");
middleText.appendChild(unorderedList);
let listItem1=document.createElement("li");
listItem1.innerHTML="4X more efficient as standard model";
let listItem2=document.createElement("li");
listItem2.innerHTML="10-year manufacturer warranty";
let listItem3=document.createElement("li");
listItem3.innerHTML="Built-in leak prevention system";
let listItem4=document.createElement("li");
listItem4.innerHTML="Control settings with a mobile app";
unorderedList.appendChild(listItem1);
unorderedList.appendChild(listItem2);
unorderedList.appendChild(listItem3);
unorderedList.appendChild(listItem4);
let line=document.createElement("p");
line.setAttribute("style","border-bottom:1px solid gray;width:90%;margin-left:15px");
card.appendChild(line);
let basePriceDiv=document.createElement("div");
basePriceDiv.setAttribute("style","display:flex; margin-top:20px;margin-left:25px;color:gray");
card.appendChild(basePriceDiv);
let basePrice=document.createElement("p");
basePrice.setAttribute("style","font-family:Arial, Helvetica, sans-serif;font-weight:700;color:gray;");
basePrice.innerHTML="Base Price";
let dashedLine=document.createElement("p");
dashedLine.setAttribute("style","border-bottom:1px dashed gray; color:white");
dashedLine.innerHTML="a gap of some length to dashed line";
let amount=document.createElement("p");
amount.innerHTML=products[i].price;
basePriceDiv.appendChild(basePrice);
basePriceDiv.appendChild(dashedLine);
basePriceDiv.appendChild(amount);
let bracketText=document.createElement("div");
bracketText.setAttribute("style","color:gray;font-size:10px ;margin-left:20px;");
bracketText.innerHTML="(installation not included)";
card.appendChild(bracketText);
let incentivesParentDiv=document.createElement('div');
incentivesParentDiv.setAttribute("style","display:flex;color:gray;");
card.appendChild(incentivesParentDiv);
let incentivesDiv=document.createElement("div");
incentivesDiv.innerHTML="Available Incentives";
incentivesParentDiv.appendChild(incentivesDiv);
let infotooltip=document.createElement("div");
infotooltip.setAttribute("style","margin-top:5px;margin-left:10px");
incentivesParentDiv.appendChild(infotooltip);
let image2=document.createElement("div");
image2.setAttribute("src","./image/info-tooltip.svg");
infotooltip.appendChild(image2);
let dash2=document.createElement("p");
dash2.setAttribute("style","border-bottom:1px dashed gray; color:white");
dash2.innerHTML="a gap of some length to dashed ";
incentivesParentDiv.appendChild(dash2);
let amount2=document.createElement("p");
amount2.innerHTML="$0";
incentivesParentDiv.appendChild(amount2);
let equipmentCostParentDiv=document.createElement('div');
equipmentCostParentDiv.setAttribute("style","display:flex;color:gray;");
card.appendChild(equipmentCostParentDiv);
let equipmentCostDiv=document.createElement("div");
equipmentCostDiv.innerHTML="Equipment Cost";
equipmentCostParentDiv.appendChild(equipmentCostDiv);
let infotooltip2=document.createElement("div");
infotooltip2.setAttribute("style","margin-top:5px;margin-left:10px");
equipmentCostParentDiv.appendChild(infotooltip2);
let image3=document.createElement("div");
image3.setAttribute("src","./image/info-tooltip.svg");
infotooltip2.appendChild(image3);
let dash3=document.createElement("p");
dash3.setAttribute("style","border-bottom:1px dashed gray; color:white");
dash3.innerHTML="a gap of some length to dashed ";
dash3.setAttribute("style","border-bottom:1px dashed gray; color:white");
dash3.innerHTML="a gap of some length to dashed ";
equipmentCostParentDiv.appendChild(dash3);
let amount3=document.createElement("p");
amount3.innerHTML="$1500";
equipmentCostParentDiv.appendChild(amount3);
let finaldiv=document.createElement("div");
finaldiv.innerHTML="Your Est. Annual Savings is";
finaldiv.className="final-div";
let strong=document.createElement("strong");
strong.innerHTML=products[i].annualsaving;
strong.setAttribute("style","color:green; margin-left:2px");
finaldiv.appendChild(strong);
let infotooltip3=document.createElement("div");
infotooltip3.setAttribute("style","margin-top:2px;");
finaldiv.appendChild(infotooltip3);
let image4=document.createElement("img");
image4.setAttribute("src","./image/info-tooltip.svg");
infotooltip3.appendChild(image4);
card.appendChild(finaldiv);
let button=document.createElement("button");
button.innerHTML="Get Install Quote";
card.appendChild(button);
let moredetails=document.createElement("div");
moredetails.className="more-details"
card.appendChild(moredetails);
let anchor=document.createElement("a");
anchor.innerHTML="View More Details"
anchor.addEventListener("click",sam);
moredetails.appendChild(anchor);    
}

selectVolume(document.getElementById("selected"));

function selectVolume(element) {
    const value = element.value;
    const products = document.getElementsByClassName('card');
    Array.prototype.forEach.call(products, product => {
      const productAttr = product.getAttribute('volume');
      
      productAttr != value ? 
          product.style.display = 'none' :
          product.style.display = 'block';
    })
  }


  function sam()
  {
      let show=document.getElementById("popup");
      show.classList.remove("popup2");
  }
  function removePopup()
  {
      let show=document.getElementById("popup");
      show.classList.add("popup2");
  }