document.addEventListener("DOMContentLoaded", () => {
    const inviteButton = document.querySelector(".InviteFriend");

    if (inviteButton) {
        inviteButton.addEventListener("click", () => {
            const inviteLink = window.location.href; 
            navigator.clipboard.writeText(inviteLink).then(() => {
                alert("Линкът е копиран в клипборда! Споделете го с приятел.");
            }).catch((error) => {
                alert("Неуспешно копиране на линка. Моля, опитайте отново.");
                console.error("Error copying link: ", error);
            });
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "test@example.com" && password === "password123") {
            alert("Успешен вход!");
            window.location.href = "/dashboard"; 
        } else {
            alert("Грешен имейл или парола. Моля, опитайте отново.");
        }
    });
});


