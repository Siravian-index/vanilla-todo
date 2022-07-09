"use strict";
const main = () => {
    const root = document.querySelector('#root');
    const ul = document.createElement('ul');
    const names = ['david', 'santiago', 'maria'];
    const lis = names.map((name, index) => {
        const li = document.createElement('li');
        li.innerText = `Hello ${name}`;
        li.id = `${index}-element`;
        return li;
    });
    ul.append(...lis);
    root.append(ul);
    console.log(root);
};
main();
