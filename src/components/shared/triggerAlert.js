export default function triggerAlert(
  classVars = 'bg-[var(--gray-100)]',
  txt = 'This is an alert'
) {
  const box = document.getElementById('alert-box')
  box.classList.add(classVars)
  box.classList.add('fade-in')
  box.childNodes[1].textContent = txt
  setTimeout(() => {
    box.classList.remove('fade-in')
    box.classList.remove(classVars)
  }, 1500)
}
