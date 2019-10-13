import React, { Component } from 'react';
import "./CommodityDetails.css"
import { Icon } from 'antd';
import {connect} from "react-redux"
class CommodityDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            json:[],
            apply:[],
            food:{}
         };
         
    }
    render() {
        return (
             <>
           <div className="commodity">
               
            <div className='headerImg'><img src={this.state.food.image} /></div>
            <div className='headerText'>
              <p><span>{this.state.food.name}</span></p> 
              <p><span>月售{this.state.food.sellcount}</span> <span>好评率 {this.state.food.rating}%</span></p> 
              <p>
                  <b>￥{this.state.food.price}</b>
                  <b>￥ {this.state.food.oldPrice} </b>
                  <b></b>
                  <span>加入购物车</span>
              </p>
            </div>
            <div className='header'></div>
            <div className='introduction'>
                <h2>商品介绍</h2>
                <p> {this.state.food.info}</p>
            </div>
            <div className='header'></div>
            <div className="comments">
                <div className='commentsHeader'>
                <h2>商品评论</h2>
                <p><span onClick={()=>this.all()}>全部{this.state.json.length}</span><span onClick={()=>this.recommend()}>推荐{this.state.json.filter(item=>item.rateType===0).length}</span><span onClick={()=>this.Tweet()}>吐槽{this.state.json.filter(item=>item.rateType===1).length}</span></p>
                </div>
               <div className="commentsText">
                  {
                    this.state.apply.map((item,index)=>(
                       <div className="commentsEver" key={index}>
                          <p><span>{this.farmatDate(item.rateTime,'Y-M-D h:m:s')}</span><b></b><span>{item.username} <img src={item.avatar} alt=""/></span></p> 
                          <p>{item.rateType===0 ? <Icon type="like" />:<Icon type="dislike" />}<span>{item.text}</span></p>
                          
                       </div>
                    )) 
                  } 
               </div>
            </div>
            </div> 
            
            <footer>
                    <div className="lwqfooterleft">
                        <span className="lwqshopicon">
                            
                        </span>
                        <span className="lwqshopprice">￥0</span>
                    </div>
                    <div className="lwqfootercenter">
                        <span>另需配送费￥4元</span>    
                    </div>
                    <div className="lwqfooterright">
                        <span>￥20起送</span>
                    </div>
                </footer>
 

             </>
        );
    }
       all(){
           this.setState({
              apply:this.state.json 
           })
       }
       recommend(){
        this.setState({
            apply:this.state.json.filter(item=>item.rateType===0) 
         })
       }
       Tweet(){
        this.setState({
            apply:this.state.json.filter(item=>item.rateType===1) 
         })
       }


    componentWillMount(){
        let index=this.props.location.query.index;
        let name=this.props.location.query.name;
        console.log(index,name)
        let food= this.props.goods[index].foods.filter(item=>item.name==name)[0]
   
        console.log(food)
          this.setState({
              food:food,
              json:food.ratings,
              apply:food.ratings
          })
       
    }
 
     farmatDate(number, format) {
        let time = new Date(number)
        let newArr = []
        let formatArr = ['Y', 'M', 'D', 'h', 'm', 's']
        newArr.push(time.getFullYear())
        newArr.push(this.formatNumber(time.getMonth() + 1))
        newArr.push(this.formatNumber(time.getDate()))
    
        newArr.push(this.formatNumber(time.getHours()))
        newArr.push(this.formatNumber(time.getMinutes()))
        newArr.push(this.formatNumber(time.getSeconds()))
    
        for (let i in newArr) {
            format = format.replace(formatArr[i], newArr[i])
        }
        return format;
      }
      formatNumber (n) {
        n = n.toString()
        return n[1] ? n : '0' + n;
    }
       
     


}                      

 const mao =state=>{
      return state
  }
 const mapp = dispatch=>({

 })

 
export default connect(mao,mapp)(CommodityDetails);