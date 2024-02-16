import { SpriteIcon } from '@/components/Shared';
import { INSTAGRAM, PHONE, LOCATION } from '@/constants';
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
} from './Footer.styled';

export const Footer = () => (
  <FooterContainer id="footer">
    <ContactContainer>
      <ContactTitle>
        {/* Залишились питання? <strong>Зв&apos;яжіться з нами!</strong> */}
      </ContactTitle>

      <LinkContainer>
        <SocialsList>
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
        </SocialsList>

        <ContactList>
          <li>
            <ContactLink href={PHONE.link} aria-label={PHONE.aria}>
              <SpriteIcon symbol="phone" />

              <span>{PHONE.label}</span>
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
        <span>&nbsp;</span>
        Всі права захищено &#169; 2024
      </CopyrightText>
    </CopyrightContainer>
  </FooterContainer>
);
