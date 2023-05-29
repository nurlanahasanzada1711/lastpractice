import MainRoot from '../pages/MainRoot';
import Home from '../pages/Home';
import Coins from '../pages/Coins';
import AddCoin from '../pages/AddCoin';
import EditCoin from '../pages/EditCoin';
import CoinDetail from '../pages/CoinDetail'
import NotFound from '../pages/NotFound';



export const ROUTES = [
    {
        path:'/',
        element:<MainRoot/>,
        children: [
            {
                path:'',
                element:<Home/>
            },
            {
                path:'/coins',
                element:<Coins/>
            },
            {
                path:'/add-coin',
                element:<AddCoin/>
            },
            {
                path:'/coins/edit/:id',
                element:<EditCoin/>
            },
            {
                path:'/coins/:id',
                element:<CoinDetail/>
            },
            {
                path:'*',
                element:<NotFound/>
            }
        ]
    }
]