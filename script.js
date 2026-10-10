/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("active");

}


/* ================= SCROLL TO CONTACT ================= */

function scrollToContact() {

    document
        .getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const subject =
        document.getElementById("subject").value;

    const message =
        document.getElementById("message").value;


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please fill in all fields.");

        return;

    }


    alert(
        "Thank you " +
        name +
        "! Your message has been sent successfully."
    );


    contactForm.reset();

});


/* ================= LOGIN ================= */

function openLogin() {

    document.getElementById("loginModal").style.display = "flex";

}


function closeLogin() {

    document.getElementById("loginModal").style.display = "none";

}


function loginUser() {

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;


    if (email === "" || password === "") {

        alert("Please enter your email and password.");

        return;

    }


    alert("Login successful!");

    closeLogin();

}


/* ================= SIGN UP ================= */

function openSignup() {

    document.getElementById("signupModal").style.display = "flex";

}


function closeSignup() {

    document.getElementById("signupModal").style.display = "none";

}


function signupUser() {

    const name =
        document.getElementById("signupName").value;

    const email =
        document.getElementById("signupEmail").value;

    const password =
        document.getElementById("signupPassword").value;


    if (
        name === "" ||
        email === "" ||
        password === ""
    ) {

        alert("Please complete all fields.");

        return;

    }


    alert(
        "Welcome " +
        name +
        "! Your account has been created."
    );


    closeSignup();

}


/* ================= SWITCH LOGIN / SIGNUP ================= */

function switchToSignup() {

    closeLogin();

    openSignup();

}


function switchToLogin() {

    closeSignup();

    openLogin();

}


/* ================= PROJECT ================= */

function viewProject(projectName) {

    alert(
        "You selected: " +
        projectName +
        " project."
    );

}


/* ================= DOWNLOAD CV ================= */

function downloadCV() {

    alert(
        "Your CV download will be available soon."
    );

}


/* ================= CLOSE MODAL ================= */

window.addEventListener("click", function(event) {

    const loginModal =
        document.getElementById("loginModal");

    const signupModal =
        document.getElementById("signupModal");


    if (event.target === loginModal) {

        closeLogin();

    }


    if (event.target === signupModal) {

        closeSignup();

    }

});


/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll(".navbar a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".navbar")
            .classList.remove("active");

    });

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();
                src="https:" /images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                            alt="Team working together"
                        >
                    </div>
                </div>