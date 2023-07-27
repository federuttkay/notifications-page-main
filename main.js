const readBtn = document.querySelector(".read-btn");
const notifications = Array.from(document.querySelectorAll(".notification"));

readBtn.addEventListener("click", allRead);

function allRead() {
	notifications.forEach((notif) => notif.classList.remove("new"));
}

console.log(notifications);
