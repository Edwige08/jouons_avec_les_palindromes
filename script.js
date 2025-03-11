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

// Tests des fonctions : --------------------------------------------
invalidDateTestDay = "31/11/2023";
invalidDateTestMonth = "22/22/2012";
invalidDateTestYear = "11/02/990";
validDateTest = "11/03/2025"
console.log("Date valide : " + isValidDate(validDateTest));
console.log("Mauvais jour : " + isValidDate(invalidDateTestDay));
console.log("Mauvais mois : " + isValidDate(invalidDateTestMonth));
console.log("Mauvaise année : " + isValidDate(invalidDateTestYear));
console.log(validDateTest.length)