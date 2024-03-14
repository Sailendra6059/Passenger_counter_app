let count=0;
let prev=document.getElementById("prev_count")
let counter=document.getElementById("curr_count")
function increment(){
    count+=1
    counter.innerHTML=count;
}
function save(){
    prev.innerHTML+=(" "+count+" - ")
    counter.innerHTML=0;
    count=0
}
function reset(){
    prev.innerHTML="Previous Count:";
    counter.innerHTML=0;
}