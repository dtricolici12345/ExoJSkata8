//----------------------------------------------------------------------------------------------//
// EXERCICE 1
// Crée une fonction qui prend deux paramètres (a et b) et retourne la somme multipliée des deux paramètres.
// Exemple : a = 2, b = 3 => 2 * 3 = 6 => 6 * 2 = 12

// Pour rappel pour écrire une fonction en JS on utilise la syntaxe suivante :

// const nomDeMaFonction = (paramètre) => {
//   // Code de ma fonction
// }
// console.log(nomDeMaFonction(On remplace le paramètre par ce qu'on désire)) // 

// CODE ICI
const sommult = (a, b) => {
    return (a + b) * 2;

}
let res = sommult(2, 3);
console.log(res);


//----------------------------------------------------------------------------------------------//
// EXERCICE 2


// Crée une fonction qui prend en paramètre un tableau et qui retourne le premier élément du tableau.
// Exemple : [1, 2, 3] => 1
// Pour rappel pour accéder à un élément d'un tableau on utilise la méthode [laplaceDuNombreDeL'élément] :
// const monTableau = [1, 2, 3]
// console.log(monTableau[0]) // 1

// CODE ICI
const element = [1, 2, 3];
const firstElementofArray = (array) => {
    if (array.length > 0) {
        return array[0];
    } else {
        return null;
    }
};
const res = firstElementofArray(element);
console.log(res);


//MON Exercice




//Crée une fonction qui prend en paramètre un tableau et qui retourne le dernier élément du tableau.
const lastElementOfArray = (array) => {
    if (array.length > 0) {
        return array[array.length - 1];
    } else {
        return null;
    }
};

const myArray = [1, 2, 3, 4, 5];
const result = lastElementOfArray(myArray);
console.log(result);






//----------------------------------------------------------------------------------------------//
// EXERCICE 3

// Crée une fonction qui prend en paramètre un tableau et qui doit supprimer le dernier élément du tableau.
// Exemple : [1, 2, 3] => [1, 2]
// Pour rappel pour supprimer le dernier élément d'un tableau on utilise la méthode pop():
// const monTableau = [1, 2, 3]
// monTableau.pop()
// console.log(monTableau) // [1, 2]


// CODE ICI
const element = [1, 2, 3];
const removeElementofArray = (array) => {
    if (array.length > 0) {
        array.pop();
        return array;
    } else {
        return null;
    }
};

const res = removeElementofArray(element);
console.log(res);




//MON Exercice SHIFT
//Crée une fonction qui prend en paramètre un tableau et qui doit supprimer le premier élément du tableau.
const element = [1, 2, 3];
const removeElementofArray = (array) => {
    if (array.length > 0) {
        array.shift();
        return array;
    } else {
        return null;
    }
};

const res = removeElementofArray(element);
console.log(res);
 
//MON EXERCISE SPLICE
//Crée une fonction qui prend en paramètre un tableau et qui doit supprimer le troisieme élément du tableau.
const removeThirdElementFromArray = (array) => {
    if (array.length >= 3) {
        array.splice(2, 1);// un element a partir de 2index
        return array;
    } else {
        return null;
    }
};

const myArray = [1, 2, 3, 4, 5];
const res = removeThirdElementFromArray(myArray);
console.log(res);
//----------------------------------------------------------------------------------------------//
// EXERCICE 4

// Crée une fonction qui prend en paramètre un tableau comprennant des nombres et qui doit retourner la somme de tous les nombres du tableau.
// Exemple : [1, 2, 3] => 6
// Pour rappel pour parcourir un tableau on utilise la méthode for :
// const monTableau = [1, 2, 3]
// for (let i = 0; i < monTableau.length; i++) {
//   console.log(monTableau[i]) // 1, 2, 3
// }


// CODE ICI
const sumOfArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};


const myArray = [1, 2, 3];
const result = sumOfArray(myArray);
console.log(result);




//----------------------------------------------------------------------------------------------//

// EXERCICE 5
//Crée une fonction qui prend en paramètre une string et qui doit retourner la string inversée.
// Exemple : "Hello" => "olleH"
// Pour cette exercice on va utiliser la méthode split() qui permet de transformer une string en tableau. Et la méthode reverse() qui permet d'inverser un tableau : 
// const maString = "Hello"
// const monTableau = maString.split("")
// console.log(monTableau) // ["H", "e", "l", "l", "o"]
// const monTableauInverse = monTableau.reverse()
// console.log(monTableauInverse) // ["o", "l", "l", "e", "H"]
//Maintenant que la string est inversée il faut la remettre en string avec la méthode join().

// CODE ICI
const text = 'Hello';

const textReverse = (text) => {
    if (text.length > 0) {
        const textArray = text.split("");
        const reversedArray = textArray.reverse();
        const reversedText = reversedArray.join("");
        return reversedText;
    } else {
        return null;
    }
};

const res = textReverse(text);
console.log(res);
//----------------------------------------------------------------------------------------------//

