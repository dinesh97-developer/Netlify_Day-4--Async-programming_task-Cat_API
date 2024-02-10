var parentdiv = document.createElement("div");
parentdiv.className = "main";

var label = document.createElement("label");
label.setAttribute("for","quantity");
label.innerHTML = "Note: Number (between 1 and 100)"

var dataElement = document.createElement("input");
dataElement.setAttribute("type","number");
dataElement.setAttribute("min","1");
dataElement.setAttribute("max","100");
dataElement.id = "Date_spl";

var break_lb = document.createElement("br");

var button = document.createElement("button");
button.innerHTML ="Click me";
button.className = "btn btn-info";
button.addEventListener("click",foo);

document.body.append(parentdiv);
parentdiv.append(dataElement,button,break_lb,label);

var display_ele = document.createElement("div");
display_ele.className = "container";

var row = document.createElement("div");
row.className ="row";


function foo(){
    var input = document.getElementById("Date_spl").value;
    //console.log(input);
    if(input.length===0){
        alert("The date was not entered. Please enter the number between 1 to 100");
    }
    else{
        console.log(input);
        get_data(input);
    }
}
//async function start
async function get_data(input){
var res =await fetch(`https://api.thecatapi.com/v1/images/search?limit=${input}&breed_ids=beng&api_key=live_u8DFg3L77QOFBceTBw4VjPtBLvXB2jrsook3b1RjBpboK2CMUfR0JyhqEm1ZWVdo`);
var final_res = await res.json();
console.log(final_res);
    for(var i=0;i<final_res.length;i++)
    {
        console.log(`
        Image ${final_res[i].url}`);

        var col =document.createElement("div");
        col.className = "col-md-4"

        col.innerHTML +=`
        <b><p>Temperament: ${final_res[i].breeds[0].temperament}</p><br><img src="${final_res[i].url}" class="rounded" alt="..."><br><br>
        `
        document.body.append(display_ele);
        display_ele.append(row);
        row.append(col);
    }
    //document.body.append(display_ele);

}