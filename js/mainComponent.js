/**
 * Created by sunqian on 2016/1/12.
 */

var React = require("react");
var Title = require("./title");
var Question = require("./question");
var Content = require("./content");

module.exports = React.createClass({
    getInitialState: function () {
        return {
            toggle: true,
            lists: [
                {
                    key: 1,
                    num: 10,
                    ques: "产品经理与程序员矛盾的本质是什么？",
                    answer: "理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。"
                }, {
                    key: 2,
                    num: 8,
                    ques: "热爱编程是一种怎样的体验？",
                    answer: "别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。"
                }
            ]
        }
    },
    toggleQues: function (e) {
        e.preventDefault();
        this.setState({"toggle": !this.state.toggle});
        return false;
    },
    handleSubmit: function (newQuestion, callback) {
        newQuestion.key = this.state.lists.length + 1;
        this.setState({
            "lists": this.state.lists.concat(newQuestion)
        });
        if (callback && (typeof callback) == "function") {
            callback();
        }
    },
    changeNum: function (changeKey, num) {
        var lists = this.state.lists, list;
        var index = (function () {
            for (var i = 0; i < lists.length; i++) {
                list = lists[i];
                if (list.key == changeKey) {
                    return i;
                }
            }
        })();
        lists[index]["num"] = num;
        this.setState({"lists": lists});
        this.reOrder();
    },
    reOrder: function () {
        var self = this;
        this.setState({
            "lists": (function () {
                var oldLists = self.state.lists;
                oldLists.sort(function (a, b) {
                    return b.num - a.num;
                });
                return oldLists;
            })()
        });
    },
    render: function () {
        //控制输入form的显示和隐藏。通过改变state的值
        var _display = {
            "display": this.state.toggle ? "block" : "none"
        };
        return (
            <div id="appInner">
                <Title onToggle={this.toggleQues}/>

                <div className="main container">
                    <Question
                        _display={_display}
                        onToggle={this.toggleQues}
                        onAddSubmit={this.handleSubmit}>
                    </Question>
                    <Content changeNum={this.changeNum} lists={this.state.lists}></Content>
                </div>
            </div>
        );
    }
});