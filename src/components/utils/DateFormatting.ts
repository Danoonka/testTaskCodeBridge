export const DateFormatting = (date: string | number | Date) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]



    let postDate = new Date(date);
    let postDay: any = postDate.getDate()

    switch (postDay){
        case 1 :
            postDay = `${postDay}st`
            break
        case 2 :
            postDay = `${postDay}nd`
            break
        case 3:
            postDay = `${postDay}rd`
            break
        default:
            postDay = `${postDay}th`
    }

    let postYear = postDate.getFullYear()


    return `${months[postDate.getMonth()]} ${postDay}, ${postYear}`

}