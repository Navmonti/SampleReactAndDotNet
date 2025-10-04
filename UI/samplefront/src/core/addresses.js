
var apiUrl = "https://localhost:7131/api"
const addresses = {
    "GetAllUsers": `${apiUrl}/Users/GetAllUsers`,
    "GetUserById": (id) => `${apiUrl}/Users/GetUserById?id=${id}`,
    "GetAllUsersByFilter": (search) => `${apiUrl}/Users/GetAllUsersByFilter?name=${search.name}&phoneNumber=${search.phoneNumber}&address=${search.address}&fromAge=${search.fromAge}&toAge=${search.toAge}&fromCreateDate=${search.fromCreateDate}&toCreateDate=${search.toCreateDate}`,
    "AddUser": `${apiUrl}/Users/AddUser`,
    "UpdateUser": `${apiUrl}/Users/UpdateUser`,
    "DeleteUser": (id) => `${apiUrl}/Users/DeleteUser/id?id=${id}`
}

export default addresses;