recurFact = (n) =>{
    if (n == 0)
        return 1
    else if (n == 1)
        return n
    else
        return n * recurFact(n-1)
}
console.log("Actividad 6 : Factorial Recursivo")
console.log(recurFact(5))