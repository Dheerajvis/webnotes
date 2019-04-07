const icon = document.querySelectorAll("ul li p i");
const ulist = document.getElementById("ul");
const lists = document.querySelectorAll("ul li");
const delBtn = document.querySelectorAll("delete-btn");


icon.forEach((del,index) =>{
   del.addEventListener("click",function(){
     ulist.removeChild(lists[index]); 
    });
});

lists.forEach((list,index)=>{
    list.addEventListener("click",function(){
        const typeNote = document.querySelectorAll("type-note")
        // typeNote.contenteditable = true;
        console.log(typeNote.getParent);
    })
})