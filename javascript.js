document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let feedback = document.getElementById("feedback").value;

    if (name && email && feedback) {
        console.log("Form Data:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Feedback:", feedback);

        document.getElementById("responseMessage").innerText = `Thank you ${name} for your feedback!`;
    } else {
        document.getElementById("responseMessage").innerText = "Please fill out all fields.";
    }
});
