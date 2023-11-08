const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) =>{
        let fahrenhrit = Math.round((cel * 9/5) +32);
        return fahrenhrit;
    }
 
    const fahToCel = (fah) =>{
        let celcuis = Math.round((fah -32) *5/9);
        return celcuis;
    }

    let result ;
 
    if (valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}° Fahrenheit `;
    }else{
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}° Celcuis `;
        
    }

}