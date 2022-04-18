import React from 'react';

import { Link } from 'ui/Link';

import { HeaderItems, HeaderStyled, HeaderItem, LogoLink } from './styled';

export const Header: React.FC = () => {
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
      </HeaderItems>
    </HeaderStyled>
  );
};
