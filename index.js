// const parcel = require('./parcel');
import { parcel } from './parcel';

parcel.getOne()
    .then(joke => {
        document.querySelector('.name').innerHTML = joke
    });