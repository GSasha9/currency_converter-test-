import { createElement } from "./create_element";

function getDateValue() : string {
  const headerMessage = document.querySelector('.header__message');

  headerMessage.textContent = '';

  const dateInput = document.querySelector(".header__date");

  if (!(dateInput instanceof HTMLInputElement)) {
    console.warn(
      "Element '.header__date' not found."
    );

    return null;
  }
  const selectedDate = new Date(dateInput.value);

  const today = new Date();

  const mlsToDays = 1000 * 60 * 60 * 24;

  const periodEnd = Math.floor(today.getTime() /  mlsToDays);

  const periodStart = Math.floor(selectedDate.getTime() / mlsToDays);

  const daysRange = 14;

  if(periodEnd - periodStart > daysRange || periodEnd - periodStart < 0) {
    headerMessage.textContent = 'The date should be less than two weeks';
    dateInput.value = new Date((periodEnd - daysRange) * mlsToDays).toISOString().split('T')[0];
    setTimeout(function(){
      headerMessage.textContent = '';
    },5000)
  }

  return dateInput.value;
}

export { getDateValue };
