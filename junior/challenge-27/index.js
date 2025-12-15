const viewsNumber = document.querySelector(".viewsNumber");
const pricingNumber = document.querySelector(".pricingNumber");
const slider = document.querySelector(".slider");
const billingCheckbox = document.querySelector('.switch input');


slider.addEventListener("input",()=>{
    viewsNumber.textContent = slider.value*10_000;
    updateSliderBack(slider);
    pricingNumber.textContent = calculatePrice(slider.value,billingCheckbox.checked);
});

billingCheckbox.addEventListener("change",()=>{
    pricingNumber.textContent = calculatePrice(slider.value,billingCheckbox.checked);
});

function calculatePrice(sliderValue,isReduction){
    return "$" + (sliderValue*(1 - 0.25*isReduction)).toFixed(2)
}

function updateSliderBack(slider){

    const value = slider.value;

    slider.style.background = `
    linear-gradient(
      to right,
      var(--color-primary-soft-cyan) 0%,
      var(--color-primary-soft-cyan) ${value}%,
      var(--color-slider-empty) ${value}%,
      var(--color-slider-empty) 100%
    )
  `;

}

updateSliderBack(slider);