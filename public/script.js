document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;

    if (!name || !message) {
        alert("Both fields are required!");
        return;
    }

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, message })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('confirmName').textContent = data.name;
        document.getElementById('confirmMessage').textContent = data.message;
        document.getElementById('confirmation').style.display = 'block';
    })
    .catch(error => {
        alert("Error submitting data.");
    });
});
