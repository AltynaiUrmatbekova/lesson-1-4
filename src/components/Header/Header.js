import "./Header.css"
// import hearderImage from "./Souvenir-shop.jpg"

function Header () {
    const style = {
        backgroundImage: 'url(${headerImage})'
    };
    return (
        <header className="Header" style={style}>
            <h1>Souvenir Shop Karakol</h1>
            <p>This is an internet shop</p>
        </header>
    )
}
export default Header;