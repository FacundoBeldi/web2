/* PRACTICA PARA PARCIAL 1

console.log('Hello, world!');

const armario = {
    nombre: 'Armario',
    marca: 'Ikea',
    altura: 300,
    ancho: 200,
    color: 'blanco'
}

const silla = {
    nombre: 'silla',
    marca: 'Platinum',
    altura: 100,
    ancho: 50,
    color: 'blanco'
}

const televisor = {
    nombre: 'televisor',
    marca: 'Samsung',
    altura: 80,
    ancho: 80,
    color: 'blanco'
}

console.log(armario);
console.log(silla.marca);
console.log(televisor.color);

document.write('<br>');
document.write(silla.marca);

function saludo(){
    const userName = prompt('¿Cómo te llamas?');
    alert('Hola, ' + userName);
    console.log('Funcion terminada');
}

let alumnos=[];

function agregarAlumno(){
    //obtengo de un prompt el nombre del alumno
    let nuevoAlumno = prompt('Ingresa el nombre del alumno');
    //lo pongo en mayuscula
    nuevoAlumno = nuevoAlumno.toUpperCase();
    //lo agrego al array de alumnos
    alumnos.push(nuevoAlumno);
    //muestro el array de alumnos con un log
    console.log(alumnos);
    pintarAlumnos()
}

//WINDOWS + . Para poner emojis

function pintarAlumnos(){
    console.log(alumnos); 
    document.getElementById('pintar ').innerText = alumnos;
} */


/*Chequeo de contraseñas
document.getElementById('formulario-id').addEventListener('submit', function(event) {
    var password1 = document.getElementById('exampleInputPassword1').value;
    var password2 = document.getElementById('exampleInputPassword2').value;

    if (password1 !== password2) {
      alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
      event.preventDefault(); // Evita que el formulario se envíe si las contraseñas no coinciden
    }
});
*/

const users = [
    {
        fullname: 'John Doe',
        age: 30,
        email: 'admin@admin.com',
        id: '1',
        active: true,
        password: 'admin',
        bornDate: 725846400000,
        location: 'La Lucila',
        image: 'https://randomuser.me/api/portraits/men/68.jpg',
        role: 'ADMIN_ROLE'
    },
    {
        fullname: 'Facundo Beldi',
        age: 24,
        email: 'facu@gmail.com',
        id: '2',
        active: true,
        password: 'user',
        bornDate: '1999-06-15',
        location: 'Escobar',
        image: 'https://randomuser.me/api/portraits/men/69.jpg',
        role: 'user'
    },
    {
        fullname: 'Juan Tasin',
        age: 24,
        email: 'juan@gmail.com',
        id: '3',
        active: true,
        password: 'user',
        bornDate: '1999-05-19',
        location: 'Garin',
        image: 'https://randomuser.me/api/portraits/men/70.jpg',
        role: 'user'
    },
    {
        fullname: 'Renzo Colombo',
        age: 28,
        email: 'renzo@gmail.com',
        id: '4',
        active: true,
        password: 'user',
        bornDate: '1996-05-19',
        location: 'Maschwitz',
        image: 'https://randomuser.me/api/portraits/men/71.jpg',
        role: 'user'
    },
    {
        fullname: 'Ricardo Beldi',
        age: 61,
        email: 'ricardo@gmail.com',
        id: '5',
        active: false,
        password: 'user',
        bornDate: '1963-08-24',
        location: 'San Martin',
        image: 'https://randomuser.me/api/portraits/men/72.jpg',
        role: 'user'
    },
    {
        fullname: 'Santiago Beldi',
        age: 28,
        email: 'santi@gmail.com',
        id: '6',
        active: true,
        password: 'user',
        bornDate: '1996-07-24',
        location: 'Maschwitz',
        image: 'https://randomuser.me/api/portraits/men/73.jpg',
        role: 'user'
    },
    {
        fullname: 'Tomas Martinez',
        age: 24,
        email: 'tomi@gmail.com',
        id: '7',
        active: true,
        password: 'user',
        bornDate: '1999-02-19',
        location: 'Escobar',
        image: 'https://randomuser.me/api/portraits/men/74.jpg',
        role: 'user'
    },
    {
        fullname: 'Julian Caceres',
        age: 29,
        email: 'juli@gmail.com',
        id: '8',
        active: true,
        password: 'user',
        bornDate: '1995-03-01',
        location: 'Pilar',
        image: 'https://randomuser.me/api/portraits/men/75.jpg',
        role: 'user'
    },
];


