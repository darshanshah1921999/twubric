export const getDateFromTime = (time) => {
    const date = new Date(time*1000);
    const months = [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}