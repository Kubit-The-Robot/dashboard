import { Store } from './store';

class Redux {
    store = null;

    constructor(store = new Store()) {
        this.store = store;
        if (!store) {
            this.store = new Store();
        }
    }
}

export default new Redux();
