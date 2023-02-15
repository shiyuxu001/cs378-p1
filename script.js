
//fetch the button from the DOM
const totalItems = 4;
var subtotal = 0;

//list: order name, price, num orders
const price_dict = {"salmon":["Grilled salmon", 10, 0], "hotdog":["Hotdog Special", 8, 0], "pizza":["Cafe pizza", 12, 0], "breakfast":["Breakfasst meal", 14, 0]};

var subtotal = 0;
//attach and event when the user clicks it
// listeners
var posList = document.getElementsByClassName("pos");
var negList = document.getElementsByClassName("neg");
document.getElementById("clear-btn").addEventListener("click", clearAll)

for (var i = 0; i < posList.length; i++) {
    posList[i].addEventListener('click', buttonChange, false);
}   

for (var i = 0; i < negList.length; i++) {
    negList[i].addEventListener('click', buttonChange, false);
}
// for(i in posList){
//     i.addEventListener("click", buttonChange)
// }

// let negList = document.getElementsByClassName("neg")
// for(i in posList){
//     i.addEventListener("click", buttonChange)
// }

// document.getElementsByClassName("neg").addEventListener("click", buttonChange);




//create the function that will be called when the button is pressed
function buttonChange()
{
    console.log("incrementing num");
	//this shows a popup window
    let curVal = this.parentElement.children[2].value;
    if( this.className == "pos"){
        curVal++;
        subtotal+= price_dict[this.parentElement.id][1];
        price_dict[this.parentElement.id][2]++;
        document.getElementById("subtotal").value = subtotal
    }else if(this.className == 'neg'){
        if(curVal > 0){
            subtotal-= price_dict[this.parentElement.id][1];
            curVal--;
            document.getElementById("subtotal").value = subtotal
            price_dict[this.parentElement.id][2]--;
        }
        
    }
    this.parentElement.children[2].value = curVal;
}
var orderBtn = document.getElementById("order-btn");
orderBtn.addEventListener("click", placeOrder);


//check each input field, multiply that w parent price
function placeOrder(){
    console.log('order placed');
    if(subtotal == 0){
        alert("No items in cart");
    }else{
        alert("Order placed!\n" + checkOrder())
    }
}

function checkOrder(){
    str=""
    for(const [key,value] of Object.entries(price_dict)){
        if(value[2]!=0){
            str+=value[2]
            str+=" "+value[0];
        }
    }
    return str;
}

function clearAll(){
    for(const [key,value] of Object.entries(price_dict)){
        value[2]=0;
        document.getElementById(key).children[2].value=0;
    }
    subtotal=0;
    document.getElementById("subtotal").value = 0;

}


