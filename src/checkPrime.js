const isPrime = (n) => {
    if(isNaN(n))
        throw "e";
    if (n  < 2)
        return false
    let i = 2, j = n;
    while (i < j) {
        if (n % i === 0) {
            return false;
        }
        j = n / i;
        i = i + 1;
    }
    return true;
}

const checkPrime = (data) => {
    try {
        let output = data.split(',').map(num => (
            isPrime(parseInt(num)) ? [`${num} is prime number`] : [`${num} is not prime number`]
        ));
        return output;
    }
    catch (e) {
        return ["Invalid Format! Enter comma separated numbers only"]
    }
}

export default checkPrime;