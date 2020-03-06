const html = require('choo/html');
const Component = require('choo/component');
const version = require('../../package.json').version;
const { browserName } = require('../utils');

class Footer extends Component {
  constructor(name, state) {
    super(name);
    this.state = state;
  }

  update() {
    return false;
  }

  createElement() {
    return html`
      <footer>
      </footer>
    `;
  }
}

module.exports = Footer;
