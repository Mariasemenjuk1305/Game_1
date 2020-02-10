for (let i = 0; i < 9; i++) {
    document.getElementById('block').innerHTML += '<div class="oneSqr"></div>';
}
let move = 0;

document.getElementById('block').onclick = function (event) {
    console.log(event);
    if (event.target.className == 'oneSqr') {
        if (move % 2 == 0) {
            event.target.innerHTML = 'x';
            event.target.style.backgroundColor = 'red';
        } else {
            event.target.innerHTML = '0';
            event.target.style.backgroundColor = 'black';
            event.target.style.color = 'white';
        }
        move++
    }

    checks();

}

function checks() {
    let moveArray = document.getElementsByClassName('oneSqr');

    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    let arr5 = [];
    let arr6 = [];

    for (let i = 0; i < moveArray.length; i++) {
        arr1.push(moveArray[i].innerHTML);
    };

    arr2.push(arr1[0]);
    arr2.push(arr1[3]);
    arr2.push(arr1[6]);

    arr3.push(arr1[1]);
    arr3.push(arr1[4]);
    arr3.push(arr1[7]);

    arr4.push(arr1[2]);
    arr4.push(arr1[5]);
    arr4.push(arr1[8]);

    arr5.push(arr1[0]);
    arr5.push(arr1[4]);
    arr5.push(arr1[8]);

    arr6.push(arr1[2]);
    arr6.push(arr1[4]);
    arr6.push(arr1[6]);
    // 0,1,2
    // 3,4,5
    // 6,7,8

    if (arr1.slice(0, 3).every(item => item == 'x') ||
        arr1.slice(3, 6).every(item => item == 'x') ||
        arr1.slice(6).every(item => item == 'x') ||
        arr2.every(item => item == 'x') ||
        arr3.every(item => item == 'x') ||
        arr4.every(item => item == 'x') ||
        arr5.every(item => item == 'x') ||
        arr6.every(item => item == 'x')) {
            document.getElementById('res2').innerHTML = 'winner x';
            document.getElementById('res1').innerHTML = '';
    } else if (arr1.slice(0, 3).every(item => item == '0') ||
        arr1.slice(3, 6).every(item => item == '0') ||
        arr1.slice(6).every(item => item == '0') ||
        arr2.every(item => item == '0') ||
        arr3.every(item => item == '0') ||
        arr4.every(item => item == '0') ||
        arr5.every(item => item == '0') ||
        arr6.every(item => item == '0')) {
            document.getElementById('res1').innerHTML = 'winner 0';
            document.getElementById('res2').innerHTML = '';
    }
}

document.getElementById('play').onclick = function(){
        document.getElementById('block').style.display = 'block';   
}

document.getElementById('done').onclick = function(){ 
    document.getElementById('block').style.display = 'none';
}