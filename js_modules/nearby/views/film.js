
var List = require('./list');
import React, {Component} from 'react';

var Film = React.createClass({
  render: function(){
    return(
      <List type="电影院" nav={this.props.navigator}/>
    );
  }
});

module.exports = Film;
