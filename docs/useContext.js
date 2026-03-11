hljs.highlightAll()

function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre')
  navigator.clipboard.writeText(pre.innerText).then(() => {
    btn.textContent = '✓ Copiado'
    btn.classList.add('copied')
    setTimeout(() => {
      btn.textContent = 'Copiar'
      btn.classList.remove('copied')
    }, 2000)
  })
}

function toggleSolution(btn) {
  const block = btn.nextElementSibling
  const isOpen = block.classList.contains('open')
  block.classList.toggle('open')
  btn.textContent = isOpen ? '👁 Ver solução' : '🙈 Ocultar solução'
  if (!isOpen) hljs.highlightAll()
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.classList.toggle('sidebar-open')
}

// Destaque do link ativo no sidebar
const links = document.querySelectorAll('.sidebar-link')
const sections = document.querySelectorAll('.section')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.remove('active'))
      const id = entry.target.id
      const link = document.querySelector(`.sidebar-link[href="#${id}"]`)
      if (link) link.classList.add('active')
    }
  })
}, { rootMargin: '-40% 0px -55% 0px' })

sections.forEach(s => observer.observe(s))