// EXERCICE 6
// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le plus grand nombre du tableau.
// Exemple : [1, 2, 3] => 3
// Pour cette exercice on va utiliser la méthode Math.max() qui permet de retourner le plus grand nombre d'un tableau :
// const monTableau = [1, 2, 3]
// console.log(Math.max(...monTableau)) // 3

// CODE ICI
const myArray = [1, 2, 3];

const maxElementOfArray = (array) => {
    if (array.length > 0) {
        return Math.max(...array);
    } else {
        return null;
    }
};

const res = maxElementOfArray(myArray);
console.log(res);
//----------------------------------------------------------------------------------------------//

// EXERCICE 7
// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le plus petit nombre du tableau.
// Exemple : [1, 2, 3] => 1
// Pour cette exercice on va utiliser la méthode Math.min() qui permet de retourner le plus petit nombre d'un tableau :
// const monTableau = [1, 2, 3]
// console.log(Math.min(...monTableau)) // 1

// CODE ICI
const myArray = [1, 2, 3];

const mixElementOfArray = (array) => {
    if (array.length > 0) {
        return Math.min(...array);
    } else {
        return null;
    }
};

const res = mixElementOfArray(myArray);
console.log(res);




//MON EXERCISE DIFFERENCE Entre MIN ET MAX
//Crée une fonction qui prend en paramètre un tableau de nombres et qui retourne la différence entre le plus grand et le plus petit nombre du tableau.

const differenceBetweenMaxAndMin = (array) => {
    if (array.length === 0) {
        return "Nothing";
    }

    const min = Math.min(...array);
    const max = Math.max(...array);

    return max - min;
};

const myNumbers = [5, 2, 8, 1, 7];
const result = differenceBetweenMaxAndMin(myNumbers);
console.log(result);
//----------------------------------------------------------------------------------------------//

// EXERCICE 8

// Crée une fonction qui prend en paramètre une string et qui doit retourner la string sans les voyelles.
// Exemple : "Hello" => "Hll"
// Pour cette exercice on va utiliser la méthode split() qui permet de transformer une string en tableau. Et la méthode filter() qui permet de filtrer un tableau :
// const maString = "Hello"
// const monTableau = maString.split("")
// console.log(monTableau) // ["H", "e", "l", "l", "o"]
// const monTableauFiltre = monTableau.filter((element) => {
//   return element !== "e" && element !== "o"
// })

// CODE ICI
const text = "Hello";

const textSansVoyelles = (text) => {
    if (text.length > 0) {
        const textArray = text.split("");
        const textArrayFilter = textArray.filter((element) => {
            return element !== "e" && element !== "o";
        });
        return textArrayFilter.join("");
    } else {
        return null;
    }
};

const res = textSansVoyelles(text);
console.log(res);


//MON EXERCISE 
//Crée une fonction qui prend en paramètre une chaîne de caractères et retourne la chaîne de caractères sans les consonnes.
const text = "Hello, my name is Daniela";

const textSansConsonnes = (text) => {
    if (text.length > 0) {
        const textArray = text.split("");
        const textFilter = textArray.filter((element) => {
            return element !== "H" && element !== "l" && element !== "m" && element !== "n" && element !== "s" && element !== "D";
        });
        return textFilter.join("");
    } else {
        return null;
    }
};

const res = textSansConsonnes(text);
console.log(res);

//2eme version
const removeConsonants = (inputString) => {
    if (typeof inputString === 'string') {
        // Utilise une expression régulière pour enlever les consonnes
        const stringWithoutConsonants = inputString.replace(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, '');

        return stringWithoutConsonants;
    } else {
        return null; // Retourne null si l'entrée n'est pas une chaîne de caractères
    }
};

// Exemple d'utilisation
const input = "Hello, my name is Daniela";
const result = removeConsonants(input);
console.log(result);


//--------------------------------------------------------------------------//

// EXERCICE 9

// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le tableau trié par ordre croissant.
// Exemple : [1, 3, 2] => [1, 2, 3]
// Pour cette exercice on va utiliser la méthode sort() qui permet de trier un tableau :
// const monTableau = [1, 3, 2]
// console.log(monTableau.sort()) // [1, 2, 3]

// CODE ICI
const myArray = [1, 2, 3];

const myArraySort = (array) => {
    if (array.length > 0) {
        return array.sort();
    } else {
        return null;
    }
};

const res = myArraySort(myArray);
console.log(res);


//MON EXERCISE SORT
//Crée une fonction qui prend en paramètre un tableau de nombres et qui retourne le tableau trié par ordre décroissant.
const trierParOrdreDecroissant = (array) => {
    return array.sort((a, b) => b - a);//Pour les éléments 5 et 1, b - a donne 5 - 1, soit 4. Comme le résultat est positif, 5 est considéré comme avant 1.
};

const tableauDeNombres = [5, 2, 8, 1, 9];
const tableauTrie = trierParOrdreDecroissant(tableauDeNombres);
console.log(tableauTrie);

//MON EXERCISE SORT
//Crée une fonction qui prend en paramètre un tableau de nombres et qui retourne le tableau trié par ordre croissant.

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];


const sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers);


//----------------------------------------------------------------------------------------------//

// EXERCICE 10

