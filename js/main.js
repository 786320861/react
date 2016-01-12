/**
 * Created by sunqian on 2016/1/12.
 */
var React = require("react");
var MainComponent = require("./mainComponent.js");
/*
var MainConponent = react.createClass({
    render: function(){

    }
});*/
console.log("****************");
var MainDom = React.render(<MainComponent />, document.getElementById("app"));