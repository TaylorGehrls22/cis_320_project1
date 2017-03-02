function deleteItem(e) {
    console.debug("Delete");
    console.debug(e.target.value);
}

function updateTable()
{
    var urlGet = "api/name_list_get";
    $.getJSON(urlGet, null, function(json_result)
        {
            for (var i = 0; i < json_result.length; i++) {

                var id = json_result[i].id;
                var firstName = json_result[i].firstName;
                var lastName = json_result[i].lastName;
                var email = json_result[i].email;
                var phone = json_result[i].phone;
                var birthday = json_result[i].birthday;

                var phoneDash;
                if (phone.indexOf('-') > -1)
                {
                    phoneDash = phone;
                }
                else
                {
                    phoneDash = phone.substr(0,3)+"-"+phone.substr(3,3)+"-"+phone.substr(6,4);
                }

                var row = "<tr>";
                row += '<td>'+id+'</td>';
                row += '<td>'+firstName+'</td>';
                row += '<td>'+lastName+'</td>';
                row += '<td>'+email+'</td>';
                row += '<td>'+phoneDash+'</td>';
                row += '<td>'+birthday+'</td>';
                row += "<td><button type='button' name='delete' class='editButton btn' value='" + id + "'>Delete</button></td>";
                row += "</tr>";
                $("#datatable tbody").append(row);
            }
            var buttons = $(".editButton");
            buttons.on("click", deleteItem);
            buttons.on("click", jqueryPostDelete);
        }
    )
}
// Call your code.
updateTable();

function clearTable()
{
    $("#datatable tbody tr").empty();
}

function showDialogAdd() {
    // Print that we got here
    console.log("Opening add item dialog");

    $('#firstName').val("");
    $('#lastName').val("");
    $('#email').val("");
    $('#phone').val("");
    $('#birthday').val("");

    $('#firstNameDiv').removeClass("has-error");
    $('#firstNameGlyph').removeClass("glyphicon-remove");
    $('#firstNameDiv').removeClass("has-success");
    $('#firstNameGlyph').removeClass("glyphicon-ok");

    $('#lastNameDiv').removeClass("has-error");
    $('#lastNameGlyph').removeClass("glyphicon-remove");
    $('#lastNameDiv').removeClass("has-success");
    $('#lastNameGlyph').removeClass("glyphicon-ok");

    $('#emailDiv').removeClass("has-error");
     $('#emailGlyph').removeClass("glyphicon-remove");
     $('#emailDiv').removeClass("has-success");
     $('#emailGlyph').removeClass("glyphicon-ok");

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

var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);

function validate()
{
    var valid_form = true;
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
        valid_form = false;
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
        valid_form = false;
        console.log("Last Name Bad");
    }

    var emailValidated = $('#email').val();
    var emailReg = /^[a-zA-Z0-9\.\-\_\@]{0,30}$/;
    if (emailReg.test(emailValidated))
    {
        // Set style for outline of form field
        $('#emailDiv').removeClass("has-error");
        $('#emailDiv').addClass("has-success");

        // Set the icon for the form field
        $('#emailGlyph').removeClass("glyphicon-remove");
        $('#emailGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('emailStatus').val("(success)");
        console.log("email Ok");
    }
    else
    {
        // Set style for outline of form field
        $('#emailDiv').removeClass("has-success");
        $('#emailDiv').addClass("has-error");

        // Set the icon for the form field
        $('#emailGlyph').removeClass("glyphicon-ok");
        $('#emailGlyph').addClass("glyphicon-remove");

        // Put in the field used by screen readers
        $('emailStatus').val("(error)");
        valid_form = false;
        console.log("email Bad");
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
        valid_form = false;
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
        valid_form = false;
        console.log("Birthday Bad");
    }
    return valid_form;
}

<!-- AJAX Post -->
function jqueryPostAdd() {
    if (validate()==true)
    {
        var url = "api/name_list_edit";
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var birthday = $("#birthday").val();

        var dataToServer = {firstName : firstName,  lastName : lastName, email : email, phone : phone, birthday : birthday}
        console.log(dataToServer);

        $.post(url, dataToServer, function (dataFromServer) {
            console.log("Finished calling servlet.");
            clearTable();
            updateTable();
            $('#myModal').modal('hide');
            console.log(dataFromServer);
        });
    }
}
var jqueryPostButton = $('#jqueryPostButton');
jqueryPostButton.on("click", jqueryPostAdd);

function jqueryPostDelete(e) {
        var url = "api/name_list_delete";
        var id = e.target.value;

        var dataToServer = {id : id}
        console.log(dataToServer);

        $.post(url, dataToServer, function (dataFromServer) {
            console.log("Finished calling servlet.");
            clearTable();
            updateTable();
            console.log(dataFromServer);
        });
}


