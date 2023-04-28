//initialize the count button to 0
let count = 0;
//listen FOR CLICKS on the count increment btn
//increment the count variable when button is clicked
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
function increment(){
    count += 1;
    countEl.textContent = count;
    console.log('The button is clicked!')
}
//CHange the count-el on html to reflect the count 
function save(){
    let savecount = count+ " - ";
    saveEl.textContent += savecount;
    count = 0;
    countEl.textContent = count;
    
}