const fibonacci = function(n) {
    let sequence = [1, 1];
    if (n == 0) {
        return 0;
    }
    if (n < 0) {
        return "OOPS";
    }
    for (i = 0; i < n - 1; i++) {
        sequence.push(sequence[i] + sequence[i+1]);
    }
    return sequence[n-1]
};

// Do not edit below this line
module.exports = fibonacci;
