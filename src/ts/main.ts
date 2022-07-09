interface todo {
  title: string
  body: string
}

const initForm = () => {
  const root = document.querySelector('#root') as HTMLDivElement
  const form = document.createElement('form')
  const title = document.createElement('input')
  const body = document.createElement('textarea')
  const submitBtn = document.createElement('button')

  title.placeholder = 'To-do Name'
  title.id = 'title'
  title.required = true
  body.placeholder = 'Content'
  body.id = 'body'
  body.required = true

  submitBtn.innerText = 'Submit'

  form.append(title, body, submitBtn)
  root.append(form)
  return form
}

const generateLI = (todo: todo) => {
  const li = document.createElement('li')
  li.innerText = `title: ${todo.title} -> body: ${todo.body}`

  return li
}

const cleanFields = (title: HTMLInputElement, body: HTMLInputElement) => {
  title.value = ''
  body.value = ''
}

const printToScreen = (todo: todo) => {
  let ul = document.querySelector('#list') as HTMLUListElement | null
  if (!ul) {
    const newUl = document.createElement('ul')
    const root = document.querySelector('#root') as HTMLDivElement
    newUl.id = 'list'
    ul = newUl
    root.append(newUl)
  }
  const li = generateLI(todo)
  ul.append(li)
}

const handleSubmit = (form: HTMLFormElement) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const title: HTMLInputElement | null = document.querySelector('#title')
    const body: HTMLInputElement | null = document.querySelector('#body')
    if (title && body) {
      const newTodo: todo = { title: title.value, body: body.value }
      console.log(newTodo)
      // fetch

      // printToScreen
      printToScreen(newTodo)
      // clean fields
      cleanFields(title, body)
    }

    // const [title, content] = form.children
    // console.log(title, content)
  })
}

const main = () => {
  const form = initForm()
  handleSubmit(form)
}

main()
