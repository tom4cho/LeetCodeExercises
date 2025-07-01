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
        -Resolver que como se realizará la suma con dos arreglos de distinta longitud.

        -Resolver como se realizará la suma al final en caso de que la suma sea mayor a 9.


    ALGORITMO DE SUMA:
        DATOS DE ENTRADA:
            l1 <- linked list con los digitos del primer entero en orden inverso.
            l2 <- linked list con los digitos del segundo entero en orden inverso.
            number <- suma actual.
            passDigit <- número que pasa a la siguiente suma.
            digits <- arreglo de digitos.
            length <- longitud de la lista más larga.
        DATOS DE SALIDA:
            l3 <- linked list con los digitos en orden inverso resultado de la suma.
        PROCESO:
            1.Se recibe l1 y l2
            2.Se inicializa l3 como un arreglo vacío.
            3.Se inicializa passDigit, number en 0.
            4.Mediante operación ternaria, verificar si la longitud de l1 es mayor a la de l2. Si es así, asignar a length el valor de l1, si no es así, asignar el valor de l2.
            5.Bucle basado en length.
                Mientras i sea menor a length:
                    1.Verificar si hay un valor en el indice actual en l1.
                        Si no es así, empujar valor 0.
                    2.Verificar si hay un valor en el indice actual en l2.
                        Si no es así, empujar valor 0.
                    3.Sumar el valor de l1, l2 y passDigit y almacenar en number.
                    4.Verificar si la suma es mayor a 9.
                        Si es así:
                            Verificar si es la última iteración del bucle.
                                Sí es así: 
                                    1.Llamar al algoritmo de bases con number como argumento y asignar su retorno a digits.
                                    2.El indice 1 se empuja a l3.
                                    3.El indice 0 se empuja a l3.
                                Sí no es así: 
                                    1.Llamar al algoritmo de bases con number como argumento y asignar su retorno a digits.
                                    2.El indice 1 se empuja a l3.
                                    3.El indice 0 se asigna a passDigit.
                        Si no es así:
                            1.Empujar el digito actual a l3. 
                6.Devolver l3.

    ALGORITMO DE BASES:
        DATO DE ENTRADA:
            number <- número entero.
        DATOS DE SALIDA:
            number <- arreglo con los digitos del número.
        PROCESO:
            1.Se recibe number.
            2.Se convierte number en una cadena, se separan los carácteres, se convierten en digitos y se almacena el resultado en number.
            3.Se devuelve number.
*/

var addTwoNumbers = function (l1, l2) {
    function listNodeToArray(node) {
        const arr = [];
        while (node) {
            arr.push(node.val);
            node = node.next;
        }
        return arr;
    }

    function arrayToList(arr) {
        let dummy = new ListNode(0);
        let current = dummy;
        for (let num of arr) {
            current.next = new ListNode(num);
            current = current.next;
        }
        return dummy.next;
    }

    function splitDigits(number) {
        number = number.toString().split("").map(Number)
        return number
    }


    l1 = listNodeToArray(l1)
    l2 = listNodeToArray(l2)

    let l3 = []
    let digits = []
    let passDigit = 0
    let number = 0
    let length = l1.length > l2.length ? l1.length : l2.length

    for (let i = 0; i < length; i++) {
        if (l1[i] === undefined) {
            l1.push(0)
        }
        if (l2[i] === undefined) {
            l2.push(0)
        }

        number = passDigit + l1[i] + l2[i]

        if (number > 9) {
            if (i === length - 1) {
                digits = splitDigits(number)
                l3.push(digits[1])
                l3.push(digits[0])
            } else {
                digits = splitDigits(number)
                l3.push(digits[1])
                passDigit = digits[0]
            }
        } else {
            passDigit = 0
            l3.push(number)
        }
    }    

    return arrayToList(l3)
};

console.log(addTwoNumbers([8,3,2], [9,2,1]))