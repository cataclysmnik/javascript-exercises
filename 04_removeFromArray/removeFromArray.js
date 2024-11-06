const removeFromArray = function(arr, r, s, t , u, v, w) {
    for (i = 0; i < arr.length; i++) {
        if ((arr[i] === r) & (arr.indexOf(r) != -1)) {
            arr.splice(i,1);
            i--;
        }
    }
    if (s != "") {
        if (arr.indexOf(s) != -1) {
            index2 = arr.indexOf(s);
            arr.splice(index2,1);
        }
    }
    if (t != "") {
        if (arr.indexOf(t) != -1) {
            index2 = arr.indexOf(t);
            arr.splice(index2,1);
        }
    }
    if (u != "") {
        if (arr.indexOf(u) != -1) {
            index2 = arr.indexOf(u);
            arr.splice(index2,1);
        }
    }
    if (v != "") {
        if (arr.indexOf(s) != -1) {
            index2 = arr.indexOf(v);
            arr.splice(index2,1);
        }
    }
    if (w != "") {
        if (arr.indexOf(s) != -1) {
            index2 = arr.indexOf(w);
            arr.splice(index2,1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
