console.log(this === global )
console.log(this ===  exports)

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === global)
}

logThis()