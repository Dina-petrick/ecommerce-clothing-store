import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    
`

export const LogoContainer = styled(Link)`
    padding-left: 25px;
`


export const NavLinkContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center; 
    justify-content: flex-end;
`

export const NavLink = styled(Link)`
    padding-inline: 20px;
    cursor: pointer;
`