import './Header.scss'
import Logo from "@/componenents/Logo"


const Header = () => {
    return (
     <header className="header">
        <div className="header__inner container">
           <Logo
               className="header__logo"
               loadding="eager"/>
        </div>
     </header>
    )
}

export default Header