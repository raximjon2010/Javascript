// ================================Head =========================================
let title = document.title = 'Navbar'

// ================================Body =========================================
let div = document.createElement('div');
div.innerHTML = '<ul><li>Home</li> <li>About</li> <li>Contacts Us</li> </ul>';





// ================================Css =========================================
div.style.width = '100vw';div.style.height = '50px';div.style.backgroundColor = 'blue';div.style.borderRadius = '5px';
div.style.listStyleType = 'none'; div.style.display = 'flex'; div.style.justifyContent = 'space-around';div.style.alignItems = 'center'





document.body.appendChild(div)
