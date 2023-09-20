// const arr = [5, 2, 8, 4]
// const len = arr.length

// console.log(arr)

// for (let i = 0; i < len; i++){
//     for (let j = 0; j < len - i - 1; j++){
//         if(arr[j] > arr[j + 1]){
//             let t = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = t
//         }
//     }
// }

// console.log(arr)


/* Here is more relevant method */

// arrow function with parametr - arr(which is meant to accept array)
const bubble = arr => {
    const n = arr.length

    // Function responsible for sorting numbers
    const swap = (arr, left, right) => {
        if(arr[left] > arr[right]){
            [arr[left], arr[right]] = [arr[right], arr[left]]
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n - i - 1; j++){
            swap(arr, j, j + 1)
        }
    }

    return arr
}

const num = [5, 2, 8, 4]

console.log(num)
console.log(bubble(num))