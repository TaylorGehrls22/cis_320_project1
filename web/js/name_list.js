function updateTable() {

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