function showparagraph1()
{
    var inputs = [];
    for (var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("name_of_the_" + i).value);
    }
    inputs.join(".");
    document.getElementById("showparagraph1").innerHTML = inputs.join(".");
    console.log("showparagraph1");

        inputs.push(document.getElementById("name_of_the_" + i).value);

}
function showparagraph2()
{
    var inputs = [];
    for (var i = 7 ; i <= 12 ; i++)
    {
        inputs.push(document.getElementById("name_of_the_" + i).value);
        console.log("showparagraph2");
    }

    inputs.join(".");
    document.getElementById("showparagraph2").innerHTML = inputs.join(".");
    
    
}