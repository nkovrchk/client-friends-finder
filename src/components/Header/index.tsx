import React from 'react';
import { useLocation } from 'react-router-dom';

import { useSession } from 'store/session';
import { Link } from 'ui/Link';

import { HeaderItems, HeaderStyled, HeaderItem, LogoLink } from './styled';

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const { logout } = useSession();

  return (
    <HeaderStyled>
      <LogoLink to="/">FriendsFinder</LogoLink>
      <HeaderItems>
        <HeaderItem>
          <Link
            to="/#howto"
            scroll={(el) => {
              const top = el.getBoundingClientRect().top;
              window.scrollTo({ top: top - 68, behavior: 'smooth' });
            }}
          >
            Как пользоваться?
          </Link>
        </HeaderItem>
        <HeaderItem>
          <Link
            to="/#about"
            scroll={(el) => {
              const top = el.getBoundingClientRect().top;
              window.scrollTo({ top: top - 68, behavior: 'smooth' });
            }}
          >
            О приложении
          </Link>
        </HeaderItem>
        {pathname === '/form' ? (
          <HeaderItem>
            <Link to="#" onClick={logout}>
              Выйти
            </Link>
          </HeaderItem>
        ) : null}
      </HeaderItems>
    </HeaderStyled>
  );
};
