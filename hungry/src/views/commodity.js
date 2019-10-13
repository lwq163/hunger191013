import React, { Component } from 'react'
import BScroll from "better-scroll"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"

class Commodity extends Component {
    render() {
        let { goods,num} = this.props
        console.log(goods)
        return (
            <div className="lwqwrap">
                <div className="lwqleft">
                    {
                        goods && goods.map((item, index) =>
                            <p key={index} onClick={this.handleToele.bind(this,index)}>{item.name}</p>
                        )
                    }
                </div>
                <div className="lwqright">
                    <div  ref="rightele">
{                       goods && goods.map((item, index) => {
                            return <div key={index}>
                                <h3>{item.name}</h3>
                                { 
                                    item.foods.map((ele, i) => {
                                        return <dl key={i} onClick={()=>this.commodityDetails(index,ele.name)}>
                                            <dt>
                                                <img src={ele.image} alt="" />
                                            </dt>
                                            <dd>
                                                <p>{ele.name}</p>
                                                <p>{ele.description}</p>
                                                <p className="lwqshop">
                                                    <div className="lwqprice">
                                                        <span className="lwqpricered">￥{ele.price}</span>
                                                        <i>￥{ele.oldPrice}</i>
                                                    </div>
                                                    <div className="lwbtn">
                                                        <button onClick={this.handleNum.bind(this,ele.num,i,index,false)}> - </button>
                                                        <span>{ele.num}</span>
                                                        <button onClick={this.handleNum.bind(this,ele.num,i,index,true)}> + </button>
                                                    </div>
                                                </p>
                                            </dd>
                                        </dl>
                                    })
                                }
                            </div>
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
   
    handleNum (num,i,index,flag,e){
        let count = flag ? num+1 : num-1
        this.props.changecount(count,i,index)
        e.stopPropagation()
    }
    componentDidUpdate(){
        new BScroll(".lwqleft",{
            click:true
        })
        new BScroll(".lwqright")
    }
    handleToele(index){
        let right =  new BScroll(".lwqright")
        let eles = this.refs.rightele.children[index]
        right.scrollToElement(eles,200)
    }
    commodityDetails(e,index,name){
        this.props.history.push({pathname:"/CommodityDetails",query:{'index':index,"name":name}})
        e.stopPropagation()
    }
} 

export default connect((state) => {
    // console.log(state)
    return {
        goods: state.goods,
    }
}, (dispatch) => {
    return {
        changecount(num,i,index){
            dispatch({type:"CHANGE_COUNT",num,i,index})
        }
    }
})(Commodity)

