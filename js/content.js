/**
 * Created by sunqian on 2016/1/13.
 */
var React = require("react");

var QusLists = React.createClass({
    getInitialState: function(){
        return {
            num: this.props.detail.num
        };
    },
    support: function(){
        this.setState({
            num: this.state.num + 1
        });
        this.props.changeNum(this.props.detail.key, this.state.num);
    },
    render: function () {
        var detail = this.props.detail;
        return (
            <div className="media">
                <div className="media-left">
                    <button className="btn btn-default" onClick={this.support}>
                        <span className="glyphicon glyphicon-chevron-up"></span>
                        <span className="vote-count">{this.state.num}</span>
                    </button>
                    <button className="btn btn-default">
                        <span className="glyphicon glyphicon-chevron-down"></span>
                    </button>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{detail.ques}</h4>

                    <p>{detail.answer}</p>
                </div>
            </div>
        );
    }
});
module.exports = React.createClass({
    render: function () {
        var self = this;

        return (
            <div id="questions" className="">
                {this.props.lists.map(function(list){
                        return <QusLists changeNum={self.props.changeNum} key={list.key} detail={list}/>;
                })}
            </div>
        );
    }
});