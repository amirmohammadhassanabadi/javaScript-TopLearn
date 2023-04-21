var Num = [
    [1, [2, 3], 4],
    [[5, 6, 7], 8, [9, 10]],
    [11, 12, 13]
]
for (var i = 0; i < Num.length; i++) {
    for (var j = 0; j < Num[i].length; j++) {
        for (var k = 0; k < Num[i][j].length; k++) {
            if (Num[i][j].length > 0) {
                document.write(Num[i][j][k] + "<br>")
            } else {
                document.write(Num[i][j] + "<br>")
            }
        }
    }
}