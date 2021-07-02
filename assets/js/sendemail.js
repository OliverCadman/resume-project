function sendMail(contactForm) {
    emailjs.send(
      "service_clmquj9",
      "template_pwbxo45", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
      },
      "user_MvNDy76Hsda4DpKEIEPeX"
    )
    .then(function(response) {
        console.log('SUCCESS', response);
    }, function(error) {
        console.log("FAILED", error)
    });
  
    return false;
}