function getDateValue() : string {
  const dateInput = document.querySelector(".header__date");

  if (!(dateInput instanceof HTMLInputElement)) {
    console.warn(
      "Element '.header__date' not found."
    );

    return null;
  }
  console.log(dateInput.value);

  return dateInput.value;
}

export { getDateValue };
