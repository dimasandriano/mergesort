// DOM 
const input = document.getElementById("input")
const btnInput = document.getElementById("btnInput")
const btnSort = document.getElementById("btnSort")
const btnReset = document.getElementById("btnReset")
const listData = document.getElementById("listData")
const listDataSort = document.getElementById("listDataSort")

// variabel data
let data = [];


// event click btn input
btnInput.addEventListener('click', function() {
    if(input.value == '' ) return alert('masukkan angka')
    data.push(parseInt(input.value))
    listData.innerHTML += `
            <li class="list-group-item">${input.value}</li>
        `
    input.value = '';
})

// event tombol enter di input
input.addEventListener('keypress', function(e) {
    if(e.key === 'Enter'){
        if(input.value == '' ) return alert('masukkan angka')
        data.push(parseInt(input.value))
        listData.innerHTML += `
            <li class="list-group-item">${input.value}</li>
        `
        input.value = '';
    }
})

// event btn sort
let datas = ''
btnSort.addEventListener('click', () => {
    sort(data)
    datas.forEach(item => {
        listDataSort.innerHTML += `
        <li class="list-group-item">${item}</li>
        `
    });
})

// event btn reset
btnReset.addEventListener('click', () => {
    data = []
    listData.textContent =''
    listDataSort.textContent =''
})


// function merge
function merge(A, B) {
    let C = [];
    while(A.length > 0 && B.length > 0) {
        if (A[0] < B[0]) {
            C.push(A.shift());
        } else {
            C.push(B.shift());
        }
    }
    C = C.concat(A);
    C = C.concat(B);
    data = []
    return C
}

// function merge sort
function sort(data) {
    if (data.length <= 1) return data;
    if (data.length === 2) {
        if (data[0] < data[1]) return data;
        return [data[1], data[0]];
    }
    const mid = Math.floor(data.length/2);
    const left = data.slice(0, mid);
    const right = data.slice(mid);
    const sortedLeft = sort(left);
    const sortedRight = sort(right);
    datas = merge(sortedLeft, sortedRight);
    return datas
}
