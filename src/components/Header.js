import { Link } from 'react-router-dom';

import styled from "styled-components"
import DropdonwnMenu from './DropDown.js';


// eslint-disable-next-line no-unused-vars
const StyledHeader = styled.header`
max-width: 1280px;
height: 80px;
padding-left:76px;
display: flex;
flex-direction: row;
position: sticky;
justify-content: space-between;
`;
// eslint-disable-next-line no-unused-vars

const Title = styled.p`
font-size: 32px;
line-height: 28px;
font-weight: 700;
`   
export default function Header() {
    return (
        <header >
            <div className='cozLogo'>
                
                <img src='/image/logo.png' width={55} height={30} className='logo'  alt="logo" />
                <Title>COZ Shopping</Title>

            </div>
            <div className='cozIcon'>
                <img src='/image/icon.png' width={34} height={24}  alt="icon"/>
            </div>

           
        </header>
    )

   
}
