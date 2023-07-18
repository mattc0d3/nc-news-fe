const convertDate = (ISODate) => {

    const months = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December"
    }

    const splitDate = ISODate.split("-")
    const year = splitDate[0]
    const month = months[splitDate[1]]
    const day = splitDate[2].slice(0, 2)
    
    let suffix
    switch (day) {
        case day[1] === "1":
            suffix= "st"
        case day[1] === "2":
            suffix = "nd"
        default:
            suffix = "th"
    }

    let formattedDay
    if (day[0] === "0") formattedDay = day[1] + suffix
    else formattedDay = day + suffix

    return formattedDay + " " + month + " " + year
}

export default convertDate