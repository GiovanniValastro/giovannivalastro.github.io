function validate(){
     
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  let submit = document.getElementById("submit");

  submit.addEventListener("click", function(e){
    e.preventDefault()
      
      if(name.value == "" || email.value == "" || message.value == ""){
        error();
      }

      else{
        sendmail(name.value, email.value, message.value)
        success();  
      }
  })
}

validate()

function sendmail(name, email, message){
  emailjs.send("service_bhaooag","template_w1b10tt",{
  to_name: name,
  from_name: email,
  message: message,
  });
}

function success(){
  swal({
    title: "Good job!",
    text: "Sucessfully email send!",
    icon: "success",
    button: "OK!",
    });
}

function error(){
   swal({
    title: "Error!",
    text: "Please try again!",
    icon: "error",
    button: "OK!",
    });
}


