/**
 * Created by sunqian on 2016/1/13.
 */

var React = require("react");

module.exports = React.createClass({
    render: function(){
        return (
            <div className="jumbotron text-center">
                <div className="container">
                    <h1>React问答</h1>
                    <button onClick={this.props.onToggle} id="add-question-btn" className="btn btn-success">添加问题</button>
                </div>
            </div>
        );
    }
});
