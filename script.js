

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("form-message");

    if (username !== "" && email !== "") {

        message.textContent =
            "Thank you for contacting CyberShield, " +
            username +
            "! We will contact you at " +
            email + ".";

        message.style.color = "#00e5a0";

        contactForm.reset();

        document.getElementById("discount-message").textContent = "";

        document.getElementById("char-count").textContent =
            "100 characters remaining";

    } else {

        message.textContent =
            "Please enter your name and email.";

        message.style.color = "red";

    }

});



const serviceRows = document.querySelectorAll(
    "#service-table tbody tr"
);

serviceRows.forEach(function(row) {

    row.addEventListener("mouseover", function() {

        row.style.backgroundColor = "#17476a";

    });

    row.addEventListener("mouseout", function() {

        row.style.backgroundColor = "";

    });

});



const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

});



const serviceCheckboxes = document.querySelectorAll(".service-item");

const totalDisplay = document.getElementById("total");

function calculateTotal() {

    let total = 0;

    serviceCheckboxes.forEach(function(item) {

        if (item.checked) {

            total += Number(item.value);

        }

    });

    totalDisplay.textContent = "$" + total;

}

serviceCheckboxes.forEach(function(item) {

    item.addEventListener("change", calculateTotal);

});



const birthYearInput = document.getElementById("birth-year");

const discountMessage = document.getElementById("discount-message");

birthYearInput.addEventListener("input", function() {

    const yearText = birthYearInput.value.trim();

    const birthYear = parseInt(yearText);

    const currentYear = 2026;

    if (!/^\d{4}$/.test(yearText)) {

        discountMessage.textContent = "";
        return;

    }

    if (birthYear < 1900 || birthYear > currentYear) {

        discountMessage.textContent =
            "Please enter a valid birth year.";

    } else {

        const age = currentYear - birthYear;

        if (age >= 18 && age <= 25) {

            discountMessage.textContent =
                "Congratulations! You qualify for the student discount.";

        } else if (age >= 60) {

            discountMessage.textContent =
                "Congratulations! You qualify for the senior discount.";

        } else {

            discountMessage.textContent =
                "No special age discount available. Your age is " +
                age + ".";

        }

    }

});



const readMoreButton = document.getElementById("read-more");

const extraText = document.getElementById("extra-text");

readMoreButton.addEventListener("click", function() {

    extraText.classList.toggle("hidden");

    if (extraText.classList.contains("hidden")) {

        readMoreButton.textContent = "Read More";

    } else {

        readMoreButton.textContent = "Read Less";

    }

});



const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory = button.dataset.filter;

        serviceRows.forEach(function(row) {

            if (
                selectedCategory === "all" ||
                row.dataset.category === selectedCategory
            ) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});



const openingStatus = document.getElementById("opening-status");

function updateOpeningStatus() {

    const currentHour = new Date().getHours();

    if (currentHour >= 8 && currentHour < 22) {

        openingStatus.textContent =
            "● We Are Open!";

        openingStatus.className =
            "status-box open-status";

    } else {

        openingStatus.textContent =
            "● Closed - Open at 8 AM";

        openingStatus.className =
            "status-box closed-status";

    }

}

updateOpeningStatus();



const specialNotes = document.getElementById("special-notes");

const charCount = document.getElementById("char-count");

specialNotes.value = "";

specialNotes.addEventListener("input", function() {

    const remaining = 100 - specialNotes.value.length;

    charCount.textContent =
        remaining + " characters remaining";

});
// Commit 2
// Commit 3
