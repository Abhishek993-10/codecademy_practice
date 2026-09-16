const getSleepHours = day => {
    switch(day) {
        case 'monday':
            return 7;
            break;
        case 'tuesday':
            return 6.5;
            break;
        case 'wednesday':
            return 7;
            break;
        case 'thursday':
            return 6;
            break;
        case 'friday':
            return 7;
            break;
        case 'saturday':
            return 8;
            break;
        case 'sunday':
            return 8;
            break;
        default:
            return 'Error';
            break;
    }
};

const getActualSleepHours = () => {
    return getSleepHours('monday') + 
           getSleepHours('tuesday') + 
           getSleepHours('wednesday') + 
           getSleepHours('thursday') + 
           getSleepHours('friday') + 
           getSleepHours('saturday') + 
           getSleepHours('sunday');
};

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You got ${actualSleepHours - idealSleepHours} more sleep than you needed this week.`);
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`You got ${idealSleepHours - actualSleepHours} hours less sleep than you needed this week.`);
    } else {
        console.log('Please fill in the amount of sleep hours you got each night to calculate your sleep debt.');
    }
};

calculateSleepDebt();


