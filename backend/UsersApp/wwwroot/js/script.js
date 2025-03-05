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
