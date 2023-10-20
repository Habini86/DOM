const form = document.querySelector("form")
let count = 1

form.addEventListener("submit", function (event) {
  event.preventDefault()
  const posicao = document.querySelector("input[name='posicao']:checked").value
  const nome = document.getElementById("nome").value
  const numero = document.getElementById("numero").value

  const section = document.querySelector("section")

  if (count === 1) {
    const h2 = document.createElement("h2")
    h2.textContent = "Lista dos Jogadores"
    h2.className = "remove"
    section.appendChild(h2)
  }

  const ul = document.createElement("ul")
  ul.id = "lista-" + count
  ul.style = "list-style-type: none;"

  const text = document.createElement("text")
  text.textContent = "Jogador"
  text.style = "font-weight: bold;"
  ul.appendChild(text)

  const li1 = document.createElement("li")
  li1.textContent = `Nome do Jogador: ${nome}`
  ul.appendChild(li1)

  const li2 = document.createElement("li")
  li2.textContent = `Posição do Jogador: ${posicao}`
  ul.appendChild(li2)

  const li3 = document.createElement("li")
  li3.textContent = `Número da Camisa: ${numero}`
  li3.id = "numero-" + numero
  ul.appendChild(li3)

  section.appendChild(ul)

  if (count === 1) {
    const h2 = document.createElement("h2")

    h2.textContent = "Retirar da Escalação"
    h2.className = "remove"
    document.body.appendChild(h2)

    const label = document.createElement("label")
    label.for = "numero-1"
    label.className = "remove"
    label.innerText = "Número da Camisa "

    const input = document.createElement("input")
    input.type = "number"
    input.id = "numero-1"
    input.className = "remove"
    input.name = "numero-1"
    input.min = "1"
    input.oninput = () => (this.value = Math.abs(this.value))

    const btn = document.createElement("button")
    btn.type = "button"
    btn.innerText = "Desescalar Jogador"
    btn.className = "remove"
    btn.onclick = () => {
      const numero = document.getElementById("numero-1").value
      const filho = document.getElementById("numero-" + numero)

      if (
        filho?.parentNode != undefined &&
        window.confirm("Deseja desescalar o jogador " + numero + "?")
      ) {
        filho.parentNode.remove()
        count--

        document.getElementById("numero-1").value = ""

        if (count === 1) {
          const remove = document.getElementsByClassName("remove")

          Array.from(remove).forEach((elemento) => elemento.remove())
        }
      } else {
        window.alert("Número inválido!")
      }
    }

    const br = document.createElement("br")
    br.className = "remove"
    const br2 = document.createElement("br")
    br2.className = "remove"

    document.body.append(h2, label, input, br, br2, btn)
  }
  count++
  form.reset()
})
