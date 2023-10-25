// Your code here
export function isPalindrome(word) {
  const re=/[\W_]/g

  const lowWord = word.toLowerCase().replace(re, "")

  const reverseWord = lowWord.split("").reverse().join("");

  return reverseWord === lowWord
  
    // let j = word.length - 1;
    // for (let i = 0; i < j /2; i++) {
    //     let x = word[i];
    //     let y = word[j - i];
    //     if (x != y) {
    //         return false
    //     }
    // }
    // return true
}


