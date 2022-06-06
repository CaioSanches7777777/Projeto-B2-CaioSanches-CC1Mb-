

var ul = document.getElementById("contatos")


async function load(){
  var url = "https://randomuser.me/api/?results=2"
  var response = await fetch(url)

  if(response.status == 200){
    var dados = await response.json()
    showContacts(dados)
  }
}

function showContacts(dados){
  var contatos = dados.results

  var i = 0 
  while(i < 2){
    
    var img = document.createElement("img")
    img.src = contatos[i].picture.medium
    
    var li = document.createElement("li")
    li.innerHTML = contatos[i].name.first

    li.appendChild(img)
    ul.appendChild(li)
    i++

  }
}
