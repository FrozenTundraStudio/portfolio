function openModal(modalId, caption, description) {
    let modal = document.getElementById(modalId);
    modal.style.display = "flex";
    modal.classList.add("show");
    let title = modal.querySelector(".caption");
    title.innerText = caption;
    let message = modal.querySelector(".caption-description");
    message.innerText = description;
}

function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.classList.remove("show");
    setTimeout(function () {
        modal.style.display = "none";
        modal.querySelector(".caption").innerText = "";
        modal.querySelector(".caption-description").innerText = "";
    }, 300);
}
