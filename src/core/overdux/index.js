import { Store } from './store';

class Overdux {
  /**
   * @param {Store} store
   */
  constructor(store) {
    this.store = store;
    if (!store) {
      this.store = new Store();
    }
  }
}

export default new Overdux();
