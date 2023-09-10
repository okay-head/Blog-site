export default function triggerAlert(classVars='bg-[var(--gray-400)]', txt='This is an alert') {
  const box = document.getElementById('alert-box')
  console.log(box)
  box.classList.add(classVars)
  box.classList.add('fade-in')
  box.childNodes[1].textContent = txt
  setTimeout(() => {
    box.classList.remove('fade-in')
  },2000);
}