/*
usuarios.forEach((users) => {
    // console.log(prod, indice)
    console.log(usuario['fullname'])

    let numeracion;

    if (indice < 10) {
        numeracion = "0" + indice;
    } else {
        numeracion = indice;
    }

    document.write(`${numeracion} - ${prod.nombre} al precio $${prod.precio} <br>`)
})
*/

//MAPEO --> A diferencia del for, que recorres el array, acá hacer un array nuevo

const usuariosFinal = users.map((users) => {
    const ususariosModificado = {
        fullname: users.fullname,
        email: users.email,
    }
    return ususariosModificado
})

console.log(usuariosFinal)

//Filter

const usuariosFiltrados = users.filter((users) => {
    if (users.active) {
        return true
    }
    else {
        return false
    }
})

console.log(usuariosFiltrados)

//Find
//Una iteración que cumple 1 solo. Es decir, va a mostrar el primer Adidas, no todos.
const usuarioEncontrado = users.find((user) => {
    if (user.id === '1') {
        return true
    } else {
        return false
    }
})

console.log(usuarioEncontrado)

//Rellenar la tabla

const tableHTML = document.getElementById("table-container");

const tableBodyHTML = document.getElementById("table-body");

function renderUsers(arrayUsers) {

    tableBodyHTML.innerHTML = '';

    arrayUsers.forEach((user) => {
        tableBodyHTML.innerHTML += `
    <tr>
        <td class="user-image">
            <img src="${user.image}" alt ="${user.fullname} avatar">
        </td>
        <td class="user-name"> ${user.fullname}</td>
        <td class="user-mail"> ${user.email}</td>
        <td class="user-city"> ${user.location}</td>
        <td class="user-age"> ${user.age}</td>
        <td class="user-active"> ${user.active}</td>
        <td class="cont-btn">
        <button class="btn btn-danger btn-sm" onclick="deleteUser('${user.id}')">
            <i class="fa-solid fa-trash"></i>
        </button>
        <button class="btn btn-primary btn-sm" data-edit="${user.id}">
            <i class="fa-solid fa-pencil"></i>
        </button>
        </td>
    </tr>
    `
    });
    updateEditButtons();
}

//Busqueda de usuarios

function inputSearch(evt) {
    console.log(evt.target.value)

    const search = evt.target.value.toLowerCase();

    const filteredUsers = users.filter((usr) => {
        if (usr.fullname.toLocaleLowerCase().includes(search)) {
            return true;
        }
        else {
            return false;
        }
    })
    renderUsers(filteredUsers);
}

//Ordenamiento

function sortDesc() {
    users.sort((a, b) => {
        if (a.fullname.toLocaleLowerCase() < b.fullname.toLocaleLowerCase()) {
            return 1;
        }
        if (a.fullname.toLocaleLowerCase() > b.fullname.toLocaleLowerCase()) {
            return -1;
        }
        else {
            return 0;
        }
    })

    renderUsers(users);
}

function sortAsc() {
    users.sort((a, b) => {
        if (a.fullname.toLocaleLowerCase() > b.fullname.toLocaleLowerCase()) {
            return 1;
        }
        if (a.fullname.toLocaleLowerCase() < b.fullname.toLocaleLowerCase()) {
            return -1;
        }
        else {
            return 0;
        }
    })

    renderUsers(users);
}

//Eliminar Usuario

function deleteUser(idUser) {
    const indice = users.findIndex((usr) => { //obtengo el indice
        if (usr.id === idUser) { //me fijo si el indice coincide con el id del usuario
            return true; //verdadero si coincide
        }
    })
    if (indice === -1) { //si no coincide, error
        SwalFire({ title: "Error al borrar", text: "No se pudo encontrar el usuario", icon: "error" })
        return;
    }

    users.splice(indice, 1) //elimina

    renderUsers(users) //vuelvo a pintar la tabla
}

//Editar usuarios

let isEditing;
let userButtonsEdit;
const totalHTML = document.getElementById("total");
const userFormHTML = document.querySelector("#user-form"); //obtener el formulario html
const btnSubmitHTML = userFormHTML.querySelector('button[type="submit"]'); 
const formContainerHTML = document.querySelector(".user-form-container");

function updateEditButtons(){
    userButtonsEdit = document.querySelectorAll('button[data-edit]'); //obtener todos los botones de editar
    userButtonsEdit.forEach((btn) => {
        btn.addEventListener('click', (evt) => {
            console.log("entre");
            const id = evt.currentTarget.dataset.edit;
        })
    })
}

renderUsers(users);