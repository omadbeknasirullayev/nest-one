function oneList(ls) {
    return String(ls).split(",").map((value) => {
        return Number(value)
    })
}

let ls = [1, 2, 3, [1, 2, 3, [[1]]], [[[1]]]]

console.log(oneList(ls))


let res = 0
function add (n) {
    res += n
    return add
}


add(1)(2)(3)(4)(5)(6)
console.log(res)