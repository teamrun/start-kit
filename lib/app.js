var React = require('react');

var Sample = require('./component/Sample.react');

require('../layout/layout.less')

React.render(<Sample />, document.querySelector('#ctn'));
