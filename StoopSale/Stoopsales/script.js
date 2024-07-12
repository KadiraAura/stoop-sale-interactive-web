//Prices of clothing
const prices = [57.32, 65.48, 72.15, 53.67, 68.94, 75.23, 54.89, 79.11, 69.87, 71.56, 87.32, 46.87];

//Unique IDs of Each Product
const productIDs = ["itemOne", "itemTwo", "itemThree", "itemFour", "itemFive", "itemSix", "itemSeven", "itemEight", "itemNine",  "itemTen",  "itemEleven",  "itemTwelve"];

//Clothing Sizes of Each Product: Numerical Values are for Shoes and String Sizes are for Other Pieces of Clothing
const clothingSizes = [5.5, "Medium", "Large", "Small", 7.5, "XXLarge", "XSmall", 6, 8.5, "Medium", "Large", 5];

//Array that contains the info about the product when its card is hovered over (Ex: Size and Price)
let productBackInfo = [];

//Array that contains the Original Info Of the Card to Reverse It Back to Normal
let originalInfo = [];
for (let j = 0; j < productIDs.length; j++) {
    originalInfo.push(document.getElementById(productIDs[j]).innerHTML);
    productBackInfo.push("Price: $" + prices[j] + "\n" + "Size: " + clothingSizes[j]);
}

function displayProductInfo (event, productIdx) {
    event.target.textContent = `${productBackInfo[productIdx]}`;
    let currElement = document.getElementById(productIDs[productIdx]);
    currElement.style.fontSize = "40px";
    currElement.style.fontFamily = "Helvetica,Arial,sans-serif";
    currElement.style.color = "#341C02";
    // currElement.style.flex = "0 1 auto";
    currElement.style.textAlign = "center";
    // currElement.style.justifyContent = "center";
    // currElement.style.alignItems = "center";
    // currElement.style.justifySelf = "center";
    // currElement.style.margin = "auto";
    // currElement.style.width = "50%";
    
}
function displayOriginalInfo (event, productIdx) {
    event.target.innerHTML = originalInfo[productIdx];
}


for (let i = 0; i < productIDs.length; i++) {
    document.getElementById(productIDs[i]).addEventListener("mouseenter", function (event) {
        displayProductInfo(event, i);
    });
    document.getElementById(productIDs[i]).addEventListener("mouseleave", function (event) {
        displayOriginalInfo(event, i);
    });  
}