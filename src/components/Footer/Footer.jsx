import { SpriteIcon } from '@/components/Shared';
import { INSTAGRAM, PHONE, LOCATION, TELEGRAM, TIKTOK } from '@/constants';
import {
  Copyright,
  FooterContainer,
  IconLink,
  IconLinkList,
  Line,
  Link,
  LinkList,
  MapFrame,
  MobileTitle,
  TabletTitle,
} from './Footer.styled';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <div>
        <MobileTitle>Як нас знайти:</MobileTitle>

        <MapFrame
          aria-label="Мапа Google"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1321.6708790899725!2d35.0738027!3d48.5075129!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d95863dea7dcef%3A0xf443223a8e2e416f!2sSho%20Maemo!5e0!3m2!1suk!2sua!4v1708089460230!5m2!1suk!2sua"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div>
        <TabletTitle>Як нас знайти:</TabletTitle>

        <LinkList>
          <li>
            <address>
              <Link
                href={LOCATION.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {LOCATION.label}
              </Link>
            </address>
          </li>

          <li>
            <Link href={PHONE.link}>{PHONE.label}</Link>
          </li>

          <li>
            <Link
              href={INSTAGRAM.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {INSTAGRAM.label}
            </Link>
          </li>
        </LinkList>

        <Line />

        <IconLinkList>
          <li>
            <IconLink
              href={INSTAGRAM.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={INSTAGRAM.aria}
            >
              <SpriteIcon symbol="instagram" />
            </IconLink>
          </li>

          <li>
            <IconLink
              href={LOCATION.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={LOCATION.aria}
            >
              <SpriteIcon symbol="location" />
            </IconLink>
          </li>

          <li>
            <IconLink
              href={TELEGRAM.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={TELEGRAM.aria}
            >
              <SpriteIcon symbol="telegram" />
            </IconLink>
          </li>

          <li>
            <IconLink href={PHONE.link} aria-label={PHONE.aria}>
              <SpriteIcon symbol="phone" />
            </IconLink>
          </li>

          <li>
            <IconLink
              href={TIKTOK.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={TIKTOK.aria}
            >
              <SpriteIcon symbol="tiktok" />
            </IconLink>
          </li>
        </IconLinkList>

        <Copyright>{`Sho-Maemo. Всі права захищено \u{00A9} ${year}`}</Copyright>
      </div>
    </FooterContainer>
  );
};
