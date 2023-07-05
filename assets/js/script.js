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
    drequired.style.display = 'flex'
    return false
} else {
    dlabel.style.color = '#854dff'
    day.style.borderColor = '#854dff';
    drequired.style.display = 'none'
    return true
}
}

function validMonth() {
    if (month.value == 0 ) {
    month.style.borderColor = '#ff5757';
    mlabel.style.color = '#ff5757'
    mrequired.style.display = 'flex'
    return false
} else {
    mlabel.style.color = '#854dff'
    month.style.borderColor = '#854dff';
    mrequired.style.display = 'none'
    return true
}
}

function validYear() {
    if (year.value == 0 ) {
    year.style.borderColor = '#ff5757';
    ylabel.style.color = '#ff5757'
    yrequired.style.display = 'flex'
    return false
} else {
    ylabel.style.color = '#854dff'
    year.style.borderColor = '#854dff';
    yrequired.style.display = 'none'
    return true
}
}

btn.addEventListener('click', function(event) {
    event.preventDefault()
    validDay()
    validMonth()
    validYear()
})





