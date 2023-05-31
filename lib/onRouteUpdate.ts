export const onRouteUpdate = ({ location }) => {
  const baseUrl = 'https://equk.co.uk'
  // modify canonical link element
  const domCanonical = document.querySelector(`link[rel='canonical']`)
  if (domCanonical) {
    const existingValue = domCanonical.getAttribute(`href`)
    if (existingValue && baseUrl) {
      let value = `${baseUrl}${location.pathname}`
      value += location.hash
      domCanonical.setAttribute(`href`, `${value}`)
    }
  }
  // modify og:url element
  const domOgurl = document.querySelector(`meta[property='og:url']`)
  if (domOgurl) {
    const existingValue = domOgurl.getAttribute(`content`)
    if (existingValue && baseUrl) {
      let value = `${baseUrl}${location.pathname}`
      value += location.hash
      domOgurl.setAttribute(`content`, `${value}`)
    }
  }
}
