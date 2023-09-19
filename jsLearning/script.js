/* Prymitywne typy danych */
let power = 10
let quantity = 18

let information = "Ala ma kota"
let numberAsString = "2.55"

let isTrue = true
let isFalse = false

let empty = null
let special = undefined

// Złożone typy danych
const character = {
    power: 10,
    name: "Ekko",
    type: "Assasin",
    age: undefined,
    gender: "Male"
}

const usersID = [1, 5, 736, 21, 0]

// --------------------------------------------------------
let name = "Danylo"
let typeOfName = typeof(name)
console.log(typeOfName)

//---------------------------------------------------------
let salary = "1000000"
let numberSalary = Number(salary)

let text = "4. Not a number"
let numberText = Number(text)

console.log(numberSalary, numberText)

//---------------------------------------------------------
const charactersNames = ["Leonardo", "Rafael", "Donatelo"]
const points = [4, 7, 93, 765]

console.log(charactersNames[0] + ' ' + points[3])

//---------------------------------------------------------
const array2D = [
    [1, 2, 3, 4],
    ["Danylo", "Kostek", "Kanil", "Tymon"],
    [true, false]
    ]

console.log(array2D[1][0])

//----------------------------------------------------------
const lolCharacter = {
    name: "Sylas",
    age: 20,
    friends: ["no friends, but have an enemy - Demacia"],
    haveWeaknesses: false,
    useUltimate: () => {
        console.log("Map was destroyed (((")
    }
}

console.log(lolCharacter.age)

lolCharacter.age = 99
console.log(lolCharacter.age)