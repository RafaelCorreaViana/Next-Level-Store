import Image from "next/image";
import back from '../../../public/img/back.png'

function Nav({voltar}) {
    return(
        <nav>
            <div className="center">
                <a href="/">Home</a>
                <a href="/products">Products</a>
            </div>
        </nav>
        
    )
}

export default Nav;