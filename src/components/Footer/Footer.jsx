import { SpriteIcon } from '@/components/Shared';
import {
  FACEBOOK,
  INSTAGRAM,
  YOUTUBE,
  PHONE,
  MAIL,
  LOCATION,
} from '@/constants';
import {
  ContactTitle,
  FooterContainer,
  CopyrightContainer,
  ContactContainer,
  CopyrightText,
  ContactList,
  ContactLink,
  SocialsList,
  LinkContainer,
  SocialLink,
  SocialLinkYouTube,
} from './Footer.styled';

export const Footer = () => (
  <FooterContainer id="footer">
    <ContactContainer>
      <ContactTitle>
        Залишились питання? <strong>Зв&apos;яжіться з нами!</strong>
      </ContactTitle>

      <LinkContainer>
        <SocialsList>
          <li>
            <SocialLink
              href={FACEBOOK.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={FACEBOOK.aria}
            >
              <SpriteIcon symbol="facebook" />
            </SocialLink>
          </li>

          <li>
            <SocialLink
              href={INSTAGRAM.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={INSTAGRAM.aria}
            >
              <SpriteIcon symbol="instagram" />
            </SocialLink>
          </li>

          <li>
            <SocialLinkYouTube
              href={YOUTUBE.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={YOUTUBE.aria}
            >
              <SpriteIcon symbol="youtube" />
            </SocialLinkYouTube>
          </li>
        </SocialsList>

        <ContactList>
          <li>
            <ContactLink href={PHONE.link} aria-label={PHONE.aria}>
              <SpriteIcon symbol="phone" />

              <span>{PHONE.label}</span>
            </ContactLink>
          </li>

          <li>
            <ContactLink href={MAIL.link} aria-label={MAIL.aria}>
              <SpriteIcon symbol="mail" />

              <span>{MAIL.label}</span>
            </ContactLink>
          </li>

          <li>
            <address>
              <ContactLink
                href={LOCATION.link}
                aria-label={LOCATION.aria}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SpriteIcon symbol="location" />

                <span>{LOCATION.label}</span>
              </ContactLink>
            </address>
          </li>
        </ContactList>
      </LinkContainer>
    </ContactContainer>

    <CopyrightContainer>
      <CopyrightText>
        <span>
          Дитячо-юнацька спортивна школа Слобожанської селищної ради.&nbsp;
        </span>
        Всі права захищено &#169; 2024
      </CopyrightText>
    </CopyrightContainer>
  </FooterContainer>
);
