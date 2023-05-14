const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")
const yearLabelAfter = document.getElementById("yearLabelAfter")
const yearLabelBefore = document.getElementById("yearLabelBefore")

const monthLabelAfter = document.getElementById("monthLabelAfter")
const monthLabelBefore = document.getElementById("monthLabelBefore")

const dayLabelAfter = document.getElementById("dayLabelAfter")
const dayLabelBefore = document.getElementById("dayLabelBefore")
const submit = document.getElementById("submit")


const years = document.getElementById("years")
const days = document.getElementById("days")
const months = document.getElementById("months")
const currYear = new Date().getFullYear()
const currMonth = new Date().getMonth() + 1
const currDate = new Date().getDate()

const daysInMonth = new Date(year.value, month.value, 0).getDate();

submit.addEventListener("click", () => {
    let birthday = new Date(`${month.value}/${day.value}/${year.value}`);
    let today = new Date();
    let ageYears = today.getFullYear() - birthday.getFullYear();
    let ageMonths = today.getMonth() - birthday.getMonth();
    let ageDays = today.getDate() - birthday.getDate();

    //claculation of age
    if (isNaN(birthday.getTime())) {
        // Invalid date
        yearLabelAfter.innerHTML = "Must be a valid day";
        hasError = true;
    } else {
        if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
            ageYears--;
            ageMonths += 12;
        }
        if (ageDays < 0) {
            let monthDays = new Date(
                today.getFullYear(),
                today.getMonth() - 1,
                0
            ).getDate();
            ageDays += monthDays;
            ageMonths--;
        }
    }
    let hasError = false
    //empty errors
    if (year.value === "") {
        yearLabelAfter.innerHTML = "This field is required"
        hasError = true
    }
    if (month.value === "") {
        monthLabelAfter.innerHTML = "This field is required"
        hasError = true
    }
    if (day.value === "") {
        dayLabelAfter.innerHTML = "This field is required"
        hasError = true
    }

    //invalid errors
    if (year.value > (currYear.toString())) {
        yearLabelAfter.innerHTML = "Must be in the past"
        hasError = true

    }
    if (month.value > "12") {
        monthLabelAfter.innerHTML = "Must be a valid month"
        hasError = true
    }
    if (day.value < 1 || day.value > daysInMonth) {
        dayLabelAfter.innerHTML = "Must be a valid day"
        hasError = true
    }
    if (hasError) {
        yearLabelBefore.classList.toggle("text-[#ff5757]")
        year.style.outline = "#ff5757"
        year.style.borderColor = "#ff5757"

        monthLabelBefore.classList.toggle("text-[#ff5757]")
        month.style.outline = "#ff5757"
        month.style.borderColor = "#ff5757"

        dayLabelBefore.classList.toggle("text-[#ff5757]")
        day.style.outline = "#ff5757"
        day.style.borderColor = "#ff5757"
    }

    //no errors
    if (!hasError) {
        years.innerHTML = ageYears;
        months.innerHTML = ageMonths;
        days.innerHTML = ageDays;
    }
})
