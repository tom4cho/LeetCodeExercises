/*
    Dada una cadena s, devolver la subcadena palindroma más larga en s.
    (la cadena palindroma es aquella que se lee igual al revez).

    Objetivo:
        Devolver la subcadena palindroma más larga en s.

    Sub Algoritmo para hallar todas las cadenas:
        Datos de entrada:
            s <- cadena dada por el usuario.
            subStr <- subcadena palindroma actual.
            largestPalim <- El palindromo más largo almacenado actualmente.
        Dato de salida:
            palimStr <- subcadena palindroma más larga.
        Pasos:
            1.Tomar la cadena s como argumento.
            2.Inicializar subStr en ""
            3.Inicializar arrStr como un nuevo conjunto.
            4.Recorrer cada carácter de la cadena s
                Por cada iteración:
                        1.Recorrer la cadena s desde el indice actual del bucle externo hasta el último carácter de s.
                            Por cada iteración:
                                1.Sumar el carácter en el indice actual a subStr.
                                2.Verificar si 
                                2.Almacenar el valor de subStr en arrStr.
                        2.Asignar a subStr una cadena vacía.
                        3.Sumar 1 a length

    Sub algoritmo para verificar si una cadena es palindroma:
        1.Toma una cadena como argumento.
        2.Inicializa inverted con la cadena pasada como argumento con los carácteres invertidos.
        3.Verifica que el valor de inverted sea igual a la cadena original.
            Sí es así:
                1.Retornar True.
        4.Retornar False.
                        

    Algoritmo: 
        1.Se inicializa subStr y arrStr vacías.
        2.Se recorren todos los carácteres de s.
            Por cada iteración:
                1.Llamar la función encargada de evaluar la subcadena con la subcadena actual concatenada con el carácter de la iteración actual.
                    Si la función devuelve false

*/

/*
    1.Eliminar el conjunto arrStr.
    2.Hacer una verificación directa de la longitud del palindromo actual con la longitud previa almacenada.
    3.Retornar subStr.
*/
function findLargestPalindrome(string) {
    let subStr = "";
    let largestPalim = "";

    for (let i = 0; i < string.length; i++) {
        for (let j = i; j < string.length; j++) {
            subStr += string[j]
            if (evalPalindrome(subStr)) {
                if (subStr.length > largestPalim.length) {
                    largestPalim = subStr
                }
            }
        }
        subStr = "";
    }

    return largestPalim;
}

function evalPalindrome(paramstring) {
    for (let i = 0; i < paramstring.length / 2; i++) {
        if (paramstring[i] != paramstring[paramstring.length - 1 - i]) {
            return false
        }    
    }
    // const inverted = paramstring.split("").reverse().join("")
    // if (inverted === paramstring) {
    //     return true
    // } 

    return true
}

// function findLargestPalindrome(array) {
//     let length = 0
//     let palim = ""
//     array.forEach((palindrome) => {
//         if(palindrome.length > length){
//             length = palindrome.length
//             palim = palindrome
//         }     
//     })

//     return palim
// }

let string = "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"

console.log(findLargestPalindrome(string))



// MANACHER´S ALGORITHM
