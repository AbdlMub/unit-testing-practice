function reverse_number(n) {
    n = n + "";
    return n.split("").reverse().join("");
}

module.exports =  reverse_number ;
