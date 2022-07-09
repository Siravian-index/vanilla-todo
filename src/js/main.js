"use strict";
const initForm = () => {
    const root = document.querySelector('#root');
    const form = document.createElement('form');
    const title = document.createElement('input');
    const body = document.createElement('textarea');
    const submitBtn = document.createElement('button');
    title.placeholder = 'To-do Name';
    title.id = 'title';
    title.required = true;
    body.placeholder = 'Content';
    body.id = 'body';
    body.required = true;
    submitBtn.innerText = 'Submit';
    form.append(title, body, submitBtn);
    root.append(form);
    return form;
};
const generateLI = (todo) => {
    const li = document.createElement('li');
    li.innerText = `title: ${todo.title} -> body: ${todo.body}`;
    return li;
};
const cleanFields = (title, body) => {
    title.value = '';
    body.value = '';
};
const printToScreen = (todo) => {
    let ul = document.querySelector('#list');
    if (!ul) {
        const newUl = document.createElement('ul');
        const root = document.querySelector('#root');
        newUl.id = 'list';
        ul = newUl;
        root.append(newUl);
    }
    const li = generateLI(todo);
    ul.append(li);
};
const handleSubmit = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.querySelector('#title');
        const body = document.querySelector('#body');
        if (title && body) {
            const newTodo = { title: title.value, body: body.value };
            console.log(newTodo);
            // fetch
            // printToScreen
            printToScreen(newTodo);
            // clean fields
            cleanFields(title, body);
        }
        // const [title, content] = form.children
        // console.log(title, content)
    });
};
const main = () => {
    const form = initForm();
    handleSubmit(form);
};
main();
