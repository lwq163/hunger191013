import React, { Component } from 'react';
import '../css/recommond.scss'

class Merchant extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
            <div className="dcqsjname">
                <div>
                    <div className="dcqzpxf">粥品香坊(大运村)</div>
                    <div className="dcqxx">
                        <p className="dcqxxa">
                            <img src={'/img/star36_on@2x.png'} alt=""/>
                            <img src={'/img/star36_on@2x.png'} alt=""/>
                            <img src={'/img/star36_on@2x.png'} alt=""/>
                            <img src={'/img/star36_on@2x.png'} alt=""/>
                            <img src={'/img/star24_off@3x.png'} alt=""/>
                        </p>
                        <p className="dcqxl">(661)</p>
                        <p className="dcqys">月售690单</p>
                    </div>
                </div>
                <div>
                <i className="iconfont icon-shoucang"></i>
                    <p className="dcqsc">已收藏</p>
                </div>
            </div>

            <div className="dcqqsj">
                <div className="dcqconn">
                    <div>
                        <p className="dcqsjna">起送价</p>
                        <p className="dcqdw">20<i className="dcqdwhs">元</i></p>
                    </div>
                    <div>
                        <p className="dcqsjna">商家配送</p>
                        <p className="dcqdw">4<i className="dcqdwhs">元</i></p>
                    </div>
                    <div>
                        <p className="dcqsjna">平均配送时间</p>
                        <p className="dcqdw">39<i className="dcqdwhs">分钟</i></p>
                    </div>
                </div>
            </div>
            <div className="dcqkkuang"></div>
            <div className="dcqjsa">
                <p className="dcqgga">公告与活动</p>
                <p className="dcqhdnr">粥品香坊其烹饪粥料的秘方源于中国前年古法,在融和现代制作工艺,由世界
                    烹饪大师屈浩先生领衔研发.坚守纯天然 0添加的良心品质深的消费者青睐,发展至今成为粥类引领品牌.
                    是2008年奥运会和2013年园博会指定餐饮服务商.
                </p>
            </div>

            <div className="dcqul">
                <ul>
                    <li className="dcqonee">
                        <img src={'/img/decrease_3@2x.png'} alt=""/>
                    </li>
                    <li>在线支付满28减5,满50减10</li>
                </ul>
                <ul>
                <li className="dcqonee">
                        <img src={'/img/discount_3@2x.png'} alt=""/>
                    </li>
                    <li>单人精彩赛</li>
                </ul>
                <ul>
                <li className="dcqonee">
                        <img src={'/img/discount_3@2x.png'} alt=""/>
                    </li>
                    <li>清肺雪莉汤8折抢购</li>
                </ul>
                <ul>
                <li className="dcqonee">
                        <img src={'/img/special_3@2x.png'} alt=""/>
                    </li>
                    <li>特价饮品八折抢购</li>
                </ul>
                <ul>
                <li className="dcqonee">
                        <img src={'/img/special_3@2x.png'} alt=""/>
                    </li>
                    <li>单人特色套餐</li>
                </ul>
                <ul>
                <li className="dcqonee">
                        <img src={'/img/invoice_4@2x.png'} alt=""/>
                    </li>
                    <li>该商家支持开发票,请在下单时填写好发票抬头</li>
                </ul>
                <ul>
                <li className="dcqonee">
                        <img src={'/img/guarantee_4@2x.png'} alt=""/>
                    </li>
                    <li>已加入"外卖保"计划,食品安全保障</li>
                </ul>
            </div>

            <div className="dcqkkuang2"></div>

            <div className="dcqsjsj">
                <div className="dcqjj">商家实景</div>
                <div className="dcqimgs">
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
            </div>

            <div className="dcqkkuang3"></div>

            <div className="dcqdress">
                <ul>
                    <li>商家信息</li>
                </ul>
                <ul>
                    <li>该商家支持开发票,请在下单时填写好发票抬头</li>
                </ul>
                <ul>
                    <li>品类:其他菜系、包子粥店</li>
                </ul>
                <ul>
                    <li>地址:北京市昌平区回龙观龙观置业大厦商B座102单元1340</li>
                </ul>
                <ul>
                    <li>营业时间:10:00-20:30</li>
                </ul>
            </div>
            </>
        );
    }
}

export default Merchant;
