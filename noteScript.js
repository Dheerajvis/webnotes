const icon = document.querySelectorAll("ul li p i");
const delBtn = document.querySelectorAll("delete-btn");
const lists = document.querySelectorAll("ul li");
const ulist = document.getElementById("ul");

icon.forEach((del,index) =>{
   del.addEventListener("click",function deleteNote(){
    ulist.removeChild(lists[index]);
     });
});

lists.forEach((edit,index) =>{
   edit.addEventListener("click",function editNote(){
        
     });
});
