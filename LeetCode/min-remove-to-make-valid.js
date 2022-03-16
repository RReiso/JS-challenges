// 1249. Minimum Remove to Make Valid Parentheses
/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = function(s) {
 let brackets = [];
 let array = s.split("");
    for (let i=0; i<array.length; i++){
        if (array[i]==="(") {
            brackets.push(i);
        } else if(array[i]===")"){
            if (brackets.length>0){
                brackets.pop();
            }else{
                array[i]=""
            }
        }
    }
     for (const el of brackets){
         array[el]=""
     }
        
    return array.join("")
};
