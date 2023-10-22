const form = document.querySelector("form")
const btnAdd = document.getElementById("btn-add")
const section = document.querySelector("section")

btnAdd.addEventListener =
  ("click",
  () => {
    let count = 0
    const label = document.createElement("label")
    label.for = "tecnologia-" + count
    label.textContent = "Nome da Tecnologia"

    debugger
    const text = document.createElement("input[type='text']")
    text.name = "tecnologia"
    text.id = "tecnologia-" + count
    text.setAttribute("required")
    console.log("oi")
    debugger
  })

form.addEventListener = (event) => {}

/*  <label for="tecnologia">Nome da Tecnologia</label>
    <input type="text" name="tecnologia" id="tecnologia" required />

    <br /><br />

    <text><b>Tempo de Experiência</b></text>
    <br />
    <label for="experiencia-1">0-2 anos</label>
    <input
        type="radio"
        name="experiencia"
        id="experiencia-1"
        value="0-2 anos"
        required
    />

    <br />
    <label for="experiencia-2">3-4 anos</label>
    <input
        type="radio"
        name="experiencia"
        id="experiencia-2"
        value="3-4 anos"
    />

    <br />
    <label for="experiencia-3">5+ anos</label>
    <input
        type="radio"
        name="experiencia"
        id="experiencia-3"
        value="5+ anos"
    />

    <br />
    <br />

    <button type="button">Remover Tecnologias</button> */
