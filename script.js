const table = document.querySelector('table')

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

// create  table tr td

for (let i = 0; i < users.length; i++) {
    const tr = document.createElement('tr')

    // add id
    const id = document.createElement('td')
    id.textContent = users[i].id
    // add id
    const createdDate = document.createElement('td')
    const onlyDate = `${new Date(users[i].createdDate).getDate()}/${new Date(users[i].createdDate).getMonth() +1 }/${new Date(users[i].createdDate).getFullYear()}`
    createdDate.textContent = onlyDate
    // add id
    const status = document.createElement('td')
    status.textContent = users[i].status
    // add id
    const firstName = document.createElement('td')
    firstName.textContent = users[i].firstName
    // add id
    const lastName = document.createElement('td')
    lastName.textContent = users[i].lastName
    // add id
    const userName = document.createElement('td')
    userName.textContent = users[i].userName
    // add id
    const registrationNumber = document.createElement('td')
    registrationNumber.textContent = users[i].registrationNumber
    
    tr.appendChild(id)
    tr.appendChild(createdDate)
    tr.appendChild(status)
    tr.appendChild(firstName)
    tr.appendChild(lastName)
    tr.appendChild(userName)
    tr.appendChild(registrationNumber)
    table.appendChild(tr)


}