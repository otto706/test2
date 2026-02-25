const v = {
    "s0": 5,
    "s1": "",
    "x0": "1",
    "x1": "4.1.0",
    "x2": "Windows",
    "x3": "xhs-pc-web",
    "x4": "4.68.0",
    "x5": "1945d5404f9l0qhk1uh5sx95u1l5r04nchro8mq9450000271566",
    "x6": "",
    "x7": "",
    "x8": "I38rHdgsjopgIvesdVwgIC+oIELmBZ5e3VwXLgFTIxS3bqwErFeexd0ekncAzMFYnqthIhJeSBMDKutRI3KsYorWHPtGrbV0P9WfIi/eWc6eYqtyQApPI37ekmR6QL+5Ii6sdnoeSfqYHqwl2qt5B0DoIx+PGDi/sVtkIxdsxuwr4qtiIhuaIE3e3LV0I3VTIC7e0utl2ADmsLveDSKsSPw5IEvsiVtJOqw8BuwfPpdeTFWOIx4TIiu6ZPwrPut5IvlaLbgs3qtxIxes1VwHIkumIkIyejgsY/WTge7eSqte/D7sDcpipedeYrDtIC6eDVw2IENsSqtlnlSuNjVtIvoekqt3cZ7sVo4gIESyIhEJHnquIxhnqz8gIkIfoqwkICqWGo3sdlOeVPw3IvAe0fgedfTGIi5s3Mm02utAIiKsidvekZNeTPt4nAOeWPwEIvkcaA5edqwXpfNsSPwZI3ErIxE5Luwwaqw+rekrPI5eDo/eVPwmIhJsSnAekmuvIiAsfI/sxBidIkve3PwlIhQk2VtqOqt1IxesTVtjIk0siqwdIh/sjut3wutnsPw5ICclI3l4wA4jwIAsWVw4IE4qIhOsSqtZBbTt/A0ejjp1IkGPGutKoqw3I3OexqtYQL5eiz5siMmLIiAsx7OsTutycPwqIC0efVtUIi5eTsuPICKs1cdsVuwLIh7eSVtmt0IgIilwIx3e3sJsTedsjW7eWuwmIE+hICqVcuwzIkikIkOe1r4F",
    "x9": 2132753675,
    "x10": 0,
    "x11": "normal"
}

const P = [
    "Z",
    "m",
    "s",
    "e",
    "r",
    "b",
    "B",
    "o",
    "H",
    "Q",
    "t",
    "N",
    "P",
    "+",
    "w",
    "O",
    "c",
    "z",
    "a",
    "/",
    "L",
    "p",
    "n",
    "g",
    "G",
    "8",
    "y",
    "J",
    "q",
    "4",
    "2",
    "K",
    "W",
    "Y",
    "j",
    "0",
    "D",
    "S",
    "f",
    "d",
    "i",
    "k",
    "x",
    "3",
    "V",
    "T",
    "1",
    "6",
    "I",
    "l",
    "U",
    "A",
    "F",
    "M",
    "9",
    "7",
    "h",
    "E",
    "C",
    "v",
    "u",
    "R",
    "X",
    "5"
]

function tripletToBase64(e) {
    return P[e >> 18 & 63] + P[e >> 12 & 63] + P[e >> 6 & 63] + P[63 & e]
}
function encodeUtf8(e) {
    for (var r = encodeURIComponent(e), i = [], a = 0; a < r.length; a++) {
        var s = r.charAt(a);
        if ("%" === s) {
            var u = parseInt(r.charAt(a + 1) + r.charAt(a + 2), 16);
            i.push(u),
            a += 2
        } else
            i.push(s.charCodeAt(0))
    }
    return i
}

function encodeChunk(e, r, i) {
    for (var a, s = [], u = r; u < i; u += 3)
        a = (e[u] << 16 & 0xff0000) + (e[u + 1] << 8 & 65280) + (255 & e[u + 2]),
        s.push(tripletToBase64(a));
    return s.join("")
}
function b64Encode(e) {
    for (var r, i = e.length, a = i % 3, s = [], u = 0, c = i - a; u < c; u += 16383)
        s.push(encodeChunk(e, u, u + 16383 > c ? c : u + 16383));
    return 1 === a ? (r = e[i - 1],
    s.push(P[r >> 2] + P[r << 4 & 63] + "==")) : 2 === a && (r = (e[i - 2] << 8) + e[i - 1],
    s.push(P[r >> 10] + P[r >> 4 & 63] + P[r << 2 & 63] + "=")),
    s.join("")
}

function ee(){
    return b64Encode(encodeUtf8(JSON.stringify(v)))
}
console.log(ee())

console.log(ee().length)