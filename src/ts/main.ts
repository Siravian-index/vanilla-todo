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
  body.placeholder = 'Content'
  body.id = 'body'
  submitBtn.innerText = 'Submit'

  form.append(title, body, submitBtn)
  root.append(form)
  return form
}

const printToScreen = (todo: todo) => {
  const ul = document.querySelector('#list') as HTMLUListElement | null
  if (!ul) {
    const newUl = document.createElement('ul')
    const root = document.querySelector('#root') as HTMLDivElement
    newUl.id = 'list'
    root.append(newUl)
  }
}

const handleSubmit = (form: HTMLFormElement) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const title: HTMLInputElement | null = document.querySelector('#title')
    const body: HTMLInputElement | null = document.querySelector('#body')
    if (title && body) {
      const newTodo = { title: title.value, body: body.value }
      console.log(newTodo)

      // fetch
      // printToScreen
      // clean fields
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
