// Program pencarian nama siswa
// Database: student.name[]
// output 1: array hasil pencarian nama siswa dalam bentuk array
// output 2: Hitung jumlah hasil pencarian


student = {
    name: ["Mika", "Mikayla", "Mikael", "Mamika", "Arif", "salika", "romeo"]
}

let filtered = []

searchStudent("EO")

function searchStudent(searchKeyword, callback) {
    result = []
    namaSiswa = student.name

    // 1. konversi searchKeyword ke lowercase
    searchKeyword = toLowerHuruf(searchKeyword)


    // 2. loop search keyword di dalam student name
    namaSiswa.forEach((siswa, idx) => {
        const lowerSiswa = toLowerHuruf(siswa)
        // console.log(lowerSiswa)
        isCocok = false

        for (let i = 0; i < lowerSiswa.length; i++) {
            jumlahKesamaan = 0;

            for (let j = 0; j < searchKeyword.length; j++) {
                if (lowerSiswa[i+j] === searchKeyword[j]) {
                    jumlahKesamaan++
                } else {
                    break
                }
            }

            if (jumlahKesamaan === searchKeyword.length) {
                isCocok = true
                break;
            }
        }

        if (isCocok) {
            result[result.length] = namaSiswa[idx]
        }
        
    });

    console.log(result)


}

// menghitung hasil pencarian
function countResult(searchResult) {
    console.log(`Jumlah hasil pencarian: ${searchResult.length}`)
}

// konversi string ke lowercase
function toLowerHuruf(input) {
    let result = ""

    const char = {
        A: "a",
        B: "b",
        C: "c",
        D: "d",
        E: "e",
        F: "f",
        G: "g",
        H: "h",
        I: "i",
        J: "j",
        K: "k",
        L: "l",
        M: "m",
        N: "n",
        O: "o",
        P: "p",
        Q: "q",
        R: "r",
        S: "s",
        T: "t",
        U: "u",
        V: "v",
        W: "w",
        X: "x",
        Y: "y",
        Z: "z",
    }

    for (i=0; i<input.length; i++) {
        if(char[input[i]]) {
            result += char[input[i]]
        } else {
            result += input[i]
        }
    }

    return result
}