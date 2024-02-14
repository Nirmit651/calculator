function operate(firstNum, operator, secondNum){
    
    if((operator=='/') && (secondNum==0)){
        clear();
        display.textContent='Error';
        return;
    }

    let solution=0;
    console.log(operator)
    if(operator=='/'){
        solution = firstNum/secondNum;
    }
    if(operator=="x"){
        solution = firstNum*secondNum;
    }
    if(operator=='-'){
        solution = firstNum-secondNum;
    }
    if(operator=='+'){
        solution = firstNum+secondNum;
    }
    display.textContent=Math.round(solution * 100)/100;
    displayOn=true;
}

function clear(){
    firstNum=undefined;
    secondNum=undefined;
    operationString='';
    display.textContent='';
    operatorPressed=false;
    decimalPressed=false;
    numberPressed=false;
    displayOn=false;

}

function deleteNum(){ 
    operationString=operationString.substring(0,operationString.length-1);
    display.textContent=operationString;
}

function readOperation(str){
    let stringOne='';
    let stringTwo='';
    let operatorFound = false;
    console.log(operationString);
    for(i=0;i<=str.length;i++){
        //firstNum
        if(!operatorFound){
            //Operator
            if((str.charAt(i)=='+') || (str.charAt(i)=='-') || 
            (str.charAt(i)=='/') || (str.charAt(i)=='x')){
                operatorFound = true;
                operator = str.charAt(i);
            }else{
                stringOne=stringOne+str.charAt(i);
            }
        }else{
            //secondNum
            stringTwo=stringTwo+str.charAt(i);
        }
    }
    firstNum=parseFloat(stringOne);
    secondNum=parseFloat(stringTwo);
    //make divide sign put / into the operation string
}

const display = document.getElementById('display');

let firstNum, secondNum, operator;
let operationString='';

let operatorPressed=false;
let decimalPressed=false;
let numberPressed=false;
let displayOn=false;

//Decimal Button
const btnDecimal = document.getElementById('decimal');
btnDecimal.addEventListener('click', () => {
    if(displayOn){
        clear();
    }
    
    if(!decimalPressed){
        operationString=operationString+'.';
        display.textContent=operationString;
        decimalPressed=true;
    }
});


//Equal Button
const btnEqual = document.getElementById('equal');
btnEqual.addEventListener('click', () => {
    if(numberPressed && operatorPressed){
        readOperation(operationString);
        operate(firstNum,operator,secondNum);
    }
});


//Clear and Delete Buttons
const btnClear = document.getElementById('btn-clear');
btnClear.addEventListener('click', () => {
    clear();
});

const btnDelete = document.getElementById('btn-delete');
btnDelete.addEventListener('click', () => {
    deleteNum();
});


//Operation Buttons
const btnDivide = document.getElementById('divide');
btnDivide.addEventListener('click', () => {
    if(!operatorPressed && numberPressed){
        operationString=operationString+'/';
        display.textContent=operationString; 
        operatorPressed=true;
        decimalPressed=false;
    }
});

const btnMultiply = document.getElementById('multiply');
btnMultiply.addEventListener('click', () => {
    if(!operatorPressed && numberPressed){  
        operationString=operationString+'x';
        display.textContent=operationString;
        operatorPressed=true;
        decimalPressed=false;
    }
});

const btnSubtract = document.getElementById('subtract');
btnSubtract.addEventListener('click', () => {
    if(!operatorPressed && numberPressed){
        operationString=operationString+'-';
        display.textContent=operationString;
        operatorPressed=true;
        decimalPressed=false;
    }
});

const btnAdd = document.getElementById('add');
btnAdd.addEventListener('click', () => {
    if(!operatorPressed && numberPressed){
        operationString=operationString+'+';
        display.textContent=operationString;
        operatorPressed=true;
        decimalPressed=false;
    }
});


//Number Buttons
const btnZero = document.getElementById('zero');
btnZero.addEventListener('click', () => {
    if(displayOn){
        clear();
    }
    operationString=operationString+'0';
    display.textContent=operationString;
    numberPressed=true;
});

const btnOne = document.getElementById('one');
btnOne.addEventListener('click', () => {
    if(displayOn){
        clear();
    }
    operationString=operationString+'1';
    display.textContent=operationString;
    numberPressed=true;
});

const btnTwo = document.getElementById('two');
btnTwo.addEventListener('click', () => {
    if(displayOn){
        clear();
    }
    operationString=operationString+'2';
    display.textContent=operationString;
    numberPressed=true;
});

const btnThree = document.getElementById('three');
btnThree.addEventListener('click', () => {
    if(displayOn){
        clear();
    }
    operationString=operationString+'3';
    display.textContent=operationString;
    numberPressed=true;
});

const btnFour = document.getElementById('four');
btnFour.addEventListener('click', () => {
    if(displayOn){
        clear();
    }
    operationString=operationString+'4';
    display.textContent=operationString;
    numberPressed=true;
});

const btnFive = document.getElementById('five');
btnFive.addEventListener('click', () => {
    if(displayOn){
        clear();
    }
    operationString=operationString+'5';
    display.textContent=operationString;
    numberPressed=true;
});

const btnSix = document.getElementById('six');
btnSix.addEventListener('click', () => {
    if(displayOn){
        clear();
    }
    operationString=operationString+'6';
    display.textContent=operationString;
    numberPressed=true;
});

const btnSeven = document.getElementById('seven');
btnSeven.addEventListener('click', () => {
    if(displayOn){
        clear();
    }
    operationString=operationString+'7';
    display.textContent=operationString;
    numberPressed=true;
});

const btnEight = document.getElementById('eight');
btnEight.addEventListener('click', () => {
    if(displayOn){
        clear();
    }
    operationString=operationString+'8';
    display.textContent=operationString;
    numberPressed=true;
});

const btnNine = document.getElementById('nine');
btnNine.addEventListener('click', () => {
    operationString=operationString+'9';
    display.textContent=operationString;
    numberPressed=true;
});

