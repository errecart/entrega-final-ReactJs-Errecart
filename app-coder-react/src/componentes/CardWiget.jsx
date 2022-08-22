import logo from '../imagenes/logo.svg'
import { useCartContext } from './CartContext'

export const CardWiget = () => {
    const {productoTotal} = useCartContext()
    return(
<div>
    <img style={{width:50,height:50}} src={logo} />
    <span style={{color:'white', fontSize:22}}>{productoTotal() || ''}</span>
</div>
    );
}
export default CardWiget