$(document).ready(load);

function load() {
    $('#container').load('./about.html');

    $('#contactForm').on('submit', function(e) {
        console.log('heello');
        var messageBody = '';
        $.each($('#contactForm').serializeArray(), function(i, field) {
          messageBody += field.name + ": " + field.value + '%0D%0A';
        });
      
        var hreflink = "mailto:faiza@outlook.pt?Subject=New%20Recruitment&body=" + messageBody;
        $('.mail').attr("href", hreflink);
        e.preventDefault();
        $('.mail')[0].click();
      });
}

