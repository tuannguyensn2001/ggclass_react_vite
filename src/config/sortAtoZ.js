export default function sortAtoZ(obj) {
    let tg = {};
    for (let i = 0; i <= obj.length - 2; i++) {
        for (let j = 1; j <= obj.length - 1; j++) {
            if (obj[i].name.toLowerCase().localeCompare(obj[j].name.toLowerCase()) === 1) {
                console.log('a');
                tg = obj[i];
                obj[i] = obj[j];
                obj[j] = tg;
            }
        }
    }
}
