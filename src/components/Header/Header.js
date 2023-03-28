import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <LinksWrapper>
            <NavLink href="/sale">Sale</NavLink>
            <HoverNavLink href="/sale">Sale</HoverNavLink>
          </LinksWrapper>
          <LinksWrapper>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <HoverNavLink href="/new">New&nbsp;Releases</HoverNavLink>
          </LinksWrapper>
          <LinksWrapper>
            <NavLink href="/men">Men</NavLink>
            <HoverNavLink href="/men">Men</HoverNavLink>
          </LinksWrapper>
          <LinksWrapper>
            <NavLink href="/women">Women</NavLink>
            <HoverNavLink href="/women">Women</HoverNavLink>
          </LinksWrapper>
          <LinksWrapper>
            <NavLink href="/kids">Kids</NavLink>
            <HoverNavLink href="/kids">Kids</HoverNavLink>
          </LinksWrapper>
          <LinksWrapper>
            <NavLink href="/collections">Collections</NavLink>
            <HoverNavLink href="/collections">Collections</HoverNavLink>
          </LinksWrapper>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;

  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
`;

const HoverNavLink = styled(NavLink)`
  position: relative;
  font-weight: ${WEIGHTS.bold};
`;

const LinksWrapper = styled.div`
  position: relative;
  overflow: hidden;
  --transition-time: 200ms;

  ${NavLink} {
    color: var(--color-gray-900);
    transform: translateY(0%);
    @media (prefers-reduced-motion: no-preference) {
      transition: transform var(--transition-time);
    }
  }

  &:first-of-type ${NavLink} {
    color: var(--color-secondary);
    transform: rotateY(0deg);
    @media (prefers-reduced-motion: no-preference) {
      transition: transform var(--transition-time) var(--transition-time);
    }
  }

  ${HoverNavLink} {
    color: var(--color-gray-900);
    transform: translateY(100%);
    @media (prefers-reduced-motion: no-preference) {
      transition: transform var(--transition-time);
    }
  }

  &:first-of-type ${HoverNavLink} {
    color: var(--color-secondary);
    transform: rotateY(90deg);
    @media (prefers-reduced-motion: no-preference) {
      transition: transform var(--transition-time);
    }
  }

  &:hover {
    ${NavLink} {
      transform: translateY(-100%);
      @media (prefers-reduced-motion: no-preference) {
        transition: transform var(--transition-time);
      }
    }
    &:first-of-type ${NavLink} {
      transform: rotateY(-90deg);
      @media (prefers-reduced-motion: no-preference) {
        transition: transform var(--transition-time);
      }
    }
    ${HoverNavLink} {
      transform: translateY(0%);
      @media (prefers-reduced-motion: no-preference) {
        transition: transform var(--transition-time);
      }
    }
    &:first-of-type ${HoverNavLink} {
      transform: rotateY(0deg);
      @media (prefers-reduced-motion: no-preference) {
        transition: transform var(--transition-time) var(--transition-time);
      }
    }
  }
`;

export default Header;
