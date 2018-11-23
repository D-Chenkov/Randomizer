database.on('value', loadData)

function loadData(data){

  const values = data.val()
  const keys = Object.keys(values)

  const registeredList = document.getElementById('registeredList')
  registeredList.innerHTML = ''

  window.i = 0
  keys.forEach((element) => {
    const li = document.createElement('li')
    li.setAttribute('id',window.i++)
    li.classList.add('collection-item')
    const textLi = document.createTextNode(values[element])

    li.appendChild(textLi)

    registeredList.appendChild(li)
  })
  console.log(keys)
}

const header = document.getElementById('header')
let cuenta = 0

header.addEventListener('click', (event) => {

  let string = ''
  if(cuenta == 0) string = 'Para que le das click al titulo usa el random'
  if(cuenta == 1) string = 'Deja de estar molestando'
  if(cuenta == 2) string = 'Una mas y vas a ver'

  if(cuenta > 2){
    const body = document.getElementsByTagName('body')[0]
    body.innerHTML = ''

    const imagen = document.createElement('img')
    imagen.classList.add('mapache')
    imagen.setAttribute('src', './img/mapachongo.png')

    body.appendChild(imagen)

    let song = new Audio('./js/time.mp3')
    song.play()
  }else{

    swal(string)
    cuenta += 1    
  }
})



const randomBtn = document.getElementById('randomBtn')

randomBtn.addEventListener('click', (event) => {

  let choice = Math.floor(Math.random() * window.i)
  let theone = document.getElementById(choice)

  while(!theone){
    choice = Math.floor(Math.random() * window.i)
    theone = document.getElementById(choice)
  }

  swal(theone.innerHTML)
  theone.remove()
  console.log(theone)
})