
let containerDiv = document.createElement('div');
containerDiv.setAttribute('class', 'container');

let calDiv = document.createElement('div');
calDiv.setAttribute('class', 'calculator');
calDiv.setAttribute('id', 'cal');
containerDiv.appendChild(calDiv);
document.body.append(containerDiv);

let inp = document.createElement('input');
inp.setAttribute('type', 'text');
inp.setAttribute('id', 'input');
inp.setAttribute('placeholder','0');
inp.setAttribute('style', 'column-span : 4;');
let cal = document.getElementById('cal');
cal.appendChild(inp);

let btn1 = document.createElement('button');
btn1.textContent = 'C';
btn1.setAttribute('onclick', 'allclear()');
btn1.setAttribute('style', 'color:red')
cal.appendChild(btn1);

let btn2 = document.createElement('button');
btn2.textContent = '←';
btn2.setAttribute('onclick', 'del()');
cal.appendChild(btn2);

let btn3 = document.createElement('button');
btn3.textContent = '.';
btn3.setAttribute('onclick', "display('.')");
cal.appendChild(btn3);

let btn4 = document.createElement('button');
btn4.textContent = '×';
btn4.setAttribute('onclick', "display('*')");
btn4.setAttribute('style', 'color:blue');
cal.appendChild(btn4);

let btn5 = document.createElement('button');
btn5.textContent = '7';
btn5.setAttribute('onclick', "display('7')");
cal.appendChild(btn5);

let btn6 = document.createElement('button');
btn6.textContent = '8';
btn6.setAttribute('onclick', "display('8')");
cal.appendChild(btn6);

let btn7 = document.createElement('button');
btn7.textContent = '9';
btn7.setAttribute('onclick', "display('9')");
cal.appendChild(btn7);

let btn8 = document.createElement('button');
btn8.textContent = '/';
btn8.setAttribute('onclick', "display('/')");
btn8.setAttribute('style', 'color:blue');
cal.appendChild(btn8);

let btn9 = document.createElement('button');
btn9.textContent = '4';
btn9.setAttribute('onclick', "display('4')");
cal.appendChild(btn9);

let btn10 = document.createElement('button');
btn10.textContent = '5';
btn10.setAttribute('onclick', "display('5')");
cal.appendChild(btn10);

let btn11 = document.createElement('button');
btn11.textContent = '6';
btn11.setAttribute('onclick', "display('6')");
cal.appendChild(btn11);

let btn12 = document.createElement('button');
btn12.textContent = '-';
btn12.setAttribute('onclick', "display('-')");
btn12.setAttribute('style', 'color:blue');
cal.appendChild(btn12);

let btn13 = document.createElement('button');
btn13.textContent = '1';
btn13.setAttribute('onclick', "display('1')");
cal.appendChild(btn13);

let btn14 = document.createElement('button');
btn14.textContent = '2';
btn14.setAttribute('onclick', "display('2')");
cal.appendChild(btn14);

let btn15 = document.createElement('button');
btn15.textContent = '3';
btn15.setAttribute('onclick', "display('3')");
cal.appendChild(btn15);

let btn16 = document.createElement('button');
btn16.textContent = '+';
btn16.setAttribute('onclick', "display('+')");
btn16.setAttribute('style', 'color:blue');
cal.appendChild(btn16);

let btn17 = document.createElement('button');
btn17.textContent = '0';
btn17.setAttribute('onclick', "display('0')");
cal.appendChild(btn17);

let btn18 = document.createElement('button');
btn18.textContent = '00';
btn18.setAttribute('onclick', "display('00')");
cal.appendChild(btn18);

let btn19 = document.createElement('button');
btn19.textContent = '=';
btn19.setAttribute('onclick', "calculate()");
btn19.setAttribute('class', 'equal');
cal.appendChild(btn19);

function display(n) {
    input.value += n;
}
function allclear() {
    input.value = '';
}
function del() {
    input.value = input.value.slice(0, -1);
}

function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        alert('Only numbers are allowed');
    }
}