const NAME = 'Lab 49';
const LOCATION = 'Noida';
const WORK = [ 'React', 'Java Script'];
const DOMAIN = 'FINANCE';

export default function test() {
    return `Hello Mihir ${NAME} ${LOCATION} ${WORK}`
}

//Default Export
//export default getDetails;

//NAMED Export
export { NAME, LOCATION, WORK, DOMAIN };