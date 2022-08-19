var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","name");

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="search";
button.addEventListener("click",foo);
let gender=document.createElement("div");
gender.setAttribute("id","gender");
let probability=document.createElement("div");
probability.setAttribute("id","probability");
let count=document.createElement("div");
count.setAttribute("id","count");



div.append(input,button,gender,probability,count);
document.body.append(div);

async function foo(){
    let res=document.getElementById("name").value;
    console.log(res);
    var url=`https://api.genderize.io?name=${res}`;

    let result=await fetch(url);
    let result1=await result.json();
    console.log(result1);
    for(var i in result1){
        //console.log(i,result1[i]);
    //result1.forEach(obj => {
        //Object.entries(obj).forEach(([key,value])=>{
            //console.log(`${key} ${value}`);
       // });
        //console.log('________________')
    //});
    //var index=result1.length;
    //console.log(result1[i]);
    console.log(result1.gender);
    gender.innerHTML=`Gender:${result1["gender"]}`;
    console.log(result1.probability);
    probability.innerHTML=`Probability:${result1["probability"]}`;
    console.log(result1.count);
    count.innerHTML=`Count:${result1["count"]}`;
    
    
}
}
//foo();