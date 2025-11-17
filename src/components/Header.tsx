import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from '../context/ThemeProvider';
import './Header.css';

function Header() {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <h1>Context API</h1>
      <button onClick={ toggleTheme }></button>
        { theme === 'light' && <MdDarkMode size={ 18 } className='icon'/> }
        { theme === 'dark' && <MdLightMode size={ 18 } className='icon'/> }
    </header>
  )
}

export default Header;