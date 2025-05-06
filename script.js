document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = document.getElementById('icon');
    const body = document.body;
    const logo = document.getElementById('logo'); // Ensure the logo element is targeted

    // Check for saved user preference, if any
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
    body.classList.add(currentTheme);

    // Set the icon and logo style based on the saved preference
    if (currentTheme === 'dark') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    // Theme toggle functionality
    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark');
        body.classList.toggle('light');

        // Change the icon based on the current class
        if (body.classList.contains('dark')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        }
        themeToggle.setAttribute('aria-pressed', body.classList.contains('dark'));
    });

    // Tab functionality
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    // Function to remove 'active' class from all buttons and content
    function removeActiveClasses() {
        buttons.forEach(button => button.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
    }

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            removeActiveClasses();
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Debugging (Optional): Log the current theme and body classes
    console.log('Loaded theme:', currentTheme);
    console.log('Body classes on load:', body.className);
});
//form


(function(){
    emailjs.init("kX6-inefi3-GrydIz"); // 🔁 Replace with your actual EmailJS Public Key
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm("service_br9y2i4", "template_uogfek", this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      }, (error) => {
        alert("Failed to send message. Error: " + error.text);
      });
  });
