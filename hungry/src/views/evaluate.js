import React, { Component } from 'react'
import "../css/dcqStyle.css";
import {connect} from "react-redux";
import axios from "axios"

class Evaluate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newevaluateData :[],
            canWatchBoolean: false
         };
    }
    render() {
        let {newevaluateData} = this.props
        console.log(this.props)
        return (
             <div className="dcqEvaluateDiv">
                <div className="topScore">
                    <div className="scoreleft">
                        <p className="allScoreNum">3.9</p>
                        <p className="allScoreText">综合评分</p>
                        <p className="allScoreMsg">高于周边商家69.2%</p>
                    </div>
                    <div className="scoreright">
                        <div className="scoreTips">
                            <span>服务态度</span>
                            <div>
                                <img src='/img/star36_on@2x.png' alt="" />
                                <img src='/img/star36_on@2x.png' alt="" />
                                <img src='/img/star36_on@2x.png' alt="" />
                                <img src='/img/star36_on@2x.png' alt="" />
                                <img src='/img/star36_off@2x.png' alt="" />
                            </div>
                            <span className="cloOrange">3.9</span>
                        </div>
                        <div className="scoreTips">
                            <span>服务态度</span>
                            <div>
                                <img src='/img/star36_on@2x.png' alt="" />
                                <img src='/img/star36_on@2x.png' alt="" />
                                <img src='/img/star36_on@2x.png' alt="" />
                                <img src='/img/star36_on@2x.png' alt="" />
                                <img src='/img/star36_off@2x.png' alt="" />
                            </div>
                            <span className="cloOrange">4.0</span>
                        </div>
                        <p className="scoreTips">
                            <span>送达时间</span>
                            <span className="cloGrey">44分钟</span>
                        </p>
                    </div>
                </div>
                <div className="evaluateContent">
                    <div className="evaluateBtns">
                        <button className="cloAll" onClick={this.handleGetData}>全部<span>57</span></button>
                        <button className="cloYes" onClick={this.handleGetDataYes}>满意<span>47</span></button>
                        <button className="cloNo" onClick={this.handleGetDataNo}>不满意<span>10</span></button>
                    </div>
                    <div className="evaluateTips" onClick={this.handleCanWatch}>
                        只看有内容的评论
                    </div>
                    <div className="evaluateContext">
                        <ul className="evaluateContextList">
                            {   
                                newevaluateData && newevaluateData.map((item,index)=>(
                                    <li key={index}>
                                        <div className="evaluateContextListImage">
                                            <img src={item.avatar} alt="" />
                                        </div>
                                        <div className="evaluateContextListMsg">
                                            <div className="evaluateContextListMsgTips">
                                                <p className="evaluateContextListMsgTips_times">
                                                    <span>{item.username}</span>
                                                    <span>
                                                        {
                                                            new Date(item.rateTime).toLocaleDateString()+new Date(item.rateTime).toLocaleTimeString()
                                                        }
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className="starNums">
                                                        {
                                                            new Array(item.score).fill(1).map((item,index)=>(
                                                                <img key={index} src='/img/star36_on@2x.png' alt="" />
                                                            ))
                                                        }
                                                        {
                                                            new Array(5-item.score).fill(1).map((item,index)=>(
                                                                <img key={index} src='/img/star36_off@2x.png' alt="" />
                                                            ))
                                                        }
                                                    </span>
                                                    {
                                                        item.deliveryTime ? 
                                                        <span>{item.deliveryTime}分钟送达</span> :
                                                        <span></span>
                                                    }
                                                </p>                                            
                                            </div>
                                            <div className="evaluateContextListMsgContext">
                                                {
                                                    item.text ? item.text : "此用户暂时没有评论信息"
                                                }
                                            </div>
                                            {
                                                item.recommend===[] ? ''
                                                 : <div className="evaluateContextListMsgTags" >
                                                    {
                                                        item.recommend.map((item,index)=>(
                                                            <span key={index}>{item}</span>
                                                        ))
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </li>
                                ))
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
        this.props.initdata()
    }
    handleGetData=()=>{
        this.props.initdata()
    }
    handleGetDataYes=()=>{
        this.props.filterDataYes()
    }
    handleGetDataNo=()=>{
        this.props.filterDataNo()
    }
    handleCanWatch=()=>{
        this.props.filterCanWatch()
    }
}

export default connect(
    state=>{
        return state;
    },
    dispatch=>{
        return {
            initdata(){
                axios.get("/api/homeData").then(res=>{
                    let evaluateData = res.data.Data.ratings
                    dispatch({type:"EVALUATE_DATA",evaluateData})
                })
            },
            filterDataYes(){
                dispatch(
                    {
                        type:"FILTER_DATA_YES"
                    }
                )
            },
            filterDataNo(){
                dispatch(
                    {
                        type:"FILTER_DATA_NO"
                    }
                )
            },
            filterCanWatch(){
                dispatch(
                    {
                        type:"FILTER_CAN_WATCH"
                    }
                )
            }
        }
    }
)(Evaluate);

