import "dotenv/config.js"
import "../../config/dataBase.js"
import User from "../User.js"

const usuarios = [ 
    { 
        name: "Juan", 
        lastName: "Pérez", 
        Country: "Colombia", 
        mail: "juan.perez@example.com", 
        password: "password123", 
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        online: false, 
        typeUser: 3 
    }, 
    { 
        name: "María", 
        lastName: "Gómez", 
        Country: "México", 
        mail: "maria.gomez@example.com", 
        password: "password123", 
        photo: "https://randomuser.me/api/portraits/women/2.jpg", 
        online: false, 
        typeUser: 3 
    }, 
    { 
        name: "Carlos", 
        lastName: "Rodríguez", 
        Country: "Argentina", 
        mail: "carlos.rodriguez@example.com", 
        password: "password123", 
        photo: "https://randomuser.me/api/portraits/men/3.jpg", 
        online: false, 
        typeUser: 3 
    }, 
    { 
        name: "Ana", 
        lastName: "Martínez", 
        Country: "España", 
        mail: "ana.martinez@example.com", 
        password: "password123", 
        photo: "https://randomuser.me/api/portraits/women/4.jpg", 
        online: false, 
        typeUser: 3 
    }, 
    { 
        name: "Luis", 
        lastName: "Fernández", 
        Country: "Chile", 
        mail: "luis.fernandez@example.com", 
        password: "password123", 
        photo: "https://randomuser.me/api/portraits/men/5.jpg", 
        online: false, 
        typeUser: 3
    }
]

User.insertMany(usuarios)