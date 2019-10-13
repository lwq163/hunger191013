import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"
import FnRoute from "../../router/fnRouter"
import "../../mock/index"
import axios from "axios"
import CartridgeFrame from '../cartridgeFrame/index'
import ShoppingCartList from "../shoppingCartList/index"
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {route,seller,click_toptklist,click_bottomtks,totalcount,totalprice} = this.props
        return (
            <>
                {
                    seller ? <header>
                        <div  className="lwqtop">
                            <div className="lwqtopleft">
                                <img src={seller.avatar} alt=""/>
                            </div>
                            <div className="lwqtopright">
                                <p>
                                    <span className="pinpai">品牌</span>
                                    <span>{seller.name}</span>
                                </p>
                                <p>
                                    <span>{seller.description}/</span>
                                    <span>{seller.deliveryTime}分钟送达</span>
                                </p>
                                <p>
                                    <span className="jian">减</span>
                                    <span>在线支付满28减5，满50减10</span>
                                </p>
                            </div>
                        </div>
                        <div className="lwqbottom" onClick={this.click_toptk.bind(this)}>
                            <span className="gonggao">公告</span>
                            <span className="lwqinfo">{seller.bulletin}</span>
                            <span>&gt;</span>
                        </div>
                    </header>
                    
                    : ""
                }
                    
                <section>
                    <div className="lwqsectiontop">
                        <NavLink to="/home/commodity">商品</NavLink>
                        <NavLink to="/home/evaluate">评价</NavLink>
                        <NavLink to="/home/business">商家</NavLink>
                    </div>
                    <div className="lwqsectionmain">
                        <FnRoute route={route} />
                    </div>
                </section>
                <footer   onClick={this.click_bottomtk.bind(this)}>
                    <div className="lwqfooterleft" >
                        <span className="lwqshopicon">
                            {totalcount}
                        </span>
                        <span className="lwqshopprice">￥{totalprice}</span>
                    </div>
                    <div className="lwqfootercenter">
                        <span>另需配送费￥4元</span>    
                    </div>
                    <div className="lwqfooterright">
                        {
                            console.log(totalprice)
                        }
                        <span>￥{
                                totalprice ? totalprice >20 ? "还差" + 0 + "起送" : "还差" + (20-totalprice) + "起送" : "还差" + 20 + "起送"
                            }
                        </span>
                    </div>
                </footer>
               {
                   click_toptklist?<CartridgeFrame />:""
               }
               {
                   click_bottomtks?<ShoppingCartList />:""
               }
            </>
        )
    }
    componentDidMount(){
        axios.get("/api/homeData").then(({data}) => {
            this.props.initdata(data)
        })
    }
    click_toptk(){
        this.props.click_toptks()
    }
    click_bottomtk(){
        this.props.click_bottomtk()
    }
}

export default connect((state) => {
    return {
        seller:state.seller,
        click_toptklist:state.click_toptks,
        click_bottomtks:state.click_bottomtk,
        totalcount:state.totalcount,
        totalprice:state.totalprice
    }
},(dispatch) => {
    return {
        initdata(data){
            dispatch({type:"INIT_DATA",data})
        },
        click_toptks(){
            dispatch({type:"CLICK_TOPTKS"})
        },
        click_bottomtk(){
            dispatch({type:"CLICK_BOTTOMTKS"})
        }
    }
})(Home);