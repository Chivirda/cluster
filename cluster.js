let gameField = generateField();

console.log(gameField);
console.log(findClusters(gameField));

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
    let count = 0;

    for(let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[0].length; j++) {
            count += dfs(i, j);
        }
    }

    function dfs(i, j) {

        if (i < 0 || i >= field.length || j < 0 || j >= field[i].length || field[i][j] === 0) {
            return 0;
        }

        field[i][j] = 0;

        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i + 1, j);
        dfs(i, j - 1);
        return 1;
    }

    return count;
}

