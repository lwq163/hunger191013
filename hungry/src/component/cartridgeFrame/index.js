import React, { Component } from 'react';
import CartridgeFrame_Css from"./style.module.scss"
import {connect} from "react-redux"
import "../../mock/index"
import axios from "axios"

class CartridgeFrame extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {seller} =this.props
        return (
            <>
            {
                seller?<div className={CartridgeFrame_Css['box']}>
                <h3>
                    {seller.name}
                </h3>
                {
                    seller.score<0||seller.score<1.5? console.log(seller.score,"----1"):seller.score<=1.5||seller.score<2.5? console.log(seller.score,"----2"):seller.score<=2.5||seller.score<3.5? console.log(seller.score,"----3"):seller.score<=3.5||seller.score<4.5? console.log(seller.score,"---4"): console.log(seller.score,"----5")
                }
                {
                    seller.score<0||seller.score<1.5? <div className={CartridgeFrame_Css['CartridgeFrame_Xin']}>
                    <img src={require('@/img/star48_off@3x.png')} alt="" />
                    <img src={require('@/img/star48_off@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_off@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_off@3x.png')}  alt=""  />
                    
                </div>:seller.score<=1.5||seller.score<2.5? <div className={CartridgeFrame_Css['CartridgeFrame_Xin']}>
                    <img src={require('@/img/star48_on@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_on@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_off@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_off@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_off@3x.png')}  alt=""  />
                    
                </div>:seller.score<=2.5||seller.score<3.5? <div className={CartridgeFrame_Css['CartridgeFrame_Xin']}>
                    <img src={require('@/img/star48_on@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_on@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_on@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_off@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_off@3x.png')}  alt=""  />
                   
                </div>:seller.score<=3.5||seller.score<4.5? <div className={CartridgeFrame_Css['CartridgeFrame_Xin']}>
                    <img src={require('@/img/star48_on@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_on@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_on@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_on@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_off@3x.png')}  alt=""  />
                   
                </div>: <div className={CartridgeFrame_Css['CartridgeFrame_Xin']}>
                    <img src={require('@/img/star48_on@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_on@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_on@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_on@3x.png')}  alt=""  />
                    <img src={require('@/img/star48_on@3x.png')}  alt=""  />
                </div>
                }
               
                <p>
                    <span></span>
                    <b>优惠信息</b>
                    <span></span>
                </p>
                <div className={CartridgeFrame_Css['CartridgeFrame_jian']}>
                    {
                       seller.supports && seller.supports.map((item,index)=>{
                            return <div key={index}>
                                {
                                    console.log(item)
                                }
                            <b>
                                <img src={require('@/img/decrease_2@2x.png')}  alt=""  />
                            </b>
                            <span>{item.description}</span>
                        </div>
                        })
                    }
                </div>
                <p>
                    <span></span>
                    <b>商家公告</b>
                    <span></span>
                </p>
                <div className={CartridgeFrame_Css['CartridgeFrame_jianshao']}>{seller.bulletin}</div>
                <b className={CartridgeFrame_Css['CartridgeFrame_bottom']}  onClick={this.click_toptk.bind(this)}>X</b>
            </div>:""
            }
            </>
        );
    }
    componentDidMount(){
        axios.get("/api/homeData").then(({data:data}) => {
            this.props.initdata(data)
        })
    }
    click_toptk(){
        this.props.click_toptks()
    }
}

export default connect((state)=>{
    return{
        seller:state.seller
    }
},(dispatch)=>{
    return{
        initdata(data){
            dispatch({type:"INIT_DATA",data})
        },
        click_toptks(){
            dispatch({type:"CLICK_TOPTKS"})
        }
    }
})(CartridgeFrame);