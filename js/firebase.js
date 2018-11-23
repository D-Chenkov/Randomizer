const key = prompt('Contraseña: ')

const encryptedDB = 'U2FsdGVkX1+Ky44/aqNeawu1rCRusQ19Ei41G9QiTca+0pdSfx6M15XvmemPcBi5+Yd7v3TJ7vVTuUrfK3yNBQ=='
const bytes = CryptoJS.AES.decrypt(encryptedDB, key)
const plain = bytes.toString(CryptoJS.enc.Utf8)

const config = {
  databaseURL: plain,
};

firebase.initializeApp(config);

try
{
  firebase.database().ref('persona')
}
catch
{
  swal({
    type: 'error',
    title: 'Contraseña incorrecta',
    text: 'Vete de aqui hacker'
  })

  setTimeout(() => {
    location.reload()
  }, 3000)
}

const database = firebase.database().ref('persona')