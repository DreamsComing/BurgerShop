/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import './header.css'

function Header() {
  return (
      <header>
      <div class="wrapper___header">
                <p class="logo">f <span class="orange_red">o</span> c <span class="orange">o</span> </p>
                <nav>
                    <div class="links">
                        <a href="#">
                            Home
                        </a>
        
                        <a href="#">
                            Menu
                        </a>
        
                        <a href="#">
                            Service
                        </a>
        
                        <a href="#">
                            Shop
                        </a>
                        
                    </div>

                    <div class="silect_block">
                        <select name="more" id="more">
                            <option value="home">
                                <a>Home</a>
                            </option>
                            <option value="home">
                                <a href="#">Menu</a>
                            </option>
                            <option value="home">
                                <a href="#">Service</a>
                            </option>
                            <option value="home">
                                <a href="#">Shop</a>
                            </option>

                        </select>
                    </div>
    
                </nav>
                <div class="another">
                    <div class="search">
                        <a href="#" class="gray_search"/>
                            
                        <a href="#" class="busket"/>           
                    </div>
                   
                    <div class="block___signIN_login">
                        <div class="sigm_in__block">
                            <button class="signIn"> 
                               <p>sing in</p> 
                               <p class="signIn_img"></p>
                            </button>
                        </div>
                        <div class="login___block">
                            <button class="login">  
                               <p>login</p> 
                               <p class="logIn_img"><img src="./css/img/bacground/singIn.png" alt="signIn" /></p>
                            </button>
                        </div>                       
                        

                    </div>
                </div>
            </div>
    </header>
  )
}

export default Header
