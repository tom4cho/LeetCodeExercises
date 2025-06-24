/*
    PROBLEMA:
        Dada dos linked list representando dos enternos no negativos. Retornar
        La suma de ambas linked list en otra linked list.

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
        DATOS DE SALIDA:
            l3 <- linked list con los digitos en orden inverso resultado de la suma.
        PROCESO:
            1.Se recibe l1 y l2
            2.Se inicializa l3 como un arreglo vacío.

    ALGORITMO DE BASES:
        DATO DE ENTRADA:
            
        DATOS DE SALIDA:

*/