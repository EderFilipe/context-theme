import { createContext } from 'react';

type menuContextType = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const MenuContext = createContext<menuContextType | undefined>(undefined);

export default MenuContext;