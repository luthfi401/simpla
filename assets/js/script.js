// Add Record

function addRecord() {
    // get values
    var nm_pelapor = $("#nm_pelapor").val();
    nm_pelapor = nm_pelapor.trim();
    var ruang = $("#ruang").val();
    ruang = ruang.trim();
    var no_kom = $("#no_kom").val();
    no_kom = no_kom.trim();
    var ket = $("#ket").val();
    ket = ket.trim();
 
    if (nm_pelapor == "") {
        alert("First name field is required!");
    }
    else if (ruang == "") {
        alert("Last name field is required!");
    }
    else if (no_kom == "") {
        alert("no_kom field is required!");
    }
      else if (ket == "") {
        alert("no_kom field is required!");
    }

    else {
        // Add record
        $.post("create.php", {
            nm_pelapor: nm_pelapor,
            ruang: ruang,
            no_kom: no_kom,
            ket: ket
        }, function (data, status) {
            // close the popup
            $("#add_new_record_modal").modal("hide");
 
            // read records again
            readRecords();
 
            // clear fields from the popup
            $("#nm_pelapor").val("");
            $("#ruang").val("");
            $("#no_kom").val("");
            $("#ket").val("");
        });
    }
    2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
function UpdateUserDetails() {
    // get values
    var first_name = $("#update_first_name").val();
    first_name = first_name.trim();
    var last_name = $("#update_last_name").val();
    last_name = last_name.trim();
    var email = $("#update_email").val();
    email = email.trim();
 
    if (first_name == "") {
        alert("First name field is required!");
    }
    else if (last_name == "") {
        alert("Last name field is required!");
    }
    else if (email == "") {
        alert("Email field is required!");
    }
    else {
        // get hidden field value
        var id = $("#hidden_user_id").val();
 
        // Update the details by requesting to the server using ajax
        $.post("ajax/update.php", {
                id: id,
                first_name: first_name,
                last_name: last_name,
                email: email
            },
            function (data, status) {
                // hide modal popup
                $("#update_user_modal").modal("hide");
                // reload Users by using readRecords();
                readRecords();
            }
        );
    }
}
function GetUserDetails(id) {
    // Add User ID to the hidden field
    $("#hidden_user_id").val(id);
    $.post("ajax/details.php", {
            id: id
        },
        function (data, status) {
            // PARSE json data
            var user = JSON.parse(data);
            // Assign existing values to the modal popup fields
            $("#update_first_name").val(user.first_name);
            $("#update_last_name").val(user.last_name);
            $("#update_email").val(user.email);
        }
    );
    // Open modal popup
    $("#update_user_modal").modal("show");
}
    // READ records
function readRecords() {
    $.get("read.php", {}, function (data, status) {
        $(".records_content").html(data);
        });
    }

}