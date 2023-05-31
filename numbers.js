function simpleNumber(n) {
    listnumber = [2]
    for (let i = 3; listnumber.length < n-1; i++) {  
        // console.log(i);
        var flag = 0
        for (let elem of listnumber) {
            if (i % elem == 0) {
                flag = 1
                // console.log('и все таки оно делится!');
            }
        } 
        if (flag == 0) {
            listnumber.push(i)
        }
    }
    listnumber.unshift(1)
    return listnumber
}


console.time('simpleNumber')
console.log(simpleNumber(process.argv[2]))
console.timeEnd('simpleNumber')