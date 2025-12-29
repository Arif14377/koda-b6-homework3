student = {
    name: ["Mika", "Mikayla", "Mikael", "Mamika", "Arif"]
}

searchStudent("Mika")

function searchStudent(searchKeyword, callback) {
    // looping search keyword
    let keyword = ""
    let filtered = []

    // loop search keyword
    for(i=0; i < searchKeyword.length; i++) {
        // console.log(searchKeyword[i])

        // looping name student
        for(x=0; x < student.name.length; x++) {
        // console.log(student.name[x])
            // looping string nama siswa ke [x]
            for(y=0; y < student.name[x].length; y++) {
                // console.log(student.name[x][y])
                if (searchKeyword[i] === student.name[x][y]){
                    filtered[x] = student.name[x]
                    console.log(filtered[x])
                } else {
                    console.log("tidak ada")
                }
                
            }
        }
        console.log(filtered)

    }


}

function countResult() {

}


// coret-coret
dataSiswa = {
    nama: ["arif", "rahman", "ori", "obe", "mikayla", "kayla", "layla"]
}


search = "ayla"

let tampung = []


let hasilPencarian = []

// loop data siswa
for (i=0; i < dataSiswa.nama.length; i++) {
    tampung[i] = ""
    // loop siswa ke i
    for (x=0; x < dataSiswa.nama[i].length; x++) {
        for (y=0; y < search.length; y++) {
            if (dataSiswa.nama[i][x + y] === search[y]) {
                tampung[i] += dataSiswa.nama[i][x]
            } else {
            tampung[i] += ""
            }
        }
        
    }
}


// for(y=0; y < search.length; y++) {
//     if (tampung[i] === search(y))
// }

// for(z=0; z < tampung.length; z++) {
//     if(tampung[z] === search) {
//         hasilPencarian[z] = dataSiswa.nama[z]
//     }
// }


console.log(tampung)
// console.log(hasilPencarian)