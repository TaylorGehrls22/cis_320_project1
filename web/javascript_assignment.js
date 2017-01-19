//Part 1
function helloFunction(event) {
	console.log("Hello.");
}

var formButton1 = $('#button1');
formButton1.on("click", helloFunction);

//Part 2
function addingFunction(event) {
    var fieldValue1 = $('#field1').val();
    var fieldValue2 = $('#field2').val();
    var fieldValue3 = Number(fieldValue1) + Number(fieldValue2);
    $('#field3').val(fieldValue3);
}

var formButton2 = $('#button2');
formButton2.on("click", addingFunction);

//Part 3
function visibilityFunction(event) {
	if($('#paragraphToHide').is(':visible')) 
	{
	    $("#paragraphToHide").hide(500);
	} 
	else 
	{
    	$("#paragraphToHide").show(500);
	}
}

var formButton3 = $('#button3');
formButton3.on("click", visibilityFunction);


//Part 4
function validateFunction(event) {
	var v1 = $('#phoneField').val();
	var reg = /^\d{3}-\d{3}-\d{4}$/;
	if (reg.test(v1)) {
	    $('#result').text("Ok");
	    console.log("Ok");
	} else {
	    $('#result').text("Bad");
	    console.log("Bad");
	}}

var formButton4 = $('#button4');
formButton4.on("click", validateFunction);

//Part 5
function jsonFunction(event) {
    var formObject = {};

    formObject.firstName = $('#firstName').val();
    formObject.lastName = $('#lastName').val();
    formObject.email = $('#email').val();

    var jsonString = JSON.stringify(formObject);

    $('#jsonResult').text(jsonString);
    console.log(jsonString);
}

var formButton5 = $('#button5');
formButton5.on("click", jsonFunction);