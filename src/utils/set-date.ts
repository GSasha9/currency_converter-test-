export function setDate() {
  const headerDate = document.querySelector(".header__date-input");

  if (!(headerDate instanceof HTMLInputElement)) return;
  const todaysDate = new Date();

  const formattedDate = todaysDate.toISOString().split("T")[0];

  headerDate.value = formattedDate;
}
