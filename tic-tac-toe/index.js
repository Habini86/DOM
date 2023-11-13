const form = document.querySelector('form')
const section = document.querySelector('section')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const nomeJogador1 = document.querySelector('input[name=name-jogador-1]').value
  const nomeJogador2 = document.querySelector('input[name=name-jogador-2]').value

  escolherJogadorInicial(nomeJogador1, nomeJogador2)

  form.reset
  form.style.display = 'none'
  section.style.display = ''
})

const escolherJogadorInicial = (nomeJogador1, nomeJogador2) => {
  const jogador1 = document.getElementById('nome-jogador-1')
  jogador1.textContent += nomeJogador1

  const jogador2 = document.getElementById('nome-jogador-2')
  jogador2.textContent += nomeJogador2

  const numeroAleatorio = Math.round(Math.random())

  if (numeroAleatorio === 0) {
    jogador2.classList.add('text-h1')
    jogador2.textContent += ' (O)'

    jogador1.textContent += ' (X)'
  } else {
    jogador1.classList.add('text-h1')
    jogador1.textContent += ' (O)'

    jogador2.textContent += ' (X)'
  }
}

let jogadorAtual = 1
let count = 0
let matriz = new Array(3).fill(null).map(() => new Array(3).fill(-1))

const markCell = (ev) => {
  if (jogadorAtual === 1) {
    const span = document.createElement('span')
    span.textContent = 'X'
    span.classList.add('text-tic-tac')
    span.classList.add('text-tic-tac-x')
    ev.target.appendChild(span)
    ev.target.disabled = true
    
    const posicao = ev.target.id.slice(-1)
    if (posicao < 4) {
      matriz[0][posicao - 1] = 1
    }
    else if (posicao < 7) {
      matriz[1][posicao - 4] = 1
    }
    else {
      matriz[2][posicao - 7] = 1
    }
  }
  else {
    const svg = `<svg class="text-tic-tac-O" height="100" width="100">
                    <circle cx="50" cy="50" r="40" stroke="rgb(80, 165, 47)" stroke-width="5" fill="none" />
                 </svg>`
    ev.target.innerHTML = svg
    ev.target.disabled = true

    const posicao = ev.target.id.slice(-1)
    if (posicao < 4) {
      matriz[0][posicao - 1] = 0
    }
    else if (posicao < 7) {
      matriz[1][posicao - 4] = 0
    }
    else {
      matriz[2][posicao - 7] = 0
    }
  }
  visibilyName()
  jogadorAtual = jogadorAtual === 1 ? 0 : 1
  
  count++
  if (count > 4) {
    const result = verificaVitoria()
    
    if (result === 1 || result === 0) {
      const h1SemClasse = [...document.querySelectorAll('h1')].find(h1 => h1.className)
      const jogador = h1SemClasse.textContent
      const nome = jogador.replace("Vez do", "").trim()

      alert(`${nome} venceu!`)
      resetTic()
      count = 0
      jogadorAtual = 1
    }
    else if (count === 9) {
      alert('Deu velha!')
      resetTic()
      count = 0
      jogadorAtual = 1
    }
  }
}

const verificaVitoria = (tabuleiro = matriz) => {
  for(let i = 0; i < 3; i++) {
      if(tabuleiro[i][0] !== -1 && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2]) {
          return tabuleiro[i][0]
      }
  }

  for(let i = 0; i < 3; i++) {
      if(tabuleiro[0][i] !== -1 && tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i]) {
          return tabuleiro[0][i]
      }
  }

  if(tabuleiro[0][0] !== -1 && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]) {
      return tabuleiro[0][0]
  }
  if(tabuleiro[0][2] !== -1 && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]) {
      return tabuleiro[0][2]
  }

  return -1
}

const btnsTicTac = document.querySelectorAll('.btn-tic-tac')
Array.from(btnsTicTac).forEach((btn) => {
  btn.addEventListener('click', markCell)
})

const visibilyName = () => {
  const jogador1 = document.getElementById('nome-jogador-1')
  const jogador2 = document.getElementById('nome-jogador-2')

  jogador1.classList.toggle('text-h1')
  jogador2.classList.toggle('text-h1')
}

const resetTic = () => {
  section.style.display = 'none'

  const jogador1 = document.getElementById('nome-jogador-1')
  jogador1.textContent = 'Vez do '
  jogador1.classList.remove('text-h1')

  const jogador2 = document.getElementById('nome-jogador-2')
  jogador2.textContent = 'Vez do '
  jogador2.classList.remove('text-h1')

  form.style.display = ''

  matriz = new Array(3).fill(null).map(() => new Array(3).fill(-1))

  Array.from(btnsTicTac).forEach((btn) => {
    btn.childNodes.forEach((btnChild) => {
      btnChild.remove()
    })
    btn.disabled = false
  })
}