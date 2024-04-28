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

const usuarios = [
    {
        fullname: 'John Doe',
        age: 30,
        email: 'admin@admin.com',
        id: '1',
        active: true,
        password: 'admin',
        bornDate: 725846400000,
        location: 'La Luna',
        image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280',
        role: 'ADMIN_ROLE'
    },
    {
        fullname: 'Facundo Beldi',
        age: 30,
        email: 'facu@gmail.com',
        id: '2',
        active: true,
        password: 'user',
        bornDate: '1991-05-19',
        location: 'La Lucila',
        image: 'https://randomuser.me/api/portraits',
        role: 'user'
    },
];