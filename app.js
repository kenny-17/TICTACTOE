let boxes=document.querySelectorAll(".BOX")

let p1=true;

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const winner=()=>{
    for(let box of win){
        let pos1=boxes[box[0]].innerText;
        let pos2=boxes[box[1]].innerText;
        let pos3=boxes[box[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
        if (pos1===pos2 && pos2===pos3){
            alert(`${pos1} WON!!! `);
            rese();
            
        }
    }

}
};


    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (p1) {
            box.innerText = "X";
            p1=false;
            }
            else{box.innerText = "O";
            p1=true;}
            box.disabled=true;

            winner();
        })
        
    });

    let reset=document.querySelector(".reset")
   
    
 const rese =   ()=>{
        boxes.forEach((box)=>{
            box.innerText="";
            box.disabled=false;

        })
    }
    reset.addEventListener("click",rese);




