// Fonction donnant le nombre de jours maximum dans chaque mois :
const maxDaysInMonth = (mois) => {
    if (((mois%2 !== 0) && (mois < 8)) || ((mois%2 == 0) && (mois > 7) && (mois < 13))) {
        return "31";
    } else if (mois == 2) {
        return "29";
    } else if (((mois%2 == 0) && (mois < 7)) || ((mois%2 != 0) && (mois < 12) && (mois > 8))) {
        return "30";
    } else {
        return false;
    }
}

// Fonction qui vérifie si la date donnée est bien valide : 
const isValidDate = (dateString) => {
    if (dateString.length == 10) {
        if (dateString.substr(0, 2) < (maxDaysInMonth(dateString.substr(3, 2)))) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

// Fonction qui vérifie si c'est un palindrome : 
const isPalindrome = (dateString) => {
    const dateNoSlash = dateString.split('/').join('');
    for (let x = 0 ; x < dateNoSlash.length ; x++) {
        if (dateNoSlash[x] !== dateNoSlash[dateNoSlash.length - 1 - x]) {
            return false
        }
    }
    return true;
}

// Fonction qui vérifie si une date est valide et si elle est un palindrome :
const isDatePalindrome = (dateToTest) => {
    if (isValidDate) {
        return isPalindrome(dateToTest);
    } else {
        console.log("Attention, vous n'avez pas saisi une date valide.")
    }
}