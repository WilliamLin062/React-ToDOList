export default function getUser(resource) {
  fetch(resource)
    .then(function (response) {
      return response.json()
    })
    .then(function (myJson) {
      console.log(myJson)
    })
}
