import React, { useState } from 'react';
import styled from 'styled-components';
//import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="http://localhost:3000/">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#http://localhost:3000/">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#http://localhost:3000/">Shop</a>
        <a href="http://localhost:3000/">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}>Menu</CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="http://localhost:3000/">Existing Inventontary</a>
        </li>
        <li>
          <a href="http://localhost:3000/">Used Inventory</a>
        </li>
        <li>
          <a href="http://localhost:3000/">Trade-in</a>
        </li>
        <li>
          <a href="http://localhost:3000/">CyberTruck</a>
        </li>
        <li>
          <a href="http://localhost:3000/">Roadaster</a>
        </li>
        <li>
          <a href="http://localhost:3000/">Existing Inventontary</a>
        </li>
        <li>
          <a href="http://localhost:3000/">Existing Inventontary</a>
        </li>
        <li>
          <a href="http://localhost:3000/">Existing Inventontary</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  position: fixed;
  padding: 0 20px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  z-index: 1;
  img {
    height: 16px;
    width: 128px;
  }
  @media (max-width: 768px) {
    left: 0;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  a {
    font-weight: 600;
    ${'' /* text-transform: uppercase; */}
    padding: 5px 10px;
    letter-spacing: 1px;
    flex-wrap: nowrap;
    border-radius: 15px;

    :hover {
      background: rgba(0, 0, 0, 0.07);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  padding: 10px 12px;
  border-radius: 15px;
  margin: 0;
  align-items: center;

  a {
    font-weight: 600;
    padding: 5px 10px;
    border-radius: 15px;
    ${'' /* text-transform: uppercase; */}
    :hover {
      background: rgba(0, 0, 0, 0.06);
    }
    margin-right: 10px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const CustomMenu = styled.div`
  cursor: pointer;
  border: none;
  background: transparent;
  ${'' /* width: 70px; */}
  border-radius: 15px;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 5px 10px;
  font-weight: 600;
  :hover {
    background: rgba(0, 0, 0, 0.06);
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.06);
  width: 300px;
  z-index: 6;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;

  transform: ${props => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-radius: 16px;
    :hover {
      background: rgba(0, 0, 0, 0.06);
    }

    a {
      font-weight: 600;
      padding: 15px;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  :hover {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 16px;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
