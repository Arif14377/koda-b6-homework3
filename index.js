student = {
    name: ["Mika", "Mikayla", "Mikael", "Mamika", "Arif", "salika", "romeo"]
}

let filtered = []

searchStudent("ri")

function searchStudent(searchKeyword, callback) {

    let keyword = searchKeyword

    // loop search keyword
    for(i=0; i < searchKeyword.length; i++) {
        // console.log(searchKeyword[i])

        // looping name student
        for(x=0; x < student.name.length; x++) {
        // console.log(student.name[x])
            // looping string nama siswa ke [x]
            for(y=0; y < student.name[x].length; y++) {
                // console.log(student.name[x][y])
                if (searchKeyword[i] === student.name[x][y] && searchKeyword[i+1] === student.name[x][y+1]){
                    filtered[x] = student.name[x]
                }
                
            }
        }
        
    }

    // for(i=0; i<filtered.length; i++) {
    //     for(x=0; x<filtered.length; i++){
    //         if (filtered[i] === filtered[x]) {

    //         }
    //     }
    // }
    
    console.log(filtered)


}

function countResult() {

}


// // coret-coret
// dataSiswa = {
//     nama: ["arif", "rahman", "ori", "obe", "mikayla", "kayla", "layla"]
// }


// search = "ayla"

// let tampung = []


// let hasilPencarian = []

// // loop data siswa
// for (i=0; i < dataSiswa.nama.length; i++) {
//     tampung[i] = ""
//     // loop siswa ke i
//     for (x=0; x < dataSiswa.nama[i].length; x++) {
//         for (y=0; y < search.length; y++) {
//             if (dataSiswa.nama[i][x + y] === search[y]) {
//                 tampung[i] += dataSiswa.nama[i][x]
//             } else {
//             tampung[i] += ""
//             }
//         }
        
//     }
// }


// // for(y=0; y < search.length; y++) {
// //     if (tampung[i] === search(y))
// // }

// // for(z=0; z < tampung.length; z++) {
// //     if(tampung[z] === search) {
// //         hasilPencarian[z] = dataSiswa.nama[z]
// //     }
// // }


// console.log(tampung)
// // console.log(hasilPencarian)