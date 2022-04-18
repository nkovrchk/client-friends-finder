import { variants } from 'theme';

export const buttonTypes = {
  primary: {
    backgroundColor: 'buttonPrimary',
    borderColor: 'buttonPrimary',
    color: 'simpleWhite',
    '&:hover': {
      backgroundColor: 'buttonPrimaryHover',
      borderColor: 'buttonPrimaryHover',
      color: 'simpleWhite',
    },
    '&:active': {
      backgroundColor: 'buttonPrimaryPressed',
      borderColor: 'buttonPrimaryPressed',
      color: 'simpleWhite',
    },
  },
  secondary: {
    backgroundColor: 'transparent',
    borderColor: 'buttonPrimary',
    color: 'buttonPrimary',
    '&:hover': {
      backgroundColor: 'buttonSecondaryHover',
      borderColor: 'buttonPrimary',
      color: 'buttonPrimary',
    },
    '&:active': {
      backgroundColor: 'buttonSecondaryPressed',
      borderColor: 'buttonPrimary',
      color: 'buttonPrimary',
    },
  },
};

export const buttonSizes = {
  xs: {
    height: 24,
    ...variants.caption1SemiBold,
  },
  s: {
    height: 36,
    ...variants.body2SemiBold,
  },
  m: {
    height: 48,
    ...variants.body1SemiBold,
  },
  l: {
    height: 50,
    ...variants.h4SemiBold,
  },
};

export const buttonPaddings = {
  xs: {
    px: 4,
  },
  s: {
    px: 6,
  },
  m: {
    px: 7,
  },
  l: {
    px: 8,
  },
};
