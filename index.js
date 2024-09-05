function fibonacci(x){
    
    let previous = 0
    let current = 1

    if(x == 0) return `O numero ${x} pertence a sequencia de fibonacci`

    while(x >= current){
        if(current == x) return `O numero ${x} pertence a sequencia de fibonacci`
        let temp = current
        current = current + previous
        previous = temp
    }

     return `O numero não ${x} pertence a sequencia de fibonacci`
}

console.log(fibonacci(100))

function countA(str){
    const arr = str.split('')
    let sum = 0

    for(let letter of arr){
        if(letter == 'a' || letter == "A" ) sum += 1;
    }

    return sum
}

console.log(countA('TestaaaA'))

function soma(){
    const indice = 12
    let sum = 0
    let k = 1
    while(k < indice){
        k += 1
        sum += k
    }
    console.log(sum)
}

soma()