import loadable from "react-loadable"
import React from 'react';

function Loading() {
    return <div>loading...</div>
}
const Home = loadable({
    loader: () => import("../component/home/home.jsx"),
    loading: Loading
})
const Commodity = loadable({
    loader: () => import("../views/commodity"),
    loading: Loading
})
const Evaluate = loadable({
    loader: () => import("../views/evaluate"),
    loading: Loading
})
const Business = loadable({
    loader: () => import("../views/business"),
    loading: Loading
})
// const CartridgeFrame = loadable({
//     loader: () => import("../component/cartridgeFrame/index"),
//     loading: Loading
// })
// const ShoppingCartList = loadable({
//     loader: () => import("../component/shoppingCartList/index"),
//     loading: Loading
// })
const CommodityDetails = loadable({
    loader:()=>import("../page/CommodityDetails/CommodityDetails.jsx"),
    loading:Loading
})

const CartridgeFrame = loadable({
    loader: () => import("../component/cartridgeFrame/index"),
    loading: Loading
})
const ShoppingCartList = loadable({
    loader: () => import("../component/shoppingCartList/index"),
    loading: Loading
})

const Route = [
    {
         path:"/home",
         component:Home,
         children: [
            {
                path: "/home/commodity",
                component: Commodity,
            },
            {
                path: "/home/evaluate",
                component: Evaluate,
            },
            {
                path: "/home/business",
                component: Business,
            },
            {
                to: '/home/commodity',
                from: "/home"
            }
        ]
    },    
    {
        path:"/CommodityDetails",
        component:CommodityDetails,

    },
    // {
    //     path: "/cartridgeFrame",
    //     component: CartridgeFrame,
    // },
    // {
    //     path: "/shoppingCartList",
    //     component: ShoppingCartList,
    // },
    {
        to: '/home',
        from: "/"
    }
    
]

export default Route
