const table = document.querySelector('table')
const showModal = document.querySelector('.add_container button')
const addUserModal = document.querySelector('.add_user')
const addBtn = document.querySelector('form')
const modalInputs = document.querySelectorAll('form .inputs input')

// add user inputs
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const statusVal = document.querySelector('#status')
const userName = document.querySelector('#username')
const createdDate = document.querySelector('#createdDate')
const registrationNumber = document.querySelector('#registrationNumber')

//
let users = [
    {
        id: "123456789",
        createdDate: "2021-01-06T00:00:00.000Z",
        status: "En validation",
        firstName: "Mohamed",
        lastName: "Taha",
        userName: "mtaha",
        registrationNumber: "2584",
    },
    {
        id: "987654321",
        createdDate: "2021-07-25T00:00:00.000Z",
        status: "Validé",
        firstName: "Hamid",
        lastName: "Orrich",
        userName: "horrich",
        registrationNumber: "1594",
    },
    {
        id: "852963741",
        createdDate: "2021-09-15T00:00:00.000Z",
        status: "Rejeté",
        firstName: "Rachid",
        lastName: "Mahidi",
        userName: "rmahidi",
        registrationNumber: "3576",
    }

]
//display the modal
showModal.addEventListener('click', () => {
    addUserModal.style.display = 'block'
})

//hide modal on bg click
addUserModal.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'add_user') {
        addUserModal.style.display = 'none'
    }
})
//clear inputs 
function clearInputs() {
    modalInputs.forEach(input => input.value = '')
}
//add user
//submit form
addBtn.addEventListener('submit', (e) => {
    e.preventDefault()

    const newUser = {
        id: Math.floor(Math.random() * 100000),
        createdDate: createdDate.value,
        status: statusVal.value,
        firstName: firstName.value,
        lastName: lastName.value,
        userName: userName.value,
        registrationNumber: registrationNumber.value
    }

    users.push(newUser)
    addUserModal.style.display = 'none'
    displayCurrentRow(users.length - 1)

    clearInputs()

})

// create  table tr td

function displayTable() {

    for (let i = 0; i < users.length; i++) {
        displayCurrentRow(i)
    }
}
// delete selected table row
function deleteUser(rowNumber, deleteBtn) {
     users.pop(rowNumber)
     table.removeChild(deleteBtn.parentElement.parentElement)
}
//display a row
function displayCurrentRow(i) {

    const tr = document.createElement('tr')

    // add id
    const id = document.createElement('td')
    id.textContent = users[i].id
    // add createdDate
    const createdDate = document.createElement('td')
    const onlyDate = `${new Date(users[i].createdDate).getDate()}/${new Date(users[i].createdDate).getMonth() + 1}/${new Date(users[i].createdDate).getFullYear()}`
    createdDate.textContent = onlyDate
    // add status
    const status = document.createElement('td')
    const span = document.createElement('span')
    status.classList.add('status')
    span.textContent = users[i].status
    status.appendChild(span)

    //apply status style
    if (users[i].status == 'En validation') {
        span.classList.add('on-validation')
    }
    else if (users[i].status == 'Rejeté') {
        span.classList.add('rejected')
    }
    else if (users[i].status == 'Validé') {
        span.classList.add('valide')
    }

    // add firstName
    const firstName = document.createElement('td')
    firstName.textContent = users[i].firstName
    // add lastName
    const lastName = document.createElement('td')
    lastName.textContent = users[i].lastName
    // add userName
    const userName = document.createElement('td')
    userName.textContent = users[i].userName
    // add registrationNumber
    const registrationNumber = document.createElement('td')
    registrationNumber.textContent = users[i].registrationNumber

    //add delete icon
    let rowNumber = 0
    const action = document.createElement('td')
    const icon = document.createElement('img')
    icon.src = './delete.svg'
    icon.setAttribute('data-rowNumber', rowNumber)
    icon.addEventListener('click', () => deleteUser(rowNumber, icon))
    action.appendChild(icon)

    tr.appendChild(id)
    tr.appendChild(createdDate)
    tr.appendChild(status)
    tr.appendChild(firstName)
    tr.appendChild(lastName)
    tr.appendChild(userName)
    tr.appendChild(registrationNumber)
    tr.appendChild(action)
    table.appendChild(tr)

    //increase row index
    rowNumber++
  
}
displayTable()

 
  