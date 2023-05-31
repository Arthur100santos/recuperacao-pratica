const updateButton = document.getElementById("updateDetails");
const btncancelar = document.getElementById("cancelar");
const modal = document.getElementById("modal");

function openCheck(dialog) {
  if (dialog.open) {
  }
}

updateButton.addEventListener("click", () => {
  modal.showModal();
});

btncancelar.addEventListener("click", () => {
  modal.close();
});