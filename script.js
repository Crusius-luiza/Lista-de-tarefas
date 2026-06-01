const body = document.querySelector("body");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");
const btnTheme = document.querySelector(".tema");

btn.addEventListener("click", () => {
  const item = document.createElement("li");
  item.textContent = `${input.value} `;
  item.classList = "item";
  list.appendChild(item);
  const btnDel = document.createElement("button");
  btnDel.textContent = "X";
  btnDel.classList = "btnDel";
  item.appendChild(btnDel);
  input.value = " ";
  btnDel.addEventListener("click", () => {
    list.removeChild(item);
  });

  input.focus();
});

btnTheme.addEventListener("click", changeTheme);

function changeTheme() {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
}
