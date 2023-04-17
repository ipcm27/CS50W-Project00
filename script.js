const input = document.querySelector(".btn-search");

input.addEventListener("click", search);

function search() {
  console.log(input);
}

function clearPlaceholder(input ){
  input.placeholder = ""
}

