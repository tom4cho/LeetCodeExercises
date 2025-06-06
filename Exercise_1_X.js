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

    Algoritmo: 
        1.Se inicializa subStr y arrStr vacías.
        2.Se recorren todos los carácteres de s.
            Por cada iteración:
                1.Verificar si el carácter actual

    
    Sub algoritmo para evaluar si la cadena actual es palindroma:
        1.Toma la subcadena pasada.
        2.Invierte el orden de la subcadena y lo almacena en otra variable.
        3.Se recorre la subcadena original.
            Por cada iteración se verifica que el carácter actual sea el mismo en ambas.
                Sí no es así:
                    retornar false.
        4.Retornar true.
*/