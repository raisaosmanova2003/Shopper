import SiteRoot from '../../../../../rout_exp/routing/src/Pages/site/SiteRoot'
import Home from '../../../../../rout_exp/routing/src/Pages/site/Home/Home'
import Shop from '../../../../../rout_exp/routing/src/Pages/site/Shop/Shop'
import Details from '../../../../../rout_exp/routing/src/Pages/site/Details/Details'
import Error from '../../../../../rout_exp/routing/src/Pages/Error/Error'
import AdminRoot from '../../../../../rout_exp/routing/src/Pages/admin/AdminRoot'
import AddProduct from '../Pages/admin/AddProducts/AddProduct'
import Products from '../../../../../rout_exp/routing/src/Pages/admin/Products/Products'





const ROUTES=[{
    path:"/",
    element:<SiteRoot/>,
    children:[{
         path:"",
         element:<Home/>
    },{
         path:"shop",
         element:<Shop/>
    },
    {
         path:"details/:id",
         element:<Details/>
    },
    {
         path:"*",
         element:<Error/>
    }
]
}, {
    path:"/admin",
    element:<AdminRoot/>,
    children:[{
         path:"",
         element:<AddProduct/>
    },
    {
         path:"products",
         element:<Products/>
    }
]
}

    ]
    export default ROUTES