// Crée une fonction qui prend en paramètre une string et qui renvoie un tableau avec toutes les rotations possibles de cette string.
// Exemple : "Hello" => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
// Pour cette exercice on va utiliser une boucle for et la méthode push() qui permet d'ajouter un élément à un tableau :
// const maString = "Hello"
// const monTableau = []
// for (let i = 0; i < maString.length; i++) {
//   const maStringRotate = maString.substring(i) + maString.substring(0, i)
//   monTableau.push(maStringRotate)
// }
// console.log(monTableau) // ["Hello", "elloH", "lloHe", "loHel", "oHell"]

// CODE ICI
const myString = "Hello";

const generateRotations = (text) => {
    const rotationsArray = [];

    for (let i = 0; i < text.length; i++) {
        const rotatedText = text.substring(i) + text.substring(0, i);
        rotationsArray.push(rotatedText);
    }

    return rotationsArray;
};

const res = generateRotations(myString);
console.log(res);
//----------------------------------------------------------------------------------------------//

// EXERCICE 11

// Crée une fonction qui prend en paramètre un tableau et qui doit ajouter le nombre 1 à chaque élément du tableau.
// Exemple : [1, 2, 3] => [2, 3, 4]
// Pour cette exercice on va utiliser la méthode map() qui permet de parcourir un tableau :
// const monTableau = [1, 2, 3]
// const monTableauAddition = monTableau.map((element) => {
//   return element + 1
// })

// CODE ICI
const myArray = [1, 2, 3];

const myArrayAdd = (array) => {
    const newArray = array.map((element) => {
        return element + 1;
    });

    return newArray;
};

const res = myArrayAdd(myArray);
console.log(res);
//----------------------------------------------------------------------------------------------//

// EXERCICE 12

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec la longueur de chaque string.
// Exemple : ["Hello", "World"] => [5, 5]
// Pour cette exercice on va utiliser la méthode map() qui permet de parcourir un tableau :
// const monTableau = ["Hello", "World"]
// const monTableauLongueur = monTableau.map((element) => {
//   return element.length
// })

// CODE ICI
const myStringArray = ["Hello", "World"];
const myStringArrayLong = (array) => {
    const newArray = array.map((element) => {
        return element.length

    });
    return newArray;
};
const res = myStringArrayLong(myStringArray);
console.log(res);
//----------------------------------------------------------------------------------------------//

// EXERCICE 13

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les premières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["H", "W"]
// Pour cette exercice on va utiliser la méthode map() qui permet de parcourir un tableau.
// Et la méthode charAt() qui permet de récupérer un caractère à une position précise :
// const monTableau = ["Hello", "World"]
// const monTableauPremiereLettre = monTableau.map((element) => {
//   return element.charAt(0)
// })

// CODE ICI
const myStringArray = ["Hello", "World"];
const myStringArrayFirstLetter = (array) => {
    const newArray = array.map((element) => {
        return element.charAt(0);
    });
return newArray;
};
const res = myStringArrayFirstLetter(myStringArray);
console.log(res);

//----------------------------------------------------------------------------------------------//

// EXERCICE 14

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les dernières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["o", "d"]
// Indice regarde l'exercice 13, c'est exactement la même chose sauf qu'il faut récupérer la dernière lettre et non la première.


// CODE ICI
const myStringArray = ["Hello", "World"];
const myStringArrayFirstLetter = (array) => {
    const newArray = array.map((element) => {
        return element.charAt(element.length - 1);
    });
return newArray;
};
const res = myStringArrayFirstLetter(myStringArray);
console.log(res);
//----------------------------------------------------------------------------------------------//

// EXERCICE 15

// Crée une fonction qui prend en paramètre un tableau de string et qui doit renvoyer tout les string qui ont une longueur de 5 caractères ou plus.
// Exemple : ["Hello", "World","Test", "Salut", "Yo"] => ["Hello", "World", "Salut"]
// Pour cette exercice on va utiliser la méthode filter() qui permet de filtrer un tableau, hésitez pas à regarder l'exercice 8 pour voir comment ça fonctionne. Sauf qu'ici on va filtrer en fonction de la longueur de la string. Incice : la méthode length() permet de récupérer la longueur d'une string.

// CODE ICI
const myStringArray = ["Hello", "World", "Test", "Salut", "Yo"];
const myStringArray5Plus = (array) => {
    const textArrayFilter = array.filter((element) => {
        return element.length >= 5;
    });
    return textArrayFilter;
};
const res = myStringArray5Plus(myStringArray);
console.log(res);


//----------------------------------------------------------------------------------------------//

// EXERCICE 16

// Crée une fonction qui prend en paramètre un tableau de nombre et qui doit retourner la somme de tout les nombres du tableau.
// Exemple : [1, 2, 3] => 6
// Pour cette exercice on va utiliser la méthode reduce() qui permet de réduire un tableau en un seul élément :
// const monTableau = [1, 2, 3]
// const somme = monTableau.reduce((accumulateur, element) => {
//   return accumulateur + element
// }, 0)

