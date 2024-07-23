
const Header = ()=>{
    let btnName="Login";
    return(
        <div className="header">
            <div className="logo">
                <img src="https://img.freepik.com/premium-vector/premium-food-logo-design-template_145155-4006.jpg?w=740" alt="foodname"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>
                        <button className="login-btn" onClick={()=>
                           { 
                            this.btnName = "Logout";
                           }
                        }>{btnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;