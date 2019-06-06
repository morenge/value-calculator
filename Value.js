function futureIncrease() {
    // HTML form
    var calcForm = document.forms["calc"];

    //Given number
    var number = document.getElementById("number").value;

    //Annual rate
    var rate = document.getElementById("rate").value/100;

    //Number of years
    var year = document.getElementById('year').value;
    //Calculation formula
    var result = Math.round(number * Math.pow((1+ rate),year));

    //Validate only integers are used
    if (String(result) === "NaN"){
        console.log("Error Invalid entry")
        return alert("Please enter only valid numbers!");
    }
    //Post calculation to "Result" box
    else{
        console.log(result.toLocaleString());
        document.getElementById("result").value = 
    result.toLocaleString();    

    }
}

//Remove entries from form
function resetform(){
    console.log("All fields cleared")
    document.getElementById("calc").reset();
}