function updateCalculator() {
    var interest = 0.07;
    var amount = $('#amount').val();
    var years = $('#years').val();
    var part1 = interest * amount;
    var part2 = 1 - Math.pow(1 + interest, - years);
    var totalYear = parseInt(part1 / part2);
    var totalMonth = parseInt(totalYear / 12);
    var totalAmount = totalYear * years;
    var information = "The total amount will be " + totalAmount + " NOK.";
    var information2 = "...with an interest on 7 %.";

    $('#yearResult').val(years);
    $('#amountResult').val(amount);
    $('#yearly').val(totalYear);
    $('#monthly').val(totalMonth);
    $('#output1').html(information);
    $('#output2').html(information2);
}

function validateSocialSecurity() {
    var socialSecurityRegEx = /^[0-9]{11}$/;
    var socialSecurityInput = $('#socialSecurity').val();

    if(socialSecurityRegEx.test(socialSecurityInput)){
        $('#socialSecurityGlyph').attr('class', 'glyphicon glyphicon-ok form-control-feedback');
        if ($('#socialSecurityLabel').attr('class') === 'form-group has-success has-feedback') {
            return true;
        }
        else {
            $('#socialSecurityLabel').attr('class', 'form-group has-success has-feedback');
        }
        if ($('#socialSecurityFeedback').is(':hidden')) {
            return true;
        }
        else {
            $('#socialSecurityFeedback').text('Perfect!');
            $('#socialSecurityFeedback').css('background-color', 'green');
            $('#socialSecurityFeedback').delay(400).slideToggle(300);
            return true;
        }
    }
    else {
        $('#socialSecurityGlyph').attr('class', 'glyphicon glyphicon-remove form-control-feedback');
        $('#socialSecurityLabel').attr('class', 'form-group has-error has-feedback');
        $('#apply').attr('disabled', true);
        $('#apply').text('Oh, not everything is filled out correctly.');
        $('#apply').css('background-color', '#cbab36');
        if ($('#socialSecurityFeedback').is(':hidden')) {
            $('#socialSecurityFeedback').css('background-color', '#cbab36');
            $('#socialSecurityFeedback').text('The social security number must be 11 digits.');
            $('#socialSecurityFeedback').slideToggle(300);
            return false;
        }
        else{
            return false;
        }
    }
}

function validatePhone() {
    var phoneRegEx = /^[0-9]{8}$/;
    var phoneInput = $('#phone').val();

    if (phoneRegEx.test(phoneInput)) {
        $('#phoneGlyph').attr('class', 'glyphicon glyphicon-ok form-control-feedback');
        if ($('#phoneLabel').attr('class') === 'form-group has-success has-feedback') {
            return true;
        }
        else {
            $('#phoneLabel').attr('class', 'form-group has-success has-feedback');
        }
        if ($('#phoneFeedback').is(':hidden')) {
            return true;
        }
        else {
            $('#phoneFeedback').text('Perfect!');
            $('#phoneFeedback').css('background-color', 'green');
            $('#phoneFeedback').delay(400).slideToggle(300);
            return true;
        }
    }
    else {
        $('#phoneGlyph').attr('class', 'glyphicon glyphicon-remove form-control-feedback');
        $('#phoneLabel').attr('class', 'form-group has-error has-feedback');
        $('#apply').attr('disabled', true);
        $('#apply').text('Oh, not everything is filled out correctly.');
        $('#apply').css('background-color', '#cbab36');
        if ($('#phoneFeedback').is(':hidden')) {
            $('#phoneFeedback').css('background-color', '#cbab36');
            $('#phoneFeedback').text('The phone number must be 8 digits.');
            $('#phoneFeedback').slideToggle(300);
            return false;
        }
        else {
            return false;
        }
    }
}

