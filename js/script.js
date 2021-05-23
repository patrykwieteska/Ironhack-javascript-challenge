const calcResult = document.getElementById('result');
const btnC = document.getElementById('btn-c');
const btnAdd = document.getElementById('btn-add');
const btnSubtract = document.getElementById('btn-subt');
const btnMultipl = document.getElementById('btn-mltpl');
const btnDivide = document.getElementById('btn-dv');
const btnEqual = document.getElementById('btn-eql');
const btns = [1,2,3,4,5,6,7,8,9];

btns.forEach(function(btn){
  let value = 'btn-'+btn;

  document.getElementById(value).addEventListener('click', function(e){
    let text = e.target.textContent;
          calcResult.value += text;
  })
})

btnC.addEventListener('click', function(e){
  calcResult.value = '';
})
document.getElementById('btn-0').addEventListener('click', function(e){
    if(calcResult.value === '' || (calcResult.value[0] === '0' && calcResult.value.length ===1)){
      calcResult.value = '0';
    } else {
        calcResult.value += e.target.textContent;
    }
})

btnAdd.addEventListener('click', function(e){
  if(calcResult.value === ''){
    calcResult.value = ''
  } else if (calcResult.value[calcResult.value.length-1] !=='-' && calcResult.value[calcResult.value.length-1] !=='+' && calcResult.value[calcResult.value.length-1] !=='*' && calcResult.value[calcResult.value.length-1] !=='/') {
    calcResult.value += '+'
  }
})

btnMultipl.addEventListener('click', function(e){
  if(calcResult.value === ''){
    calcResult.value = ''
  } else if (calcResult.value[calcResult.value.length-1] !=='-' && calcResult.value[calcResult.value.length-1] !=='+' && calcResult.value[calcResult.value.length-1] !=='*' && calcResult.value[calcResult.value.length-1] !=='/') {
    calcResult.value += '*'
  }
})

btnDivide.addEventListener('click', function(e){
  if(calcResult.value === ''){
    calcResult.value = ''
  } else if (calcResult.value[calcResult.value.length-1] !=='-' && calcResult.value[calcResult.value.length-1] !=='+' && calcResult.value[calcResult.value.length-1] !=='*' && calcResult.value[calcResult.value.length-1] !=='/') {
    calcResult.value += '/'
  }
})

btnSubtract.addEventListener('click', function(e){
  if(calcResult.value === ''){
    calcResult.value = '-'
  } else if (calcResult.value[calcResult.value.length-1] !=='-' && calcResult.value[calcResult.value.length-1] !=='+' && calcResult.value[calcResult.value.length-1] !=='*' && calcResult.value[calcResult.value.length-1] !=='/') {
    calcResult.value += '-'
  }
})

btnEqual.addEventListener('click', function(e){
  let lastItemIndex = calcResult.value.length-1;
  let result1 = calcResult.value

  if(result1[lastItemIndex] === '+' || result1[lastItemIndex] === '-' || result1[lastItemIndex] === '*' || result1[lastItemIndex] === '/') {
    result1 = result1.substring(0,lastItemIndex)
    console.log('Expression: ', result1)
  } else {
    console.log('Expression: ', result1)
  }

  if(calcResult.value!=='') {
    console.log('Result=', eval(result1));
    calcResult.value = eval(result1)
  }
})
