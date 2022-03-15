/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let res="";
    const word = strs[0];
    for (let i=0; i<word.length; i++){
        for (const string of strs) {
            if (string[i] !== word[i]) {
                return res;
            }
        }
        res=res+ word[i];
    }
    return res;
};
