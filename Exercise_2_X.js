/*
    EJEMEPLO:
        Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
        Output: [8,9,9,9,0,0,0,1]

    PROBLEMA:
        Dada dos linked list representando dos enternos no negativos. Retornar
        La suma de ambas linked list en otra linked list.

        Si al final del bucle hay un passDigit aún, adjuntarlo al final de l3.

        Las dos linked list representan el entero almacenando cada digito en 
        orden inverso.
        123 -> [3, 2, 1]

        Ninguno de los digitos tendrá una base de 0 a excepción del 0 en sí mismo.
        Es decir: [3, 10, 1] NO es valido por que "10" tiene una base de 0.

    CONSIDERACIONES:
        -Primero sumar los digitos que hayan, luego verificar la base y en caso de ser necesario romper los digitos.

    ALGORITMO DE SUMA:
        DATOS DE ENTRADA:
            l1 <- linked list con los digitos del primer entero en orden inverso.
            l2 <- linked list con los digitos del segundo entero en orden inverso.
            number <- suma actual.
            passDigit <- número que pasa a la siguiente suma.
            length <- longitud de la lista más larga.
        DATOS DE SALIDA:
            l3 <- linked list con los digitos en orden inverso resultado de la suma.
        PROCESO:
            1.Se recibe l1 y l2
            2.Se inicializa l3 como un arreglo vacío.
            3.Se inicializa passDigit y number en 0.
            4.Mediante operación ternaria, verificar si la longitud de l1 es mayor a la de l2. Si es así, asignar a length el valor de l1, si no es así, asignar el valor de l2.
            5.Bucle basado en length.
                Mientras i sea menor a length:
                    1.Verificar si el indice actual 

    ALGORITMO DE BASES:
        DATO DE ENTRADA:
            number <- número entero.
        DATOS DE SALIDA:
            passDigit <- digito que pasa a la siguiente suma.
            stayDigit <- digito que permanece en la posición actual.
        PROCESO:
            1.Se recibe number.
            2.Se convierte number en una cadena, se separan los carácteres, se convierten en digitos y se almacena el resultado en number.
            3.Se asigna el digito de la izquierda a passDigit.
            4.Se asigna el digito de la derecha a stayDigit.
            5.Se retornan passDigit y stayDigit.
*/

function splitDigits(number) {
    number = number.toString().split("").map(Number)
    return number
}