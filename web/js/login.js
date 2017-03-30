<!-- AJAX Post -->

function hideFunction() {
    $("#hideLogout").hide();
}
hideFunction()

function login() {

    var url = "api/set_login_servlet";

    var loginKey = 'loginId';
    var loginId = $("#loginId").val();

    var dataToServer = {loginKey : loginKey, loginId : loginId};

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        // $("#sessionKey").val("");
        $("#loginId").val("");
        getLogin();
    });
}

function getLogin() {

    var url = "api/get_login_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);

        var data = dataFromServer.trim();
        $('#getLoginInfo').text("You are logged in as '" + data + "'.");

        if (data === "null" || data === "")
        {
            $("#hideLogout").hide();
        }
        else
        {
            $("#hideLogout").show();
        }
    });
}

function logout() {

    var url = "api/logout_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
    });
    getLogin();
}

getLogin();


button = $('#getLogin');
button.on("click", getLogin);

button = $('#login');
button.on("click", login);

button = $('#logout');
button.on("click", logout);