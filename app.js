const SI = 'si'
const NO = 'no'


let nombre ;
let servicio ; 
let precio ; 
let personas;
let continuar;
let total=0;
let linea;
let factura = 'Servicio    Personas    Precio    Subtotal \n';


nombre = prompt ('Bienvenidos a SPARELAX \n Ingrese su nombre:');
do{
    servicio = prompt('Ingrese que servicios desea solicitar : ');
    personas = +prompt ('Ingrese cantidad de presonas van a ser : ');
    precio = +prompt ('Ingrese precio sugerido : ');

    linea = `${servicio}            ${personas}           ${precio}                $${personas*precio}\n`;
    factura = factura + linea ; 
    total = total + personas * precio ;


    continuar = prompt(' Desea solicitar otro de nuestros servicios ? SI / NO ').toLowerCase( );

}while (continuar === SI);

factura = factura + `Total: $${total}`;
alert (factura);
alert (`Hasta la proxima ${nombre}`);







