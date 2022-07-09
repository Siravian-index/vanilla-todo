"use strict";
const initForm = () => {
    const root = document.querySelector('#root');
    const form = document.createElement('form');
    const title = document.createElement('input');
    const body = document.createElement('textarea');
    const submitBtn = document.createElement('button');
    title.placeholder = 'To-do Name';
    title.id = 'title';
    body.placeholder = 'Content';
    body.id = 'body';
    submitBtn.innerText = 'Submit';
    form.append(title, body, submitBtn);
    root.append(form);
    return form;
};
const printToScreen = (todo) => {
    const ul = document.querySelector('#list');
    if (!ul) {
        const newUl = document.createElement('ul');
        const root = document.querySelector('#root');
        newUl.id = 'list';
        root.append(newUl);
    }
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
            // clean fields
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
