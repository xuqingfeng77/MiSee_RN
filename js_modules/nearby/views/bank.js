
// var List = require('./list');
var ListTwo = require('./listTwo');
import React, {Component} from 'react';
var Bank = React.createClass({
  render: function(){
    return(
      <ListTwo type="银行" nav={this.props.navigator}/>
    );
  }
});

module.exports = Bank;
