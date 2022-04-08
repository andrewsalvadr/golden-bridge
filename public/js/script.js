// // EmailJS Contact Valid Form

function sendMail(params) {
    var tempParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    emailjs.send('service_qlk1ry8','template_hiljcmc', tempParams)
    .then(function(res){
        console.log("success", res.status);
        location.reload()
    })

}

