const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const getMonth = date => monthNames[date.getMonth()]

export const getDayMonth = date => `${date.getDate()} ${getMonth(date)}`

const checkTime = (i) => i < 10 ? `0${i}` : i

export const getCurrentTime = now => `${checkTime(now.getHours())}:${checkTime(now.getMinutes())}`

