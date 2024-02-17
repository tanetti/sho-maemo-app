import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import { HeaderLinks } from '@/components';
import { SpriteIcon } from '@/components/Shared';
import { SCROLL_THROTTLE_DELAY } from '@/constants';
import { HeaderContainer, HeaderSizer, LogoLink } from './Header.styled';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY <= 30) return setIsScrolled(false);

      setIsScrolled(true);
    };

    const throttledOnScroll = throttle(onScroll, SCROLL_THROTTLE_DELAY);

    addEventListener('scroll', throttledOnScroll);

    return () => removeEventListener('scroll', throttledOnScroll);
  }, []);

  return (
    <HeaderContainer scrolled={isScrolled}>
      <HeaderSizer>
        <LogoLink
          to="/"
          aria-label="Логотип Sho-Maemo"
          scrolled={isScrolled.toString()}
        >
          <SpriteIcon symbol="logo" />
        </LogoLink>

        <HeaderLinks scrolled={isScrolled} />
      </HeaderSizer>
    </HeaderContainer>
  );
};
