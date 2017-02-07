function updateTable()
{

    var url = "api/name_list_get";

    $.getJSON(url, null, function(json_result)
        {
            for (var i = 0; i < json_result.length; i++) {

                var id = json_result[i].id;
                var firstName = json_result[i].firstName;
                var lastName = json_result[i].lastName;
                var phone = json_result[i].phone;
                var birthday = json_result[i].birthday;

                var phoneDash = phone.substr(0,3)+"-"+phone.substr(3,3)+"-"+phone.substr(6,4);

                var row = "<tr>";
                row += '<td>'+id+'</td>';
                row += '<td>'+firstName+'</td>';
                row += '<td>'+lastName+'</td>';
                row += '<td>'+phoneDash+'</td>';
                row += '<td>'+birthday+'</td>';
                row += "</tr>";

                $("#datatable tbody").append(row);
            }
        }
    )
}
// Call your code.
updateTable();

var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);

function showDialogAdd() {

    // Print that we got here
    console.log("Opening add item dialog");

    $('#id').val("");
    $('#firstName').val("");
    $('#lastName').val("");
    $('#phone').val("");
    $('#birthday').val("");

    $('#idDiv').removeClass("has-error");
    $('#idGlyph').removeClass("glyphicon-remove");
    $('#idDiv').removeClass("has-success");
    $('#idGlyph').removeClass("glyphicon-ok");

    $('#firstNameDiv').removeClass("has-error");
    $('#firstNameGlyph').removeClass("glyphicon-remove");
    $('#firstNameDiv').removeClass("has-success");
    $('#firstNameGlyph').removeClass("glyphicon-ok");

    $('#lastNameDiv').removeClass("has-error");
    $('#lastNameGlyph').removeClass("glyphicon-remove");
    $('#lastNameDiv').removeClass("has-success");
    $('#lastNameGlyph').removeClass("glyphicon-ok");

    $('#phoneDiv').removeClass("has-error");
    $('#phoneGlyph').removeClass("glyphicon-remove");
    $('#phoneDiv').removeClass("has-success");
    $('#phoneGlyph').removeClass("glyphicon-ok");

    $('#birthdayDiv').removeClass("has-error");
    $('#birthdayGlyph').removeClass("glyphicon-remove");
    $('#birthdayDiv').removeClass("has-success");
    $('#birthdayGlyph').removeClass("glyphicon-ok");

    // Show the hidden dialog
    $('#myModal').modal('show');
}


var saveChangesButton = $('#saveChanges');
saveChangesButton.on("click", validate);

function validate(){
    var idValidated = $('#id').val();
    var idreg = /^\S[0-9]{0,10}$/;
    if (idreg.test(idValidated))
    {
        // Set style for outline of form field
        $('#idDiv').removeClass("has-error");
        $('#idDiv').addClass("has-success");

        // Set the icon for the form field
        $('#idGlyph').removeClass("glyphicon-remove");
        $('#idGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('idStatus').val("(success)");
        console.log("ID Ok");
    }
    else
    {
        // Set style for outline of form field
        $('#idDiv').removeClass("has-success");
        $('#idDiv').addClass("has-error");

        // Set the icon for the form field
        $('#idGlyph').removeClass("glyphicon-ok");
        $('#idGlyph').addClass("glyphicon-remove");

        // Put in the field used by screen readers
        $('idStatus').val("(error)");
        console.log("ID Bad");
    }

    var firstNameValidated = $('#firstName').val();
    var firstNameReg = /^\S[a-zA-Z\u00C0-\u017F\-'\s]{0,30}$/;
    if (firstNameReg.test(firstNameValidated))
    {
        // Set style for outline of form field
        $('#firstNameDiv').removeClass("has-error");
        $('#firstNameDiv').addClass("has-success");

        // Set the icon for the form field
        $('#firstNameGlyph').removeClass("glyphicon-remove");
        $('#firstNameGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('firstNameStatus').val("(success)");
        console.log("First Name Ok");
    }
    else
    {
        // Set style for outline of form field
        $('#firstNameDiv').removeClass("has-success");
        $('#firstNameDiv').addClass("has-error");

        // Set the icon for the form field
        $('#firstNameGlyph').removeClass("glyphicon-ok");
        $('#firstNameGlyph').addClass("glyphicon-remove");

        // Put in the field used by screen readers
        $('firstNameStatus').val("(error)");
        console.log("First Name Bad");
    }

var lastNameValidated = $('#lastName').val();
    var lastNameReg = /^\S[a-zA-Z\u00C0-\u017F\-'\s]{0,30}$/;
    if (lastNameReg.test(lastNameValidated))
    {
        // Set style for outline of form field
        $('#lastNameDiv').removeClass("has-error");
        $('#lastNameDiv').addClass("has-success");

        // Set the icon for the form field
        $('#lastNameGlyph').removeClass("glyphicon-remove");
        $('#lastNameGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('lastNameStatus').val("(success)");
        console.log("Last Name Ok");
    }
    else
    {
        // Set style for outline of form field
        $('#lastNameDiv').removeClass("has-success");
        $('#lastNameDiv').addClass("has-error");

        // Set the icon for the form field
        $('#lastNameGlyph').removeClass("glyphicon-ok");
        $('#lastNameGlyph').addClass("glyphicon-remove");

        // Put in the field used by screen readers
        $('lastNameStatus').val("(error)");
        console.log("Last Name Bad");
    }

    var phoneValidated = $('#phone').val();
    var phoneReg = /^\d{3}-\d{3}-\d{4}$/;
    if (phoneReg.test(phoneValidated))
    {
        // Set style for outline of form field
        $('#phoneDiv').removeClass("has-error");
        $('#phoneDiv').addClass("has-success");

        // Set the icon for the form field
        $('#phoneGlyph').removeClass("glyphicon-remove");
        $('#phoneGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('phoneStatus').val("(success)");
        console.log("Phone Ok");
    }
    else
    {
        // Set style for outline of form field
        $('#phoneDiv').removeClass("has-success");
        $('#phoneDiv').addClass("has-error");

        // Set the icon for the form field
        $('#phoneGlyph').removeClass("glyphicon-ok");
        $('#phoneGlyph').addClass("glyphicon-remove");

        // Put in the field used by screen readers
        $('phoneStatus').val("(error)");
        console.log("Phone Bad");
    }

    var birthdayValidated = $('#birthday').val();
    var birthdayReg = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
    if (birthdayReg.test(birthdayValidated))
    {
        // Set style for outline of form field
        $('#birthdayDiv').removeClass("has-error");
        $('#birthdayDiv').addClass("has-success");

        // Set the icon for the form field
        $('#birthdayGlyph').removeClass("glyphicon-remove");
        $('#birthdayGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('birthdayStatus').val("(success)");
        console.log("Birthday Ok");
    }
    else
    {
        // Set style for outline of form field
        $('#birthdayDiv').removeClass("has-success");
        $('#birthdayDiv').addClass("has-error");

        // Set the icon for the form field
        $('#birthdayGlyph').removeClass("glyphicon-ok");
        $('#birthdayGlyph').addClass("glyphicon-remove");

        // Put in the field used by screen readers
        $('birthdayStatus').val("(error)");
        console.log("Birthday Bad");
    }
}
