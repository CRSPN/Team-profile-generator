function card(data){
   let cardHTML=""
   
 for (let index = 0; index <data.length; index++) {
   cardHTML = cardHTML +  `
   <div class="card">
 <div class="card-body">
 <ul class="list-group">
 <li class="list-group-item">id: ${data[index].id}</li>
 <li class="list-group-item">name: ${data[index].name}</li>
 <li class="list-group-item">email: ${data[index].email}</li>`
 if (data[index].getRole()==="Intern"){
  cardHTML=cardHTML + 
  `<li class="list-group-item">school: ${data[index].school}</li>`

 }

 if (data[index].getRole()==="Manager"){
  cardHTML=cardHTML + `<li class="list-group-item">number: ${data[index].officeNumber}</li>`

 }
 if (data[index].getRole()==="Engineer"){
   cardHTML=cardHTML + `<li class="list-group-item">github: ${data[index].github}</li>`
 }

cardHTML=cardHTML + `</ul>
 </div>
</div>
   `
   
 }
  

    return cardHTML
}

module.exports = card