// Layout.tsx
import React, { ReactNode } from 'react';
import { useTheme } from './ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`theme-${theme} transition-all duration-300`}>
      {children}
    </div>
  );
};

export default Layout;
