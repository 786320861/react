/**
 * Created by sunqian on 2016/1/13.
 */
var React = require("react");

module.exports = React.createClass({
    handleForm: function(e){
        e.preventDefault();
        var ques = this.refs.ques.value,
            answer = this.refs.answer.value;
        if(ques==""||answer==""){
            return false;
        }
        var newAnswer = {
            num: 0,
            ques:ques,
            answer:answer
        };
        this.props.onAddSubmit(newAnswer,this._reset);
    },
    _reset: function(){
        this.refs.quesForm.reset();
    },
    render: function(){
        return (
            <form ref="quesForm" name="addQuestion" style={this.props._display} className="clearfix">
                <div className="form-group">
                    <label htmlFor="qtitle">问题</label>
                    <input ref="ques" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
                </div>
                <textarea ref="answer" className="form-control" rows="3" placeholder="问题的描述"></textarea>
                <button onClick={this.handleForm} className="btn btn-success pull-right">确认</button>
                <button onClick={this.props.onToggle} className="btn btn-default pull-right">取消</button>
            </form>
        );
    }
});
