const divColor = document.querySelector(".gradient_color"),
  selectOption = document.querySelector("#select"),
  input_colors = document.querySelectorAll(".input_colors input"),
  colorInpTwo = document.querySelector(".colors .color_two"),
  textArea = document.querySelector("textarea"),
  btnRefresh = document.querySelector(".btn_refresh"),
  btnCopy = document.querySelector(".btn_copy");

const getRomdomColor = () => {
  let rondomColor = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
  return rondomColor;
};

const getColor = (isRight) => {
  if (isRight) {
    input_colors[0].value = getRomdomColor();
    input_colors[1].value = getRomdomColor();
  }

  let gradient = `linear-gradient(${selectOption.value}, ${input_colors[0].value}, ${input_colors[1].value})`;
  console.log(gradient);
  divColor.style.background = gradient;
  textArea.value = `background: ${gradient}`;
};

input_colors.forEach((input) => {
  input.addEventListener("input", () => getColor(false));
});

selectOption.addEventListener("change", () => getColor(false));

btnRefresh.addEventListener("click", () => getColor(true));

// let rondomColor = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
// input_colors[0].value = rondomColor;
// input_colors[1].value = rondomColor;
// let refreshColor = `linear-gradient(${selectOption.value}, ${input_colors[0].value}, ${input_colors[1].value})`;
// divColor.style.background = refreshColor;
// textArea.value = `background: ${refreshColor}`;

btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(textArea.value);
  btnCopy.innerHTML = `code Copied <i class="fa-solid fa-check"></i>`;
  setTimeout(() => (btnCopy.innerHTML = "copie Code"), 2000);
});
