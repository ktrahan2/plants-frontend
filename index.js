console.log("Its working!")

//manipulate
const pageTitle = document.querySelector('h1')
console.log(pageTitle)
pageTitle.textContent = "Changed it up"
console.log("title", pageTitle)

//create
const newP = document.createElement('p')

//manipulate
newP.textContent = "This is some stuff about some stuff"
console.log(newP)

//append
document.body.append(newP)


const item2 = document.querySelectorAll(".item2")
console.log(item2)
