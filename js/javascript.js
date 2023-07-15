let note = document.querySelector(".note");
let listThema = document.querySelector(".thems");
console.log(listThema)


//delete note
note.addEventListener("click",function(e){
   if(e.target.className == "delete"){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li)
   }
   console.log(e.target)
})

//update note
note.addEventListener("click",function(e){
   if(e.target.className == "update"){
      let value = prompt("update:","");
      e.target.parentElement.innerHTML = `<span class="disp-block">${value}</span> <a href="#" class="delete">delete</a> <a href="#" class="update">update</a>`;
   }
   console.log(e.target)
})

//add note
let form = document.forms[0];
form.addEventListener('submit',function(e){
   e.preventDefault();
   let value = form.querySelector("input[type=text]").value;
   const li = `<li><span class="disp-block">${value}</span> <a href="#" class="delete">delete</a> <a href="#" class="update">update</a></li> `;
   note.innerHTML += li;
   value = 0;
})

// search
form.addEventListener("click",function(e){
   let word = note.querySelectorAll("li .disp-block");
   let value = form.querySelector("input[type=text]").value;
   if(e.target.className == "search"){
      Array.from(word).forEach(function(element){
         if(element.textContent.toLowerCase().indexOf(value.toLowerCase()) != -1){
            element.parentElement.style.border = "3px solid gold"; 
         } else {
            element.parentElement.style.border = "none";
         }
      
      })
   }
})

// thems
listThema.addEventListener("click", function(e){
   let body = listThema.parentElement.parentElement;
   let li = note.querySelectorAll("li")
   if(e.target.textContent == "Основной"){
      body.style.background = "#66CC99"
   }
   if(e.target.textContent == "Темная"){
      Array.from(li).forEach(element => {
         element.classList.add("dark")
      });
      body.style.background = "#0F0F0F"
   }
   if(e.target.textContent == "Светлая"){
      Array.from(li).forEach(element => {
         element.classList.add("white");
         element.style.background = "#0F0F0F";
         element.style.color = "#fff";
      });
      body.style.background = "#fff"
   }

})

let arrowSpan = listThema.previousSibling.previousSibling;

arrowSpan.addEventListener("click",function(e){
   listThema.classList.toggle("active")
   arrowSpan.classList.toggle("arrow-up");
})