// CODE ICI
const myArray = [1, 2, 3];
const myArraySum = (array) => {
    const somme = array.reduce((accumulateur, element) => {
        return accumulateur + element;
    }, 0);

    return somme; 
};

const res = myArraySum(myArray);
console.log(res);

//----------------------------------------------------------------------------------------------//

// EXERCICE 17

// Crée une fonction qui prend en deux paramètres qui sont deux tableaux de string et qui doit retourner un tableau avec tout les éléments des deux tableaux.
// Exemple : ["Hello", "World"] et ["Test", "Salut"] => ["Hello", "World", "Test", "Salut"]
// Pour cette exercice on va utiliser la méthode concat() qui permet de concaténer deux tableaux :
// const monTableau1 = ["Hello", "World"]
// const monTableau2 = ["Test", "Salut"]
// const monTableauConcat = monTableau1.concat(monTableau2)
// console.log(monTableauConcat) // ["Hello", "World", "Test", "Salut"]

// CODE ICI
const myArrayString1 = ["Hello", "World"];
const myArrayString2 = ["Test", "Salut"];

const concatTwoArrayString = (array1, array2) => {
  const newArray = array1.concat(array2);
  return newArray;
};

const res = concatTwoArrayString(myArrayString1, myArrayString2);
console.log(res);
//----------------------------------------------------------------------------------------------//

// EXERCICE 18

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner toutes les string qui ont la lettre "e".
// Exemple : ["Poulet", "Chat", "Chien", "Cheval"] => ["Poulet", "Chien", "Cheval"]
// Pour cette exercice on va utiliser la méthode filter() qui permet de filtrer un tableau, hésitez pas à regarder l'exercice 8 pour voir comment ça fonctionne. Sauf qu'ici on va filtrer en fonction de la présence de la lettre "e". Indice : la méthode includes() permet de savoir si une string contient une lettre ou un mot.

// CODE ICI
const myArrayString = ["Poulet", "Chat", "Chien", "Cheval"];

const filterStrings = (array) => {
  const newArray = array.filter((element) => {
    return element.includes("e");
  });
  return newArray;
};

const res = filterStrings(myArrayString);
console.log(res);



//----------------------------------------------------------------------------------------------//

// EXERCICE 19

// Crée une fonction qui prend en paramètre un tableau de nombre et qui doit retourner tout les nombres qui sont pairs par ordre croissant.
// Exemple : [ 2, 9, 6, 5, 6] => [2, 6, 6]
// Indice : il y a plusieurs façon de faire, soit avec un for, soit avec la méthode filter() une fois ça fait utilise la méthode sort() qui permet de trier un tableau.

// CODE ICI
const filterAndSortEvenNumbers = (array) => {

    const evenNumbers = array.filter((number) => number % 2 === 0);
    const sortedEvenNumbers = evenNumbers.sort((a, b) => a - b);
  
    return sortedEvenNumbers;
  };
  

  const myArray = [2, 9, 6, 5, 6];
  const result = filterAndSortEvenNumbers(myArray);
  console.log(result); /
//----------------------------------------------------------------------------------------------//

// EXERCICE 20

// Vous avez réussi à passer le premier niveau des algos, bravo ! Maintenant on va passer au niveau 2.

// Crée une fonction qui renvoie la longueur du ou des mots les plus courts dans une phrase.
// La chaîne ne sera jamais vide et vous n'avez pas besoin de tenir compte des différents types de données.
// Exemple :
// findShort("Prachett is the best author in the world ") // 2
// findShort("The quick brown fox jumps over the lazy dog") // 3

// Indice : la méthode split() permet de transformer une string en tableau en fonction d'un séparateur :
// const maString = "Hello World"
// const monTableau = maString.split(" ")
// console.log(monTableau) // ["Hello", "World"]
// Indice 2 :  Oublie pas de boucler sur le tableau pour récupérer la longueur de chaque mot. Que soit avec un for ou avec la méthode map().
// Indice 3 : Pour récupérer le mot le plus court tu dois voir la longueur de chaque mot, quel méthode permet de récupérer la longueur d'une string ?
// Indice 4 : Pour récupérer le mot le plus court tu dois le trier, quel méthode permet de trier un tableau ? Si tu as utilisé la méthode map() pour récupérer la longueur de chaque mot, tu peux utiliser la méthode sort() directement sur le tableau que tu as récupéré avec la méthode map().
// Indice 5 : Le .sort() trie les nombres en fonction de leur valeur unicode, pour trier des nombres il faut utiliser une fonction de comparaison :
// const monTableau = [1, 2, 3, 4, 5]
// const monTableauTri = monTableau.sort((a, b) => {
//   return a - b
// })
// Indice 6 : Pour récupérer le premier élément d'un tableau tu peux utiliser la notation crochet : monTableau[0]





// CODE ICI

const myString = "Prachett is the best author in the world";

const findShort = (text) => {
    // Разделение строки на массив слов
    const myArraySplit = text.split(" ");

    // Использование метода map для создания массива длин каждого слова
    const wordLengths = myArraySplit.map(word => word.length);

    // Сортировка массива длин в порядке возрастания
    const sortedWordLengths = wordLengths.sort((a, b) => a - b);

    // Получение первой (самой короткой) длины слова
    const shortestWordLength = sortedWordLengths[0];

    return shortestWordLength;
};

