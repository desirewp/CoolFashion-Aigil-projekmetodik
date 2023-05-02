import './NavigationTop.css';


const NavigationTop = () => { 
    return(
        <nav>
            {/* Logotyp här */}
            <p>CoolFashion</p>
            <ul>
                <li >Start</li>
                <li>Populärt</li>
                <li className='dropdown-btn'>Kläder
                </li>
              
                <li className='dropdown-btn'>Accessoarer</li>
                <li className='dropdown-btn'>Outlet</li>
                <li>Kontakt</li>
                <li>FAQ</li>
            </ul>
<div id='clothes-dropdown' className='dropdown-clotes'></div>
        </nav>
    )
 }

export default NavigationTop;