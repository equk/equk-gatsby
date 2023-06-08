export const onRouteUpdate = () => {
  // add label to input checkbox
  const domCheckbox = document.querySelectorAll(`input[type='checkbox']`)
  if (domCheckbox) {
    domCheckbox.forEach((element) => element.setAttribute('aria-label', 'checkbox'))
  }
}
