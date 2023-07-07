let day = document.querySelector('#iday')
let month = document.querySelector('#imonth')
let year = document.querySelector('#iyear')
let drequired = document.querySelector('#drequired')
let mrequired = document.querySelector('#mrequired')
let yrequired = document.querySelector('#yrequired')
let dlabel = document.querySelector('#dlabel')
let mlabel = document.querySelector('#mlabel')
let ylabel = document.querySelector('#ylabel')
let btn = document.querySelector('#btn')
let resday = document.querySelector('#resday')
let resmonth = document.querySelector('#resmonth')
let resyear = document.querySelector('#resyear')

function validDay() {
    if (day.value == 0 ) {
    day.style.borderColor = '#ff5757';
    dlabel.style.color = '#ff5757'
    drequired.style.color = '#ff5757'
    return false
} else {
    dlabel.style.color = '#854dff'
    day.style.borderColor = '#854dff';
    drequired.style.color = 'transparent'
    return true
}
}

function validMonth() {
    if (month.value == 0 ) {
    month.style.borderColor = '#ff5757';
    mlabel.style.color = '#ff5757'
    mrequired.style.color = '#ff5757'
    return false
} else {
    mlabel.style.color = '#854dff'
    month.style.borderColor = '#854dff';
    mrequired.style.color = 'transparent'
    return true
}
}

function validYear() {
    if (year.value == 0 ) {
    year.style.borderColor = '#ff5757';
    ylabel.style.color = '#ff5757'
    yrequired.style.color = '#ff5757'
    return false
} else {
    ylabel.style.color = '#854dff'
    year.style.borderColor = '#854dff';
    yrequired.style.color = 'transparent'
    return true
}
}

function validTime() {
/* Year */

let newDate = new Date();
let nYear = newDate.getFullYear();

if (year.value > nYear) {
    year.style.borderColor = '#ff5757';
    ylabel.style.color = '#ff5757'
    yrequired.style.color = '#ff5757'
    yrequired.textContent = 'Must be in the past'
}

/* Month */

if (month.value > 12) {
    month.style.borderColor = '#ff5757'
    mlabel.style.color = '#ff5757'
    mrequired.textContent = 'Must be a valid month'
    mrequired.style.color = '#ff5757'
}

/* Day */

if (day.value > 31) {
    day.style.borderColor = '#ff5757'
    dlabel.style.color = '#ff5757'
    drequired.textContent = 'Must be a valid day'
    drequired.style.color = '#ff5757'
}

// to remove the zero!
let monthValue = parseInt(month.value, 10);
let dayValue = parseInt(day.value, 10);

if (monthValue == 2 && dayValue > 29 || monthValue == 4 && dayValue > 30 || monthValue == 6 && dayValue > 30 || monthValue == 9 && dayValue > 30 || monthValue == 11 && dayValue > 30){
    day.style.borderColor = '#ff5757'
    dlabel.style.color = '#ff5757'
    drequired.textContent = 'Must be a valid date'
    drequired.style.color = '#ff5757'
}
}

function calculateTime() {
    if (validYear() == true && validMonth() == true && validDay() == true && validTime() ) {//erro para corrigir!!!
        let newDate = new Date();
        let nYear = newDate.getFullYear();
        let nMonth = newDate.getMonth() + 1;
        let nDay = newDate.getDate();

        if (validYear() == true) {
            let age = nYear - year.value;
            resyear.innerHTML = age;
        }

        if (validMonth() == true) {
            let age = nMonth - month.value 
            if (age < 0) {
                age += 12
            }
            resmonth.innerHTML = age
        }

        if (validDay() == true) {
            let age = nDay - day.value;
            if (age < 0) {
                age += 31;
            }
            resday.innerHTML = age;
        }
    }
}

btn.addEventListener('click', function(event) {
    event.preventDefault();
    validDay();
    validMonth();
    validYear();
    validTime();
    calculateTime();
})
