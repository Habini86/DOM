const form = document.querySelector("form")
const btnAdd = document.getElementById("btn-add")
const section = document.querySelector("section")
let count = 1
let countDev = 1
let desenvolvedores = {}

btnAdd.addEventListener("click", () => {
  const label = document.createElement("label")
  label.htmlFor = "tecnologia-" + count
  label.className = "remove-" + count
  label.textContent = "Nome da Tecnologia"

  const inputText = document.createElement("input")
  inputText.type = "text"
  inputText.name = "tecnologia-" + count
  inputText.id = "tecnologia-" + count
  inputText.className = "remove-" + count
  inputText.required = true

  section.append(label, inputText)

  createBr(count)
  createBr(count)

  const text = document.createElementNS("text")
  text.textContent = "Tempo de Experiência"
  text.style.fontWeight = "bold"
  text.className = "remove-" + count

  section.append(text)
  createBr(count)

  const label1 = document.createElement("label")
  label1.htmlFor = "experiencia-1-" + count
  label1.textContent = "0-2 anos"
  label1.className = "remove-" + count

  const inputRadio1 = document.createElement("input")
  inputRadio1.type = "radio"
  inputRadio1.name = "experiencia-" + count
  inputRadio1.id = "experiencia-1-" + count
  inputRadio1.value = "0-2 anos"
  inputRadio1.required = true
  inputRadio1.className = "remove-" + count

  const label2 = document.createElement("label")
  label2.htmlFor = "experiencia-2-" + count
  label2.textContent = "3-4 anos"
  label2.className = "remove-" + count

  const inputRadio2 = document.createElement("input")
  inputRadio2.type = "radio"
  inputRadio2.name = "experiencia-" + count
  inputRadio2.id = "experiencia-2-" + count
  inputRadio2.value = "3-4 anos"
  inputRadio2.required = true
  inputRadio2.className = "remove-" + count

  const label3 = document.createElement("label")
  label3.htmlFor = "experiencia-3-" + count
  label3.textContent = "5+ anos"
  label3.className = "remove-" + count

  const inputRadio3 = document.createElement("input")
  inputRadio3.type = "radio"
  inputRadio3.name = "experiencia-" + count
  inputRadio3.id = "experiencia-3-" + count
  inputRadio3.value = "5+ anos"
  inputRadio3.required = true
  inputRadio3.className = "remove-" + count

  section.append(label1, inputRadio1)

  createBr(count)

  section.append(label2, inputRadio2)

  createBr(count)

  section.append(label3, inputRadio3)

  createBr(count)
  createBr(count)

  if (count === 1) {
    const btnRemove = document.createElement("button")
    btnRemove.type = "button"
    btnRemove.textContent = "Remover Tecnologias"
    btnRemove.id = "btn-remove"
    btnRemove.addEventListener("click", (ev) => removeItens(ev))

    const div = document.querySelector("div")
    div.appendChild(btnRemove)
  }

  count++
})

const removeItens = (ev) => {
  const remove = document.querySelectorAll(".remove-" + (count - 1))
  Array.from(remove).forEach((element) => {
    element.remove()
  })

  count--

  if (count === 1) ev.target.remove()
}

const createBr = (count) => {
  return (section.appendChild(document.createElement("br")).className =
    "remove-" + count)
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const nomeDesenvolvedor = document.querySelector("input[name='nome']").value
  console.log(`Nome do Dev: ${nomeDesenvolvedor}`)

  const max = count
  debugger
  for (let i = 1; i < max; i++) {
    const btnRemove = document.getElementById("btn-remove")
    if (!desenvolvedores["Desenvolvedor " + countDev]) {
      desenvolvedores["Desenvolvedor " + countDev] = { nome: nomeDesenvolvedor }
    }
    debugger
    if (btnRemove) {
      debugger
      const nomeTecnologia = document.querySelector(
        `input[name='tecnologia-${i}']`
      ).value

      console.log(`Tecnologia ${i}: ${nomeTecnologia}`)
      const experiencia = document.querySelector(
        `input[name='experiencia-${i}']:checked`
      ).value

      console.log(`Experiência: ${experiencia}`)

      desenvolvedores["Desenvolvedor " + countDev][`tecnologia ${i}`] = {
        nome: nomeTecnologia,
        tempoExperiencia: experiencia,
      }

      const remove = document.querySelectorAll(".remove-" + i)
      Array.from(remove).forEach((element) => {
        element.remove()
      })
    }
  }
  form.reset()

  if (document.getElementById("btn-remove")) {
    const btnRemove = document.getElementById("btn-remove")
    btnRemove.remove()
  }

  console.log(desenvolvedores)
  count = 1
  countDev++
})