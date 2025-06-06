/*
    Dada una cadena s, devolver la subcadena palindroma más larga en s.
    (la cadena palindroma es aquella que se lee igual al revez).

    Objetivo:
        Devolver la subcadena palindroma más larga en s.

    Datos de entrada:
        s <- cadena dada por el usuario.
        subStr <- subcadena palindroma actual.
        arrStr <- Registro de las subcadenas palindromas actuales.
    Dato de salida:
        palimStr <- subcadena palindroma más larga.

    Sub Algoritmo para hallar todas las cadenas:
        1.Pasar la cadena s.
        2.Inicializar length en 0.
        3.Inicializar subStr en ""
        4.Recorrer cada carácter de la cadena s
            Por cada iteración:
                1.Sumar 1 a length
                2.Recorrer cada carácter de la cadena s
                    Por cada iteración:
                        1.Verificar si la longitud de subStr es menor a length
                            Sí es menor:
                                1.Verificar si la posición del carácter actual es la última de la cadena s
                                    Sí es así:
                                        1.Asignar al valor de subStr el carácter actual.
                                        2.Continuar a la siguiente iteración.
                                    Sí no es así
                                        1.Concatenar el carácter actual a subStr.
                            Si no es menor:
                                1.Almacenar el valor de subStr en arrStr.
                                2.Asignar al valor de subStr el carácter actual.

    Algoritmo: 
        1.Se inicializa subStr y arrStr vacías.
        2.Se recorren todos los carácteres de s.
            Por cada iteración:
                1.Llamar la función encargada de evaluar la subcadena con la subcadena actual concatenada con el carácter de la iteración actual.
                    Si la función devuelve false

    
    Sub algoritmo para evaluar si la cadena actual es palindroma:
        1.Toma la subcadena pasada.
        2.Invierte el orden de la subcadena y lo almacena en otra variable.
        3.Se recorre la subcadena original.
            Por cada iteración se verifica que el carácter actual sea el mismo en ambas.
                Sí no es así:
                    retornar false.
        4.Retornar true.
*/

function findSubstrings(string) {
    let start = 0;
    let subStr = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            
        }
    }
}

let string = "pepe"