// Вызов функции и вывод результата
const res = findShort(myString);
console.log(res); // Renvoie 2








//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//

// const findShort = (phrase) => {
//   let tableau = phrase.split(" ");
//     let tableauLongueur = tableau.map((element) => {
//         return element.length
//         }
//     )
//     let tableauTri = tableauLongueur.sort((a, b) => {
//         return a - b
//     }
//     )
//     return tableauTri[0]
// }

// console.log(findShort("Prachett is the best author in the world"))


//----------------------------------------------------------------------------------------------//

// EXERCICE 21

//Écrivez une fonction `anagram` qui prend deux chaînes et renvoie un booléen indiquant si les chaînes sont des anagrammes l'une de l'autre. Deux chaînes sont des anagrammes l'une de l'autre si elles contiennent les caractères, quel que soit l'ordre des caractères. Par exemple, "listen" et "silent" sont des anagrammes l'une de l'autre

// Indice : Oubliez pas de transformer les string en tableau pour pouvoir les trier et les comparer. Utilisez la méthode split() pour transformer une string en tableau et la méthode sort() pour trier un tableau. Puis comparez les deux tableaux avec la méthode join() qui permet de transformer un tableau en string.


// CODE ICI

const anagram = (str1, str2) => {
    // Преобразование строк в массивы и их сортировка
    const arr1 = str1.split('').sort();
    const arr2 = str2.split('').sort();

    // Сравнение отсортированных массивов как строк
    return arr1.join('') === arr2.join('');
};


const result = anagram("listen", "silent");
console.log(result);  // Renvoie true





//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//


// const anagram = (string1, string2) => {
//     let tableau1 = string1.split("")
//     let tableau2 = string2.split("")
//     let tableau1Tri = tableau1.sort()
//     let tableau2Tri = tableau2.sort()
//     if (tableau1Tri.join("") === tableau2Tri.join("")) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(anagram("listen", "silent"))


//----------------------------------------------------------------------------------------------//

// EXERCICE 22

//Ecrivez une fonction qui enlève les doubles lettres d'une chaîne donnée. Par exemple, "google" deviendrait "gogle"
// Par exemple :
// removeDoubleLetters("google") // "gogle"
// removeDoubleLetters("Hello World!") // "Helo World!"
//Indice : Afin de supprimer les doubles lettres, vous devez parcourir la chaîne et comparer chaque caractère avec le caractère suivant. Si les deux caractères sont identiques, vous devez supprimer le deuxième caractère. Donc pour pouvoir comporaer chaque caractère avec le suivant, vous devez transformer la string en tableau.
// Indice 2 : Pour supprimer un élément d'un tableau vous pouvez utiliser la méthode splice() combiné à une boucle ou la méthode filter() qui permet de filtrer un tableau en fonction d'une condition.


// CODE ICI

const mystring = "Mappete";
const removeDoubleLetters = (text) => {
    const myArray = text.split("");
    let myArrayFilter = myArray.filter((element, index) => {
        return element !== myArray[index + 1];
    });
    const res = myArrayFilter.join(""); 
    return res;
};


const result = removeDoubleLetters(mystring);
console.log(result);


//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//

// const removeDoubleLetters = (string) => {
//     let tableau = string.split("")
//     let tableauFiltre = tableau.filter((element, index) => {
//         return element !== tableau[index + 1]
//     })
//     return tableauFiltre.join("")
// }


// console.log(removeDoubleLetters("google"))

// const removeDoubleLetters = (string) => {
//     let tableau = string.split("")
//     for (let i = 0; i < tableau.length; i++) {
//         if (tableau[i] === tableau[i + 1]) {
//             tableau.splice(i, 1)
//         }
//     }
//     return tableau.join("")
// }
// console.log(removeDoubleLetters("google"))

//----------------------------------------------------------------------------------------------//

// EXERCICE 23

//Écrivez une fonction qui prend un tableau de 10 entiers (entre 0 et 9) et renvoie une chaîne de caractères sous la forme d'un numéro de téléphone.
// Exemple :
// createPhoneNumber([1,2,3,4,5,6,7,8,9,0]) // "(123) 456-7890"
// Indice : Utilisez la méthode slice() pour découper le tableau en plusieurs morceaux. Puis utilisez la méthode join() pour transformer un tableau en string.

// CODE ICI


const createPhoneNumber = (numbers) => {
    // Проверка, имеет ли массив правильную длину
    if (numbers.length !== 10) {
        return "Il faut avoir 10 chiffres";
    }

    // Разделение массива на части
    const firstPart = numbers.slice(0, 3).join('');
    const secondPart = numbers.slice(3, 6).join('');
    const thirdPart = numbers.slice(6).join('');

    // Формирование телефонного номера
    const phoneNumber = `(${firstPart}) ${secondPart}-${thirdPart}`;
    
    return phoneNumber;
};


const phoneNumber = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(phoneNumber); // "(123) 456-7890"


//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//

