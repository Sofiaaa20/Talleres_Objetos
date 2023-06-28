/*1. Cree un objeto donde se almacenen los productos de un supermercado con su respectivo precio. Los productos son:
Papa, Arroz, Lentejas, Aceite. Luego imprima cada uno de los precios almacenados en el objeto anterior con su respectivo producto. */


let objeto = {"Papa":10, "Arroz":20, "Lentejas":30, "Aceite":40}

for ( clave in objeto) {
    console.log("valor", objeto[clave]);
}
