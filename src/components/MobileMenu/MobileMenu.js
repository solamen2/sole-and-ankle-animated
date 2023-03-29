/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  background: var(--color-backdrop);

  @keyframes fade-in {
    from {
      background: var(--color-black);
    }
    to {
      background: var(--color-backdrop);
    }
  }

  animation: fade-in 500ms cubic-bezier(.57,0,.43,1);

  @keyframes fade-in-link {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;

  @keyframes slide-in {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: slide-in 500ms cubic-bezier(.57,0,.43,1);
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  :nth-child(1) { --nth-child: 1 }
  :nth-child(2) { --nth-child: 2 }
  :nth-child(3) { --nth-child: 3 }
  :nth-child(4) { --nth-child: 4 }
  :nth-child(5) { --nth-child: 5 }
  :nth-child(6) { --nth-child: 6 }

  &:first-of-type {
    color: var(--color-secondary);
  }

  animation: fade-in-link 500ms backwards;
  animation-delay: calc(var(--nth-child) * 75ms);
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;

  :nth-child(1) { --nth-child: 7 }
  :nth-child(2) { --nth-child: 8 }
  :nth-child(3) { --nth-child: 9 }

  animation: fade-in-link 500ms backwards;
  animation-delay: calc(var(--nth-child) * 100ms);
  
`;

export default MobileMenu;
