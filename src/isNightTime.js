const isNight = hour => hour < 6 || hour > 18
const currentHour = () => new Date().getHours()
const isNightTime = () => isNight(currentHour())

export default isNightTime