// const createPhoneNumber = (tableau) => {
//     let tableau1 = tableau.slice(0, 3)
//     let tableau2 = tableau.slice(3, 6)
//     let tableau3 = tableau.slice(6, 10)
//     return `(${tableau1.join("")}) ${tableau2.join("")}-${tableau3.join("")}`
// }

// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

//----------------------------------------------------------------------------------------------//





// EXERCICE 24

//Écrivez une fonction nommée "findMissingLetter" qui prend en paramètre un tableau d'une série de lettres (en tant que chaînes de caractères) et qui renvoie la lettre manquante de la série. Si aucune lettre n'est manquante, la fonction doit renvoyer "undefined".
// Exemple :
// findMissingLetter(["a","b","c","d","f"]) // "e"
// findMissingLetter(["O","Q","R","S"]) // "P"
// Indice : Oubliez pas de boucler et vous pouvez utiliser la méthode charCodeAt() pour récupérer le code unicode d'un caractère.
// Indice 2 : Vous pouvez utiliser la méthode fromCharCode() pour récupérer un caractère à partir de son code unicode.  Exemple : String.fromCharCode(65) renvoie "A". Mais attention à refaire la boucle dans l'autre sens pour pouvoir comparer les codes unicode des caractères du tableau avec les codes unicode des caractères manquants.
// Indice 3 : Il y a plus cas comparer les codes unicode des caractères du tableau avec les codes unicode des caractères manquants pour trouver le caractère manquant avec une condition if. Et retourner le caractère manquant avec un return et la méthode fromCharCode().

// CODE ICI


function findMissingLetter(array) {
    const charCodes = array.map(char => char.charCodeAt(0));
    for (let i = 1; i < charCodes.length; i++) {
        if (charCodes[i] - charCodes[i - 1] > 1) {
            return String.fromCharCode(charCodes[i - 1] + 1);
        }
    }

    return undefined;
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"])); // "e"
console.log(findMissingLetter(["O", "Q", "R", "S"]));      // "P"




//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
// const findMissingLetter = (tableau) => {
//     let tableauUnicode = tableau.map((element) => {
//         return element.charCodeAt()
//     })
//     for (let i = 0; i < tableauUnicode.length; i++) {
//         if (tableauUnicode[i] !== tableauUnicode[i + 1] - 1) {
//             return String.fromCharCode(tableauUnicode[i] + 1)
//         }
//     }
// }

// console.log(findMissingLetter(["a","b","c","d","f"]))

//----------------------------------------------------------------------------------------------//


// EXERCICE 25

//Écrivez une fonction qui prend un tableau de string et renvoie un tableau de string triées par ordre alphabétique.
// Exemple :
// sortString(["Banana", "Orange", "Apple", "Mango"]) // ["Apple", "Banana", "Mango", "Orange"]
// sortString(["lait", "beurre", "fromage", "yaourt"]) // ["beurre", "fromage", "lait", "yaourt"]

//Indice : Vous pouvez utiliser la méthode sort() pour trier un tableau. Mais attention, par défaut la méthode sort() trie les éléments d'un tableau par ordre alphabétique en se basant sur les codes unicode des caractères. Donc si vous utilisez la méthode sort() sur un tableau de string, les éléments seront triés par ordre alphabétique en se basant sur les codes unicode des caractères. Par exemple, "Banana" sera considéré comme plus petit que "Orange" car le code unicode de "B" est plus petit que le code unicode de "O". Pour trier un tableau de string par ordre alphabétique en se basant sur l'ordre alphabétique des lettres, vous devez utiliser une fonction de comparaison en paramètre de la méthode sort().
// Indice 2 : Pour trier un tableau de string par ordre alphabétique en se basant sur l'ordre alphabétique des lettres, vous devez utiliser une fonction de comparaison en paramètre de la méthode sort(). Cette fonction de comparaison prend deux paramètres (a et b) et renvoie un nombre négatif si a est plus petit que b, un nombre positif si a est plus grand que b et 0 si a est égal à b.

// CODE ICI






//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//
//--------------------------------------SOLUTIONS-----------------------------------------------//
//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//





// const sortString = (tableau) => {
//     return tableau.sort((a, b) => {
//         if (a.toLowerCase() < b.toLowerCase()) {
//             return -1
//         }
//         if (a.toLowerCase() > b.toLowerCase()) {
//             return 1
//         }
//         return 0
//     })
// }

// console.log(sortString(["Banana", "Orange", "Apple", "Mango"]))



//MON EXERCISE FACTORIAL
//Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de leurs factorielles.
function calculateFactorials(array) {
    function factorial(x) {
        if (x === 0 || x === 1) {
            return 1;
        } else {
            return x * factorial(x - 1);
        }
    }

    return array.map(factorial);
}

const numbers = [1, 2, 3, 4, 5];
const factorials = calculateFactorials(numbers);
console.log(factorials);


//MON EXERCISE FACTORIAL
//Crée une fonction qui prend un nombre et renvoie la somme des factorielles de tous les nombres de 1 à ce nombre. 

function calculateSumOfFactorials(n) {
    function factorial(x) {
        if (x === 0 || x === 1) {
            return 1;
        } else {
            return x * factorial(x - 1);
        }
    }

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += factorial(i);
    }

    return sum;
}

