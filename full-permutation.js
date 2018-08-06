/**
 * 给定一个字符串，输出该字符串所有排列的可能。如输入“abc”，输出“abc,acb,bca,bac,cab,cba”。
 */
function permutate(str) {

    var result = [];
    if (str.length == 1) {
        return [str]
    } else {

        var preResult = permutate(str.slice(1));
        for (var j = 0; j < preResult.length; j++) {
            for (var k = 0; k < preResult[j].length + 1; k++) {
                var temp = preResult[j].slice(0, k) + str[0] + preResult[j].slice(k);
                result.push(temp);
            }
        }
        return result;
    }
}

console.log(permutate("abc"));
//[ 'abc', 'bac', 'bca', 'acb', 'cab', 'cba' ]