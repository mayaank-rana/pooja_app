import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './Footer.elements'

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'>Contact</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
            <FooterLink to='/'>Destinations</FooterLink>
            <FooterLink to='/'>Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            SensibleInsane
          </SocialLogo>
          <WebsiteRights>SensibleInsane © 2022</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href='https://www.facebook.com/sensibleinsaneart-101865454883373'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href='https://www.instagram.com/sensibleinsaneart/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href='https://www.youtube.com/channel/UCtZC4B319XCR0HgidatY0qw'
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href='https://twitter.com/SensibleInsane?t=6mH8ioJ7XslF05TWwKn-RA&s=09'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
