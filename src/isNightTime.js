const sunrise = 6
const sunset = 18
const isNight = hour => hour < sunrise || hour > sunset
const currentHour = () => new Date().getHours()
const isNightTime = () => isNight(currentHour())

export default isNightTime
