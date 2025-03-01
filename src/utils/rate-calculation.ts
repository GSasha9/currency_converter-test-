export function rateCalculation(value: number): number | 0 {
  const amountInput = document.querySelector(".amount__input");

  //const date = document.querySelector('.currency__select');

  if (
    !(amountInput instanceof HTMLInputElement) ||
    amountInput.value.trim() === ""
  )
    return 0;

  const inputAmount = parseFloat(amountInput.value);

  if (isNaN(inputAmount)) return 0;

  return Math.round(value * inputAmount * 100) / 100;
}
