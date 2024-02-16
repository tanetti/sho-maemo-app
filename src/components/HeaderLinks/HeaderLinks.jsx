import PropTypes from 'prop-types';
import { LOCATION, PHONE, TELEGRAM } from '@/constants';
import { HeaderLink, LinkItem, LinkList } from './HeaderLinks.styled';
import { SpriteIcon } from '@/components/Shared';

export const HeaderLinks = ({ scrolled }) => {
  return (
    <LinkList>
      <LinkItem scrolled={scrolled}>
        <HeaderLink
          href={LOCATION.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={LOCATION.aria}
        >
          <SpriteIcon symbol="location" />
        </HeaderLink>
      </LinkItem>

      <LinkItem scrolled={scrolled}>
        <HeaderLink
          href={TELEGRAM.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={TELEGRAM.aria}
        >
          <SpriteIcon symbol="telegram" />
        </HeaderLink>
      </LinkItem>

      <LinkItem scrolled={scrolled}>
        <HeaderLink href={PHONE.link} aria-label={PHONE.aria}>
          <SpriteIcon symbol="phone" />
        </HeaderLink>
      </LinkItem>
    </LinkList>
  );
};

HeaderLinks.propTypes = { scrolled: PropTypes.bool.isRequired };
