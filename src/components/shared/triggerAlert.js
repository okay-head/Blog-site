export default function triggerAlert(classVars = [], txt = 'This is an alert') {
  const box = document.getElementById('alert-box')
  box.classList.remove('hidden')
  box.classList.add('fade-in', ...classVars)

  box.childNodes[1].textContent = txt
  setTimeout(() => {
    box.classList.remove('fade-in', ...classVars)
  }, 1500)
}
