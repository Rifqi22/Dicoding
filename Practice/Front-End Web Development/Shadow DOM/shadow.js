const divElement = document.createElement('div');

const headingElement = document.createElement('h1');
headingElement.innerText = 'This is Heading inside Shadow';

const shadowRoot = divElement.attachShadow({mode: 'open'});
shadowRoot.innerHTML = 
`
<style>
    h1 {
        color: blue;
    }
</style>
`

shadowRoot.appendChild(headingElement);
document.body.appendChild(divElement);