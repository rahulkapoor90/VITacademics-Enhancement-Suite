// Saves options to chrome.storage
function save_options() {
    //var username = document.getElementById('username').value;
        var username = $('#username').val()
        //var password = document.getElementById('password').value;
        var password =  $('#password').val()
        //Insted the above 2 calls we can use .next() method without again traversing
        //var password = username.nextElementSibling.val()

    chrome.storage.sync.set({
        username: username,
        password: password
    }, function () {
        // Update status to let user know options were saved.
        //var status = document.getElementById('status');
        var status = $('#status')[0]
        status.textContent = 'Credentials saved.';
        setTimeout(function () {
            status.style.display = 'none';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
jQuery(document).ready(
        function restore_options() {
            // Use default value color = 'red' and likesColor = true.
            chrome.storage.sync.get({
                username: "",
                password: ""
            }, function (items) {
                //document.getElementById('username').value = items.username;
                //document.getElementById('password').value = items.password;

                //Using jquery
                $('#username').val(items.username)
                $('#password').val(items.password)
            });
        }
    )
    //document.addEventListener('DOMContentLoaded', restore_options);

//document.getElementById('save').addEventListener('click',save_options);
$('#save').on('click', save_options)
