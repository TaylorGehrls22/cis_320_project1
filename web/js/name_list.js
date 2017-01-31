function updateTable() {

    var url = "api/name_list_get";

    $.getJSON(url, null, function(json_result)
        {
            var outputTbl = document.getElementById('datatable');

            for (var i = 0; i < json_result.length; i++) {
                var output = document.createElement("tr");
                outputTbl.appendChild(output);

                var phone = json_result[i].phone;
                var phoneDash = phone.substr(0,3)+"-"+phone.substr(4,3)+"-"+phone.substr(6,6);

                output.innerHTML += "<td>" + json_result[i].id + "</td>";
                output.innerHTML += "<td>" + json_result[i].firstName + "</td>";
                output.innerHTML += "<td>" + json_result[i].lastName + "</td>";
                output.innerHTML += "<td>" + phoneDash + "</td>";
                output.innerHTML += "<td>" + json_result[i].birthday + "</td>";
            }
        }
    )
}
// Call your code.
updateTable();