const result = calculateSumOfFactorials(5);
console.log(result); //153
//----------------------------------------------------------------------------------------------//

// EXERCICE 26
// Écris une fonction qui étant donné deux angles d'un triangle renvoie la mesure du troisième angle.
// ( Rappel : la somme des trois angles d'un triangle est toujours égale à 180 degrés )
// Exemple :
// otherAngle(30, 60) // 90
// otherAngle(60, 60) // 60
// Indice : Pour trouver le troisième angle, tu dois soustraire la somme des deux angles donnés à 180 degrés.

// CODE ICI
const treeAngle = (a, b) => {
    sumAngle = 180;
    return sumAngle - a - b;
};
const res1 = treeAngle(30, 60) ;
const res2 = treeAngle(60, 60);
 console.log(res1, res2);
//----------------------------------------------------------------------------------------------//

// EXERCICE 27
// Écris une fonction qui peut déterminer si une année est une année bissextile ou non. Elle doit renvoyer true si c'est le cas, sinon false.
// ( Rappel : Une année bissextile est une année contenant 366 jours au lieu de 365. Elle est donc plus longue qu'une année normale. Une année bissextile a lieu tous les 4 ans. )
// Exemple :
// isLeapYear(2020) // true
// isLeapYear(2021) // false
// Indice : Pour savoir ça tu peux utiliser le modulo. Si une année est divisible par 4 et que le reste de la division est égal à 0, alors c'est une année bissextile.

