import React, { Component } from 'react';
import CartridgeFrame_Css from"./style.module.scss"
import {connect} from "react-redux"

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {buylist} =this.props
        return (
            <div className={CartridgeFrame_Css['box']}>
                <div className={CartridgeFrame_Css['boss']}>
                    <div className={CartridgeFrame_Css['boss_top']}>
                        <span>购物车</span>
                        <span onClick={this.qk_list.bind(this)}>清空</span>
                    </div>
                    <div className={CartridgeFrame_Css['boss_List']}>
                        {
                            buylist&&buylist.map((item,index)=><li key={index}>
                                                <h3>{item.name}</h3>
                                                <div>
                                                    <b>￥{item.price}</b>
                                                    <button onClick={this.clicks.bind(this,index,item.num,false)}>-</button>
                                                    <span>{item.num}</span>
                                                    <button onClick={this.clicks.bind(this,index,item.num,true)}>+</button>
                                                </div>
                                            </li>)
                        }
                        
                    </div>
                </div>
            </div>
        );
    }
    clicks(index,num,flag){
        // let nums=flag?num+1:num-1
        console.log(num)

        if(flag){
           num= num+1
        }else{
           num= num-1
        }
        if(num<=0){
            num=0
        }
        console.log(num)
        this.props.click_btn(index,num)
    }
    qk_list(){
        this.props.qk_lists()
    }
}

export default connect((state)=>{
    console.log(state.buylist)
    return{
        buylist:state.buylist,
        seller:state.seller,
    }
},(dispatch)=>{
    return{
        click_btn(index,nums){
            dispatch({type:"CLICK_BTN",index,nums})
        },
        qk_lists(){
            dispatch({type:"QK_LISTS"})
        }
    }
})(index);