document.getElementById("feedbackForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let feedback = document.getElementById("feedback").value;

    if(name && email && feedback) {
        document.getElementById("responseMessage").innerText = "Thank you for your feedback!";
    } else {
        document.getElementById("responseMessage").innerText = "Please fill out all fields.";
    }
});
