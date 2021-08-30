let gameField = generateField();

console.log(gameField);

function generateField() {
    let field = [];

    for (let i = 0; i < 5; i++) {
        let row = [];
        for (let j = 0; j < 5; j++) {
            let rnd = Math.random() * 3;
            row.push(Number(rnd.toFixed()));
        }
        field.push(row);
    }

    return field;
}

function findClusters(field) {

}