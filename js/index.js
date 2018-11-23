const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (event) => {

  const nameInput = document.getElementById('name')
  const name = nameInput.value

  if(name != ''){
    database.push(name)
    swal({
      type: 'success',
      title: 'Exito',
      text: `${name} registrado`,
    })
    nameInput.value = ''
  }
})

database.on('value', loadData)

function loadData(data){
  const values = data.val()
  const keys = Object.keys(values)

  const registeredList = document.getElementById('registeredList')
  registeredList.innerHTML = ''

  keys.forEach((element) => {
    const li = document.createElement('li')
    li.classList.add('collection-item')
    const textLi = document.createTextNode(values[element])

    li.appendChild(textLi)

    registeredList.appendChild(li)
  })
}