  // Calculator
   /* const nums = document.querySelectorAll('.calc .nums button');
    const opers = document.querySelectorAll('.calc .opers button');
    const display = document.querySelector('.calc .display');
    const equal = document.querySelector('.calc .eq');
    nums.forEach( buttonNum => buttonNum.addEventListener('click', numPressed) );
    function numPressed(ev) {
        const num = ev.target.innerText;
        display.value += num;
    }
    opers.forEach( buttonOper => buttonOper.addEventListener('click', operPressed) );
    function operPressed(ev) {
        const oper = ev.target.innerText;
        display.value += oper;
    }
    equal.addEventListener('click', () => display.value = eval(display.value) ); */

function plus () {
    let num1 , num2, result;
       num1 = document.getElementById('n1').value;
       num1 = parseInt(num1);
       num2 = document.getElementById('n2').value;
       num2 = parseInt(num2);
       result = num1 + num2;
       document.getElementById('res').innerHTML = result;
}

function minus () {
    let num1 , num2, result;
       num1 = document.getElementById('n1').value;
       num1 = parseInt(num1);
       num2 = document.getElementById('n2').value;
       num2 = parseInt(num2);
       result = num1 - num2;
       document.getElementById('res').innerHTML = result;

}