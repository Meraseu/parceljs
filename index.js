import { Tab } from './components/tab';

var tab = new Tab(document.querySelector('.tabs'), {
    callback : function(obj) {
        console.log(obj.selectedIndex);
    }
});