import './Header.css';

function Header(props){
    return(
        <div className="header">
            <p id="heading">Product Cart</p>
            <div id="icon">
            <i class="fa-solid fa-cart-shopping"></i>
            <p id="icon_content">{props.totalCount}</p>
            </div>
            
            
            </div>
    );
}
export default Header;