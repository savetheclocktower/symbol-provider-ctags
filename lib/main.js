
const CtagsProvider = require('./ctags-provider');

module.exports = {
  activate() {
    console.log('activate symbol-provider-ctags');
    this.provider = new CtagsProvider();
  },

  deactivate() {
    console.log('deactivate symbol-provider-ctags', this.provider);
    this.provider?.destroy?.();
  },

  provideSymbols() {
    console.log('provideSymbols symbol-provider-ctags', this.provider);
    return this.provider;
  }
};
