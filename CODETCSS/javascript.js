<title>Personal Information</title>
</head>
  <><body>
    <div id="personalInfo">


      <script>

        let firstName = "Tshepo";
        let lastName = "Sagae";
        let age = 21;
        let email = "Sagaetshepo@gmail.com";
        let address = "39407 Leratong Park, Kimberly, South Africa";


        let personalInfoDiv = document.getElementById("personalInfo");

        let fullNameElement = document.createElement("p");
        fullNameElement.textContent = "Name: " + firstName + " " + lastName;

        let ageElement = document.createElement("p");
        ageElement.textContent = "Age: " + age;

        let emailElement = document.createElement("p");
        emailElement.textContent = "Email: " + email;

        let addressElement = document.createElement("p");
        addressElement.textContent = "Address: " + address;


        personalInfoDiv.appendChild(fullNameElement);
        personalInfoDiv.appendChild(ageElement);
        personalInfoDiv.appendChild(emailElement);
        personalInfoDiv.appendChild(addressElement);
      </script>
    </></body><form id="myForm">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
        <br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
            <br>
              <button type="submit">Submit</button>
            </form>
            
            const form = document.getElementById('myForm');

            form.addEventListener('submit', function(event) {event.preventDefault()};

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email')

            if (!nameInput.value.trim()) {alert('What is Your Name.')};
            return;


            const button = document.getElementById('changeTextButton');
            const heading = document.getElementById('changeableHeading');
            button.addEventListener('click', () ={">"} {heading.textContent = "Click me again for a surprise!"};
            {"}"});

            const submitButton = document.getElementById('submitButton');
            submitButton.addEventListener('click', (event) ={">"} {event.preventDefault()};


            fetch('https://formspree.io/f/xzbnoojj', {method}: 'POST',
            body: new FormData(document.getElementById('A'))
            {"}"})
            .then(response ={">"} { }
            if (response.ok) {alert("Message sent successfully!")};

            document.getElementById('A').reset();
            {"}"} else {alert("Error sending message!")};
            {"}"}
            {"}"})
            .catch(error ={">"} {console.error(error)};
            alert("An error occurred. Please try again later.");
            {"}"});
            {"}"});

            const submitButton = document.getElementById('submitButton');
            const emailInput = document.getElementById('email');

            submitButton.addEventListener('click', (event) ={">"} {event.preventDefault()};

            if (!emailInput.value.includes('@')) {alert("Please enter a valid email address!")};
            return;
            {"}"}

            {"}"});</></></></></>