function validateEmail() {
    var emailRegEx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var emailInput = $('#email').val();
    
    if (emailRegEx.test(emailInput)) {
        $('#emailGlyph').attr('class', 'glyphicon glyphicon-ok form-control-feedback');
        if ($('#emailLabel').attr('class') === 'form-group has-success has-feedback')
        {
            return true;
        }
        else {
            $('#emailLabel').attr('class', 'form-group has-success has-feedback');
        }
        if ($('#emailFeedback').is(':hidden')) {
            return true;
        }
        else {
            $('#emailFeedback').text('Perfect!');
            $('#emailFeedback').css('background-color', 'green');
            $('#emailFeedback').delay(400).slideToggle(300);
            return true;
        }
    }
    else {
        $('#emailGlyph').attr('class', 'glyphicon glyphicon-remove form-control-feedback');
        $('#emailLabel').attr('class', 'form-group has-error has-feedback');
        $('#apply').attr('disabled', true);
        $('#apply').text('Oh, not everything is filled out correctly.');
        $('#apply').css('background-color', '#cbab36');

        if ($('#emailFeedback').is(':hidden')) {
            $('#emailFeedback').css('background-color', '#cbab36');
            $('#emailFeedback').text('The email must be something@server.xxx');
            $('#emailFeedback').slideToggle(300);
            return false;
        }
        else {
            return false;
        }
    }
}

function validateTotal() {
    if (validateSocialSecurity() && validatePhone() && validateEmail()) {
        $('#apply').attr('disabled', false);
        $('#apply').text('All checks out! Click to apply!');
        $('#apply').css('background-color', 'green');
    }
    else {
        $('#apply').attr('disabled', true);
        $('#apply').text('Oh, not everything is filled out correctly.');
        $('#apply').css('background-color', '#cbab36');
    }
}

function goBack() {
    $('#secondDiv').slideToggle(800);
    $('#firstDiv').delay(1000).slideToggle(1000);
}

function registerApplication() {
    var person = {
        socialSecurity: $('#socialSecurity').val(),
        phone: $('#phone').val(),
        email: $('#email').val(),
        amount: $('#amount').val(),
        years: $('#years').val(),
        monthly: $('#monthly').val()
    };
    $.ajax({
        url: '/api/Person/',
        type: 'POST',
        data: JSON.stringify(person),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            $('#firstDiv').slideToggle(1000);
            if (data === 'Not valid model') {
                $('#resultDiv').html('The data provided is not valid. Try again');
            }
            else if (data === 'ERROR') {
                $('#resultDiv').html('Something went wrong...');
            }
            else if (data === 'Already exists.') {
                $('#resultDiv').html('You have already applied.');
                $('#resultSubDiv').html('Call customer support if this is not correct.');
            }
            else {
                $('#resultDiv').html('Great! Your application is posted!');
                $('#resultSubDiv').html('This is the information in your application:');
                var tableString = '<table class="table table-bordered" id="confirmationTable">';
                tableString += '<thead>';
                tableString += '<th>Social security</th>';
                tableString += '<th>Phone</th>';
                tableString += '<th>Email</th>';
                tableString += '<th>Amount</th>';
                tableString += '<th>Years</th></thead>';
                tableString += '<tbody><tr><td>' + person.socialSecurity + '</td>';
                tableString += '<td>' + person.phone + '</td>';
                tableString += '<td>' + person.email + '</td>';
                tableString += '<td>' + person.amount + '</td>';
                tableString += '<td>' + person.years + '</td></tr></tbody></table>';
                $('#tableResult').html(tableString);
            }
            $('#secondDiv').delay(1000).slideToggle(800);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z + '\n');
        }
    });
}

function getAllApplications() {
    $.ajax({
        url: '/api/Person/',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            showAll(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}

function showAll(application) {
    var strResult;
    strResult = "<table class='table table-boarded tableDiv'>";
    strResult += "<thead>";
    strResult += "<th>Social Security</th><th>Phone</th>";
    strResult += "<th>Email</th><th>Amount</th>";
    strResult += "<th>Interest</th><th>Years downpayment</th>";
    strResult += "<th>Monthly</th></thead>";

    $.each(application, function (i, p) {
        strResult += "<tbody><tr><td>" + p.socialSecurity + "</td><td> " + p.phone + "</td>";
        strResult += "<td>" + p.email + "</td><td>" + p.amount + "</td>";
        strResult += "<td>" + p.interest + "%</td><td>" + p.years + "</td>";
        strResult += "<td>" + p.monthly + "</td></tr>";
    });
    strResult += "</tbody></table>";
    $("#result").html(strResult);
    $('#mainHeading').text('List of all applications')
}

function scrollBottom() {
    $('html, body').delay(500).animate({
        scrollTop: 9999}, 'slow');
}

function expandForm() {
    $('#submitDiv').slideToggle(1000, scrollBottom());
    $('#continue').text("Just fill in the form below!");
    $('#continue').css('background-color', 'green');
}