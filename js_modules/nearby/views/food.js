
var List = require('./list');
import React, {Component} from 'react';
var Food = React.createClass({
  render: function(){
    return(
      <List type="餐饮" nav={this.props.navigator}/>
    );
  }
});
module.exports = Food;

