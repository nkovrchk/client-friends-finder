import React from 'react';

import { useAuth } from 'context';
import { Link } from 'ui/Link';

import { HeaderItems, HeaderStyled, HeaderItem, LogoLink } from './styled';

export const Header: React.FC = () => {
  const { isAuthed, logout } = useAuth();

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
        {isAuthed ? (
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
