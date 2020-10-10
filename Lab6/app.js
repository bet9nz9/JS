document.write(`
<canvas id='tetris'>
</canvas>`)

let canvas = document.getElementById('tetris');
let arr = []
for (let i =0; i<20; i++){
    arr[i] = []
    for(let j =0; j<10; j++){
        arr[i][j] = null;
        (`<div class='element'></div>`)
    }
}