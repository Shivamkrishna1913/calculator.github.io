let expression='';

function enteringnumber(number){
    expression += number;
    document.getElementById('result').value= expression;
}

function operator(operator){
    expression += operator;
    document.getElementById('result').value = expression;
}
function clearresult(){
    document.getElementById('result').value =  '';
}

function calculate(){
    try{
        const result = eval(expression);
        document.getElementById('result').value=result;
        expression='';
    }
    catch(error){
        document.getElementById('result').value='error';
    }
}

