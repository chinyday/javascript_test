
function inset(num){
    var txt_board = document.getElementsByClassName("txt_board")[0];


    // console.log(txt_board.value, txt_board.value.substring(0, 1));

    // if(txt_board.value.substring(0, 1) == 0){
    //     console.log('/////');

    //     txt_board.value.substring(0, txt_board.value.length-1);

    // }else{
        txt_board.value = txt_board.value + num;
    // }

}

// function add(){
//     var txt_board = document.getElementsByClassName("txt_board")[0];

//     txt_board.setAttribute('data-input2', txt_board.getAttribute('data-input1'));

//     var sum = Number(txt_board.getAttribute('data-input1')) + Number(txt_board.getAttribute('data-input2'));

//     txt_board.setAttribute('data-input1', '');
//     txt_board.setAttribute('data-result', sum);
//     console.log('더하기',sum);
// }


function equl(){
    var txt_board = document.getElementsByClassName("txt_board")[0];

    if(txt_board.value){
        txt_board.value = eval(txt_board.value);
    }

}

function del(){
    document.getElementsByClassName("txt_board")[0].value = '';
}

function back(){
    var txt_board = document.getElementsByClassName("txt_board")[0];
    txt_board.value = txt_board.value.substring(0, txt_board.value.length-1);
}




var calculator = {
    plus : function(a, b) {
        return a+b;
    },
    sub :function(a, b) {
        return a-b;
    },
    mul :function(a, b) {
        return a*b;
    },
    divi :function(a, b) {
        return a / b;
    }

}


console.log( calculator.plus(1,1) );
console.log( calculator.sub(1,1) );
console.log( calculator.mul(10,2) );
console.log( calculator.divi(10,2) );