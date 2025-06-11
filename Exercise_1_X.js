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
                    1.Recorrer la cadena s desde length hasta el último carácter de s.
                        Por cada iteración:
                            1.Sumar el carácter en el indice actual a subStr.
                            2.Almacenar el valor de subStr en arrStr.
                    2.Asignar a subStr una cadena vacía.
                    3.Sumar 1 a length
                        

    Algoritmo: 
        1.Se inicializa subStr y arrStr vacías.
        2.Se recorren todos los carácteres de s.
            Por cada iteración:
                1.Llamar la función encargada de evaluar la subcadena con la subcadena actual concatenada con el carácter de la iteración actual.
                    Si la función devuelve false

    
    Sub algoritmo para devolver las subcadenas palindromas:
        1.Toma la un arreglo como argumento.
        2.Incializa la variable isPalim en true.
        3.Recorrer cada elemento del arreglo.
            Por cada iteración:
                1.Crear una copia de la cadena invertida.
                2.Recorrer cada elemento elemento de la cadena invertida.
                    Por cada iteración:
                        1.Verificar si el carácter en el indice actual no es el mismo para la cadena invertida y la cadena original.
                            Sí es así:
                                1.Asignar false a isPalim.

                3.Verificar si la variable isPalim es true
                    Sí es así:
                        1.Almacenar la cadena actual en palimArr.
        4.Retornar palimArr.
*/

function findSubstrings(string) {
    let subStr = "";
    let arrStr = new Set();

    for (let i = 0; i < string.length; i++) {
        for (let j = i; j < string.length; j++) {
            subStr += string[j]
            if (evalPalindrome(subStr)) {
                arrStr.add(subStr)
            }
        }
        subStr = "";
    }

    return [...arrStr];
}

function evalPalindrome(paramstring) {
    const inverted = paramstring.split("").reverse().join("")
    if (inverted === paramstring) {
        return true
    } 

    return false
}

function findLargestPalindrome(array) {
    let length = 0
    let palim = ""
    array.forEach((palindrome) => {
        if(palindrome.length > length){
            length = palindrome.length
            palim = palindrome
        }     
    })

    return palim
}

let string = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"

console.log(findLargestPalindrome(findSubstrings(string)))