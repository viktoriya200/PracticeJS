// const heading = document.getElementById('hello')
// // const heading2 = document.getElementsByTagName('h2')[0]
// // const heading2 = document.getElementsByClassName('h2-class')[0]
// // const heading2 = document.querySelector('.h2-class')
// // const heading2 = document.querySelector('#sub-hello') // Всегда 1 элемент
// const heading2 = document.querySelector('h2')


// // const heading3 = heading2.nextElementSibling
// const h2List = document.querySelectorAll('h2')
// const heading3 = h2List[h2List.length - 1]


// setTimeout(() => {
//     addStylesTo(heading, 'JavaScript')
// }, 1500)

// const link = heading3.querySelector('a')

// link.addEventListener('click', (event) => {
//     event.preventDefault()
//     console.log('Click on link', event.target.getAttribute('href'))
//     const url = event.target.getAttribute('href')

//     window.location = url
// })


// setTimeout(() => {
//     addStylesTo(link, 'Практикуйся', 'blue')
// }, 3000)

// setTimeout(() => {
//     addStylesTo(heading2, 'И все получится!', 'yellow', '2rem')
// }, 4500)

// function addStylesTo(node, text, color = 'red', fontSize) {
//     node.textContent = text
//     node.style.color = color
//     node.style.textAlign = 'center'
//     node.style.backgroundColor = 'black'
//     node.style.padding = '2rem'
//     node.style.display = 'block'
//     node.style.width = '100%'

//     // falsy: '', undefined, null, 0, false
//     if (fontSize) {
//         node.style.fontSize = fontSize
//     }
// }

// heading.onclick = () => {
//     if (heading.style.color === 'red') {
//         heading.style.color = '#000'
//         heading.style.backgroundColor = '#fff'
//     } else {
//         heading.style.color = 'red'
//         heading.style.backgroundColor = '#000'
//     }
// }


// heading2.addEventListener('dblclick', () => {
//     if (heading2.style.color === 'yellow') {
//         heading2.style.color = '#000'
//         heading2.style.backgroundColor = '#fff'
//     } else {
//         heading2.style.color = 'yellow'
//         heading2.style.backgroundColor = '#000'
//     }
// })

const items = document.querySelectorAll('.item__content');
console.dir(items);
// console.log(items[0]);

function changeStyles(node, text) {
    node.textContent = text;
    node.style.cursor = 'pointer';
    node.style.backgroundColor = 'gray';
    node.style.border = '2px solid #000';
    node.style.fontSize = '36px';
}

setTimeout(() => changeStyles(items[0], "You'll have a luck"), 1500);
setTimeout(() => changeStyles(items[1], 'in studying'), 2500);
setTimeout(() => changeStyles(items[2], 'JavaScript'), 3500);

items[0].onclick = () => {
    if (items[0].style.backgroundColor === "gray") {
        items[0].style.backgroundColor = "orange";
        items[0].textContent = "It's a joke";
    } else {
        items[0].style.backgroundColor = "gray";
        items[0].textContent = "You'll have a luck";
    }
}

function changeItem(node) {
    if (node.style.backgroundColor === "gray") {
        node.style.backgroundColor = "orange";
        node.textContent = "I'm kidding";
    } else {
        node.style.backgroundColor = "gray";
        node.textContent = "in studying";
    }
}
// changeItem(item[1]);

// item[1].onclick = () => {
//     changeItem(item[1]);
// }
// function sayHello(user) {
//     alert(`Hello ${user}!`);
// }

items[1].addEventListener("click", () => {
    // sayHello('Oleg');
    changeItem(items[1]);
});

items[2].addEventListener("click", () => {
    changeItem(items[2]);
})