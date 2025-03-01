export function getSelectValue(): string {
  const select = document.querySelector(".currency__select");

  if (!(select instanceof HTMLSelectElement)) {
    console.warn("Element '.currency__select' not found");

    return;
  }
  console.log(select.value);

  return select.value;
}
