const palindromes = function (palindrome) {
    palindrome = palindrome.toLowerCase()
    palindrome = palindrome.split('').filter((ch) => { 
        return (ch <= "z" && ch >= "a")
    }).join()
    let i = palindrome.length - 1
    let parola = ""
    while (i >= 0) {
        parola += palindrome[i] 
        i--
    }
    return (parola == palindrome)
};

// Do not edit below this line
module.exports = palindromes;
