interface estudiantes{
    nombre:string;
    edad:number;
    curso:string;
    direccion: Direccion;
    mostrarInfo:() => void
}

interface Direccion {
    calle: string;
    ciudad: string;
    pais: string;
}

const estudiante:estudiantes = {
    nombre: 'Juan',
    edad: 22,
    curso: 'Matemáticas',
    direccion: {
        calle: 'Av. Siempre Viva',
        ciudad: 'Bogotá',
        pais: 'Colombia'
    },
    mostrarInfo() {
        return `${this.nombre} estudia ${this.curso} en
${this.direccion.ciudad}`;
    }
};
console.log(estudiante.mostrarInfo());


//2

interface Productos{
    id:number;
    nombre:string;
    precio:number;
    stock:number;
    mostrarDetalle:() => void
}


const producto: Productos = {
id: 1,
nombre: 'Laptop',
precio: 3500,
stock: 10,
mostrarDetalle() {
return `${this.nombre} cuesta $${this.precio} y hay ${this.stock}
unidades disponibles`;
}
};
console.log(producto.mostrarDetalle());

//3

interface Peliculas{
    titulo: string;
    director:string;
    duracion:number;
    genero:string;
    reproducir:() => void
}


const pelicula:Peliculas = {
    titulo: 'Avengers: Endgame',
    director: 'Anthony y Joe Russo',
    duracion: 181,
    genero: 'Acción',
    reproducir() {
        return `Reproduciendo: ${this.titulo} - Dirigida por
${this.director}`;
    }
};

console.log(pelicula.reproducir());

//4 


interface vehiculos{
    marca: string;
    modelo: string;
    anio: number;
    encender:() => void;

}


const vehiculo:vehiculos = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2022,
    encender() {
        return `${this.marca} ${this.modelo} está encendido`;
    }   
};

console.log(vehiculo.encender());


//5

interface Usuarios{
    username: string;
    password: string;
    roles: string[];
    login:() => void;

}


const usuario:Usuarios = {
    username: 'admin01',
    password: '123456',
    roles: ['admin', 'editor'],
    login() {
        return `Usuario ${this.username} ha iniciado sesión con roles:
${this.roles.join(', ')}`;
    }
};

console.log(usuario.login());


//segundo punto


let myValue: number | string | true = 10;  //hay que declararlo
myValue=2 

console.log(myValue)
let myBoolean: Boolean = true; //hay que declararlo
myBoolean= true

console.log(myBoolean)
//let healthPoints: number = "150"; //no puede ser string porque se declara un número
let healthPoints: number = 150;
console.log(healthPoints)// aqui se usa para q no de error
//let otherMultipleDataType: number | boolean | "myTag" = "otraEtiqueta"; no se puede asignar "otraEtiqueta" porque solo se admite "myTag"



let myVar;
myVar = 123;
myVar = true;
myVar = "texto";
myVar = {};

console.log(myVar)

const myConstant: number=5;
console.log(myConstant) //hay que asignarle un valor a la constante, y posteriormente usar ese valor

//let inferedDataType = "Texto inicial"; se debe de especificar que es string, no asignarle así de rápido un valor
let inferedDataType:string;
//inferedDataType = 123;no se puede asignarle 123

inferedDataType="123"

console.log(inferedDataType)
//const isActive: boolean = 1; no se puede asignar un valor q no sea True o False
const isActive: boolean = true;
console.log(isActive) //para que no de error

//let mixed: number | string = true;  esta mal porque true solo es boolean
let mixed: number | boolean = true;
console.log(mixed)

//let while: string = "Hola";  while es un ciclo
let whil: string= "Hola";
console.log(whil)


//let myNumber: numer = 10; hay que escribir bien number xd
let myNumber: number = 10;
console.log(myNumber)

//let numeros: number[] = [1, 2, "3"]; la tupla para números tiene un string, todos deben ser números
let numeros: number[] = [1, 2, 3];
console.log(numeros)

//let tupla: [string, number] = ["Hola"]; // falta el segundo valor (de tipo number)
let tupla: [string, number] = ["Hola", 123]; // se corrige agregando un número en la posición 2
console.log(tupla);

//let otraTupla: [string, boolean] = [true, "Hola"]; // el orden y los tipos están al revés
let otraTupla: [string, boolean] = ["Hola", true]; // primero string y luego boolean, como se declaró
console.log(otraTupla);

//let texto = "Hola mundo"; texto = null; // TypeScript no deja asignar null si no se indica en el tipo
let texto: string | null = "Hola mundo"; // se aclara que puede ser string o null
texto = null;
console.log(texto);

//let color: "rojo" | "verde" | "azul" = "amarillo"; // "amarillo" no está permitido
let color: "rojo" | "verde" | "azul" = "rojo"; // debe ser uno de los valores literales permitidos
console.log(color);

//let valor: any = 10; valor.toUpperCase(); // si es number, no se puede usar toUpperCase
let valor: any = "10"; // al ser string, ya permite usar métodos de string
console.log(valor.toUpperCase());

//onst version: number = 1.0; // error de sintaxis, faltó la "c" de const
let version: number = 1.0;
version = 2.0; // correcto, se puede reasignar porque es let
console.log(version);

//let persona = { nombre: "Ana" }; persona.apellido = "Ruiz"; // da error porque "apellido" no existe en el tipo inferido
let persona: { nombre: string; apellido?: string } = { nombre: "Ana" };
persona.apellido = "Ruiz"; // se añade "apellido" como propiedad opcional
console.log(persona);

//let edad: number = undefined; // un number no puede ser undefined a menos que lo declares explícitamente
let edad: number | undefined = undefined; // ahora puede ser number o undefined
console.log(edad);
