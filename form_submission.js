function submitt() {
    event.preventDefault();

    var name = $('#name').val();
    var lastName = $('#last_name').val();
    var mobile = $('#mobile').val();
    var email = $('#email').val();
    var parentName = $('#parent_name').val();
    var classId = $('#class_id').val();
    var academicYear = $('#academic_year').val();
    var gender = $('#gender').val();
    var message = $('#message').val();
    var source = "Website"; // Define the source variable here

    // Check if all fields are filled
    if (!name || !lastName || !mobile || !email || !parentName || !classId || !academicYear || !gender || !message) {
        Swal.fire('Missing Fields!', 'Please make sure all fields are filled out.', 'warning');
        return;
    }

    // Proceed with submission


    $.ajax({
        url: 'submit_form.php', // URL of the PHP file
        type: 'POST',
        data: {
            academic_year: academicYear,
            student_name: name,
            student_last_name: lastName,
            gender: gender,
            parent_name: parentName,
            mobile_number: mobile,
            email: email,
            class_id: classId,
            message: message,
            source: source, // Use the variable defined earlier
            api_key: "1fEkQiYkD7Fqyrid06BFXccK1QdiIaXh"
        },


     
        csuccess: function (response) {
            if (response.status === "200") {
                window.location.href = 'thankyou.html';
            } else {
                Swal.fire('Error!', 'An error occurred during submission.', 'error');
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            Swal.fire('Error!', 'An error occurred during submission.', 'error');
            console.log(textStatus, errorThrown);
        }
    });
}
