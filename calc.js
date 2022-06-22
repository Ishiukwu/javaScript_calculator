function calculator(){
    const num1 = parseFloat(prompt("Enter a number", " "))
    const num2 = parseFloat(prompt("Enter another number", " "))
    const operator = prompt("Enter an operator(+, -, /, *)", " ")


    if(operator === "+"){
        const add = alert(num1 + num2);
        return add;
    }else if(operator === "-"){
        const minus = alert(num1 - num2);
        return minus;
    }else if(operator === "/"){
        const divide = alert(num1 / num2);
        return divide;
    }else if(operator === "*"){
        const multiply = alert(num1 * num2);
        return multiply;
    }else{
        const not_any = alert("Hey! you did not enter a correct operator");
        return not_any;
    }

}




console.log(calculator())
