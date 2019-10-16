
import Home from '../components/home'
const route=[
    {
       path:'/home',
       component:Home
    },
    {
        from:'/',
        to:'/home'
    }
]
export default route