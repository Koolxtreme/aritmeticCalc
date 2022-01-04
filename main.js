//Settings

const objTabla = document.getElementById('tablaValores');
const plusBtn = document.getElementById('plus');
const evaluar = document.getElementById('evaluar');
const respuesta = document.getElementById('respuesta');
var counter = 0;

//ArrowFunctions

const sumarArr = (a) =>
{
    let suma = 0;
    for(let element of a)
    {
        suma += element;  
    }
    return suma;
}
const ordenarArr = (a) =>
{
    let ordenada = a.sort((c, d) => c - d);
    return ordenada
}
const sacaMedias = (a) =>
{
    let mediaArit = sumarArr(a)/a.length;
    return mediaArit
}

//Functions

function crearCampo()
{
    let campo = document.createElement('input');
    campo.type = 'number';
    counter += 1;
    campo.name = `numero${counter}`;
    campo.id = `numero${counter}`;
    objTabla.appendChild(campo)
}
function tomarDatos()
{
    let tablaDatos = [];
    for(i = 0; i<=counter; i++)
    {
        let objNumero = document.getElementById(`numero${i}`);
        let valor = parseInt(objNumero.value);
        tablaDatos.push(valor);
    }
    calcularEstadisticas(tablaDatos)
}
function mediana(a)
{
    let tabla = ordenarArr(a);
    let mitad = tabla.length/2;

    if(tabla.length % 2 == 0)
    {
        let dato2 = mitad - 1;
        return (a[mitad] + a[dato2]) /2;
    }
    else
    {
        return a[Math.floor(mitad)];
    }
}
function moda(a)
{
    let objOrdenada = {};
    a.map(
        function (element)
        {
            if(objOrdenada[element])
            {
                objOrdenada[element] += 1;
            }
            else
            {
                objOrdenada[element] = 1;
            }
        }
    );
    let aordenada = Object.entries(objOrdenada).sort(
        function (elementa , elementb)
        {
            return elementa[1] - elementb[1]
        }
    );
    return aordenada[aordenada.length-1][0]
}
function calcularEstadisticas(a)
{
    let medianaEst = mediana(a);
    let mediaArit = sacaMedias(a);
    let modaArit = moda(a);  
    respuesta.innerHTML = `Los resultados con los datos proporcionados son: <br>
                           Promedio: ${mediaArit.toFixed(2)}<br>
                           Mediana: ${medianaEst}<br>
                           Moda: ${modaArit}`;
}

//Listeners

plusBtn.addEventListener('click', crearCampo);
evaluar.addEventListener('click', tomarDatos)