// CODE ICI
const isLeapYear = (year) => {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(isLeapYear(2020)); // true
  console.log(isLeapYear(2021)); // false

//----------------------------------------------------------------------------------------------//

// EXERCICE 28

// Voici un example de tableau d'animaux. Écris une fonction qui à partir d'un tableau similaire reçu en paramètre renvoie un nouveau tableau qui lui même contient deux sous-tableaux. Le premier sous-tableau doit contenir les animaux domestiques et le second les animaux sauvages. Les animaux domestiques doivent être triés par ordre alphabétique et les animaux sauvages par ordre alphabétique inversé.

const animals = [
  { name: "Panda", type: "Wild" },
  { name: "Cat", type: "Domestic" },
  { name: "Turtle", type: "Domestic" },
  { name: "Dog", type: "Domestic" },
  { name: "Crocodile", type: "Wild" },
  { name: "Eagle", type: "Wild" },
  { name: "Donkey", type: "Domestic" },
  { name: "Pigeon", type: "Domestic" },
  { name: "Monkey", type: "Wild" }
]

// Exemple :
// sortAnimals(animals) // [["Cat", "Dog", "Donkey", "Pigeon", "Turtle"], ["Eagle", "Monkey", "Panda", "Crocodile"]]
// Indice : Oubliez pas que tu peux créer des variables qui contiennent des tableaux vides et que tu peux ajouter des éléments à un tableau avec la méthode push(). Mais vu que tu dois analyser le tableau d'animaux pour le trier, tu dois utiliser une boucle et faire des conditions if pour savoir si l'animal est domestique ou sauvage. Et tu dois trier les animaux domestiques par ordre alphabétique et les animaux sauvages par ordre alphabétique inversé. Pour trier un tableau par ordre alphabétique tu peux utiliser la méthode sort(). Pour trier un tableau par ordre alphabétique inversé tu peux utiliser la méthode reverse().

// CODE ICI
const sortAnimals = (animals) => {
    let tableauDomestic = [];
    let tableauWild = [];
  
    for (let i = 0; i < animals.length; i++) {
      if (animals[i].type === "Domestic") {
        tableauDomestic.push(animals[i].name);
      } else {
        tableauWild.push(animals[i].name);
      }
    }
  
    tableauDomestic.sort();
    tableauWild.sort().reverse();
  
    const tableauFinal = [tableauDomestic, tableauWild];
    return tableauFinal;
  };
  
  const res = sortAnimals(animals);
  console.log(res);



//-----------------------------------------------SOLUTIONS-----------------------------------------------//

// const sortAnimals = (animals) => {
//     let tableauDomestic = []
//     let tableauWild = []
//     let tableauFinal = []
//     for (let i = 0; i < animals.length; i++) {
//         if (animals[i].type === "Domestic") {
//         tableauDomestic.push(animals[i].name)
//         } else {
//         tableauWild.push(animals[i].name)
//         }
//     }
//     tableauDomestic.sort()
//     tableauWild.sort()
//     tableauWild.reverse()
//     tableauFinal.push(tableauDomestic)
//     tableauFinal.push(tableauWild)
//     return tableauFinal
//     }

// console.log(sortAnimals(animals))

//----------------------------------------------------------------------------------------------//




// EXERCICE 29

// Un employé de théatre souhaite obtenir la liste de tous les sièges de sa salle principal. Dans la salle les places sont réparties comme suit : 
// - Il y a 26 colonnes de sièges, numérotées de "1" à "26".
// - Chaque colonne contient 100 sièges, numérotés de "1" à "100".

// Complète la function theatreSieges() qui doit renvoyer un tableau où chaque sous-tableau répertorie les positions des siègnes dans une rangée. 
// Exemple  du résultat attendu :
// [
    // ["1-1", "1-2", "1-3", ..., "1-99", "1-100"],
    // ["2-1", "2-2", "2-3", ..., "2-99", "2-100"],
    // ["3-1", "3-2", "3-3", ..., "3-99", "3-100"],
    // ...
    // ["26-1", "26-2", "26-3", ..., "26-99", "26-100"]
// ]

// Indice : Tu dois utiliser deux boucles imbriquées pour créer les sous-tableaux. La première boucle doit parcourir les colonnes et la seconde boucle doit parcourir les sièges de chaque colonne. 

// CODE ICI



















//-----------------------------------------------SOLUTIONS-----------------------------------------------//

// const theatreSieges = () => {
//     let tableau = []
//     for (let i = 1; i <= 26; i++) {
//         let tableau2 = []
//         for (let j = 1; j <= 100; j++) {
//             tableau2.push(`${i}-${j}`)
//         }
//         tableau.push(tableau2)
//     }
//     return tableau
// }

// console.log(theatreSieges())

//----------------------------------------------------------------------------------------------//

// EXERCICE 30

/*
Notre équipe de football participe à un tournoi dans lequel elle a joué 10 matchs.
Les résultats du match sont notés "3:0" : le premier chiffre est le nombre de buts de **notre** équipe ; le second est celui de l'autre équipe.
Pour connaître le score de notre équipe, nous suivons ces règles :
- Victoire : 3pts
- Nul : 1pt
- Défaite : 0pt
Étant donné un tableau avec les résultats des matchs, écris une fonction qui renverra notre score.
Pour exemple, si ta fonction recevait le tableau ci-dessous en paramètre, tu devrais obtenir 13 points.

["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]
*/
//Indice : Tu dois utiliser une boucle for pour parcourir le tableau et une condition if pour savoir si notre équipe a gagné, perdu ou fait match nul. Et tu dois ajouter les points de chaque match à une variable score qui doit être initialisée à 0. Et tu dois retourner la variable score à la fin de la fonction.

// CODE ICI


















//-----------------------------------------------SOLUTIONS-----------------------------------------------//

// const footballPoints = (tableau) => {
//     let score = 0
//     for (let i = 0; i < tableau.length; i++) {
//         if (tableau[i][0] > tableau[i][2]) {
//             score += 3
//         } else if (tableau[i][0] === tableau[i][2]) {
//             score += 1
//         }
//     }
//     return score
// }
// console.log(footballPoints(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]))

//----------------------------------------------------------------------------------------------//


// EXERCICE 31

/*
Écris une fonction avec deux paramètres. Ces paramètres sont des tableaux contenant des nombres **stockés sous forme de chaînes de caractères**.
Ta fonction doit renvoyer **un** tableau, où chaque élément est la somme des éléments des deux arguments correspondants (c'est-à-dire : le premier élément du tableau résultat est égal au premier élément du premier paramètre plus le premier élément du deuxième paramètre) .
Remarque : Si un élément est vide, il doit compter pour 0.
Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
sumArr( ["2", "5", "3"], ["2", "4", "9", "5", "5"] ) should return ["4", "9", "12", "5", "5"]
*/

//Indice : Tu dois utiliser une boucle for pour parcourir les tableaux et une condition if pour savoir si un élément est vide. Si un élément est vide tu dois le remplacer par 0. Et tu dois ajouter les éléments des deux tableaux à une variable tableau3 qui doit être initialisée à un tableau vide. Et tu dois retourner le tableau3 à la fin de la fonction.

// CODE ICI











//-----------------------------------------------SOLUTIONS-----------------------------------------------//

// const sumArr = (tableau1, tableau2) => {
//     let tableau3 = []
//     for (let i = 0; i < tableau1.length; i++) {
//         if (tableau1[i] === "") {
//             tableau1[i] = 0
//         }
//         if (tableau2[i] === "") {
//             tableau2[i] = 0
//         }
//         tableau3.push(parseInt(tableau1[i]) + parseInt(tableau2[i]))
//     }
//     return tableau3
// }

// console.log(sumArr(["1", "2", "3"], ["2", "4", "1"]))








 // Implémenter la fonction filterDuplicate qui prend un tableau en paramètre et qui doit renvoyer un tableau sans doublons.

// Exemple du résultat attendu :
// filterDuplicate([1, 2, 2, 3, 4, 4, 5]) // [1, 2, 3, 4, 5]




const filterDuplicate = (tab) => {

    const uniqueSet = new Set(tab);

    
    const uniqueArray = [...uniqueSet];

    return uniqueArray;
}

console.log(filterDuplicate([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// ___________________________________________________________________________________

const filterDuplicate2 = (tab) => {
    return tab.reduce((uniqueArray, item) => {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
      return uniqueArray;
    }, []);
  };
  console.log(filterDuplicate2([1, 2, 2, 3, 4, 4, 5]));


