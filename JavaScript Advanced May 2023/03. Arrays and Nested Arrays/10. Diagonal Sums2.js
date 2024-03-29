function findDiagonalSums(matrix) {
    let mainDiagonal = 0;
    let secondDiagonal = 0;
    let lastIndex = matrix.length - 1

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal += matrix[i][i]
        secondDiagonal += matrix[i][lastIndex--]
    }
    return `${mainDiagonal} ${secondDiagonal}`
}
console.log(findDiagonalSums([[3, 5, 17], [-1, 7, 14],
[1, -8, 89]]))