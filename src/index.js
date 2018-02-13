import _ from 'lodash';
import printMe from './print.js';

function component() {
    const elem = document.createElement('div');
    const btn = document.createElement('button');

    elem.innerHTML = _.join(['Hello', 'webpack']);

    btn.innerHTML = 'Click Me'
    btn.onclick = printMe;

    elem.appendChild(btn);

    return elem;
}

// if (module.hot) {
//     module.hot.accept('./print.js', function() {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }

document.body.appendChild(component());
