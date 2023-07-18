const compareDate = (date) => {
    const currentDate = new Date()
    const months = {
        "January": 0,
        "February": 1,
        "March": 2,
        "April": 3,
        "May": 4,
        "June": 5,
        "July": 6,
        "August": 7,
        "September": 8,
        "October": 9,
        "November": 10,
        "December": 11
    }
    const daysInMonth = {
        "January": 31,
        "February": (currentDate.getFullYear() % 4 === 0 ? 28 : 29),
        "March": 31,
        "April": 30,
        "May": 31,
        "June": 30,
        "July": 31,
        "August": 31,
        "September": 30,
        "October": 31,
        "November": 30,
        "December": 31
    }

    const splitDate = date.split(" ")

    const yearsElapsed = currentDate.getFullYear() - Number(splitDate[2])
    if (yearsElapsed > 0)  return yearsElapsed + " year" + (yearsElapsed === 1 ? "" : "s") + " ago"

    let monthsElapsed = currentDate.getMonth() - months[splitDate[1]]
    if (monthsElapsed < 0) monthsElapsed += 12
    if (monthsElapsed > 0) return monthsElapsed + " month" + (monthsElapsed === 1 ? "" : "s") + " ago"

    let daysElapsed = currentDate.getDate() - Number(splitDate[0].match(/\d+/)[0])
    if (daysElapsed < 0) daysElapsed += daysInMonth[splitDate[1]]
    if (daysElapsed > 0) return daysElapsed + " day" + (daysElapsed === 1 ? "" : "s") + " ago"

    return "today"
}
export default compareDate