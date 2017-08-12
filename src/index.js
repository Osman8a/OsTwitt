'use strict';
import _ from 'lodash';

function component(){
    var element = document.createElement('div');
 
    element.innerHTML = _.join(['Hola', 'Mundo '], ' ');

    return element;
}

document.body.appendChild(component());