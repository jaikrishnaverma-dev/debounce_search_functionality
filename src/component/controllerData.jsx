import DebouncingHOC from "./filter_hoc/DebouncingHOC";
import NormalFilterHOC from "./filter_hoc/NormalFilterHOC";
import Dashboard from "./pages/Dashboard";
import FilterProducts from "./pages/FilterProducts";
import ListProducts from "./pages/ListProducts";
import Login from "./pages/Login";

// single array to controll sidebar navs
export const navlinks=[
{path:"login",icon:"bi bi-building-fill-lock",comp:<Login/>},
{path:"Dashboard",icon:"bi bi-person-bounding-box",comp:<Dashboard/>},
{path:"Products",icon:"bi bi-menu-down",comp:<NormalFilterHOC Comp={FilterProducts} placeholder='Search using Normal HOC'/>},
{path:"Filter",icon:"bi bi-funnel-fill",comp:<DebouncingHOC Comp={FilterProducts} placeholder='Search using debouncing HOC'/>},
{path:"Cart",icon:"bi bi-cart-fill",comp:<ListProducts/>},
]

// this is the initial valuer of context api
export const initialStateValue = {
    users: [{
        name:'Jai Verma',
      email:'jai@gmail.com',
      password:'2222'
    }],
    loading:false,
    cart: [],
    products: [],
    searchInput:'',
    searchInputDebounce:'',
    session: {},
  };