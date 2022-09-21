const viewBtn = document.querySelector(".view-modal");
const popup = document.querySelector(".popup");
const close = popup.querySelector(".close");
const field = popup.querySelector(".field");
const input = popup.querySelector("input");
const copy = popup.querySelector("button");

viewBtn.onclick = () => {
  popup.classList.toggle("show");
}
close.onclick = () => {
  viewBtn.click();
}

copy.onclick = () => {
  input.select();

  if (document.execCommand("copy")) {
    field.classList.add("active");
    copy.innerText = "Copied";

    setTimeout(() => {
      field.classList.remove("active");
      copy.innerText = "Copy";
      window.getSelection().removeAllRanges();
    }, 3000);
  }
}
