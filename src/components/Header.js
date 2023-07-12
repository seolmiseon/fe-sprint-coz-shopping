import './header.css'; 
import { Link } from 'react-router-dom';
import styled from "styled-components"
import DropdonwnMenu from './DropDown.js';



export default function Header() {
    return (
        <header className='header-container'>
            <div>
                
                <img src='/image/logo.png'  alt="logo" />
                <span className='title-coz'>COZ Shopping</span>

            </div>
            <div >
                <img src='/image/icon.png'   alt="icon"/>
            </div>

           
        </header>
    )

   
}
