export function setDate() {
  const headerDate = document.querySelector(".header__date");

  if (!(headerDate instanceof HTMLInputElement)) return;
  const todaysDate = new Date();

  const formattedDate = todaysDate.toISOString().split("T")[0];

  console.log(formattedDate);
  headerDate.value = formattedDate;
}
