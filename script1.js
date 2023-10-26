// Hire Me Javascript
document.getElementById('emailButton').addEventListener('click', function() {
    var email = "kiran1772002@gmail.com";
    var subject = "Your Subject Here";
    var body = "Your email body text here";
    var mailtoLink = "mailto:" + email + "?subject=" + subject + "&body=" + body;
    window.location.href = mailtoLink;
});