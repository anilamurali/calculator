// 1. display  number in text
    function displayNum(num) {
        result.value+=num;
        
    }
//2 . clear text box
function clearNum() {
    result.value=' ';
    
}

// 3. evaluvate expression
function evaluvateNum() {
    // exp=result.value;
    // output=eval(exp)
    // result.value=output;
    result.value=eval(result.value)
}

// 4. Remove last item from text box
function clearOne() {
    result.value=result.value.slice(0,-1);
    
}