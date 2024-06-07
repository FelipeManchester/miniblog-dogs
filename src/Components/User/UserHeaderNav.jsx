import React, { useEffect, useState } from 'react';
import styles from './UserHeaderNav.module.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MinhasFotos from '../../Assets/feed.svg?react';
import Estatisticas from '../../Assets/estatisticas.svg?react';
import AdicionarFoto from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';
import useScreenSize from '../../Hooks/useScreenSize';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobile = useScreenSize('(max-width: 40rem)');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to='/conta' end>
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to='/conta/estatisticas'>
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to='/conta/post'>
          <AdicionarFoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
