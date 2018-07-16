//input 12:45:54PM
//output expected 12:45:54
const converTime = (input) => {
    let [hours, minutes, seconds] = input.split(':');
    const dayShift = seconds.substr(2);
    if (dayShift.toLowerCase() === 'pm' && hours !== '12') {
        hours = (parseInt(hours) + 12);
    } else if (hours === '12' && dayShift === 'AM') {
        hours = '00';
    }
    return `${hours}:${minutes}:${seconds.substr(0, 2)}`;
}

module.exports = converTime;