/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './footer.css'
import Cake from '../images/bacground/img/cake_img.png'
import Burger from '../images/bacground/img/burger_img.png'
import Salad from '../images/bacground/img/salad_img.png'

function Footer() {
    const [part2, setPart2] = useState({
        right: "-100%"
    })
    const [part1, setPart1] = useState({
        left: "5%"
    })
    const [leftLimit, setLeftLimit] = useState({
        color: "#000"
    })
    const [rightLimit, setRightLimit] = useState({
        color: "#000"
    })

    const moveRightActive = () => {
        setPart2({
            right: "0%",
            transition: "all 1s ease-in-out 0s"
        })
        setPart1({
            left: "-100%",
             transition: "all 1s ease-in-out 0s"
        })
        setRightLimit({
            color: "gray"
        })
        setLeftLimit({
            color: "#000"
        })
    }
    const moveLeftActive = () => {
        setPart2({
            right: "-100%",
            transition: "all 1s ease-in-out 0s"
        })
        setPart1({
            left: "5%",
             transition: "all 1s ease-in-out 0s"
        })
        setLeftLimit({
            color: "gray"
        })
        setRightLimit({
            color: "#000"
        })
    }
    return (
      
      <footer>
          
   <button onClick={() => moveLeftActive()} class="leftArrow arrow" style={leftLimit}>{ '<' }</button>
          <div class="border" id="border">
           
                
                <div style={part1} class="part_1" id="part1">  
                    <a href="#">     
                        <div class="block_shadow" ></div>

                        <div class="block_1 type" >
                            <div class="block_img">
                                <div class="shadow_img_1"></div>
                                <img src={ Burger } alt="burger" />
                            </div>
                               
                            <div class="content">
                                <h3>Burger</h3>
                                <div class="price_1"><span>$</span>3.25</div>
                            </div>
            
            
                        </div>
                    </a>
                    
                    <a href="#">
                        <div class="block_shadow2"></div>
                        <div class="block_2 type" >
                            <div class="block_img">
                                <div class="shadow_img_2"></div>
                                <img src={ Cake } alt="cake" />
                            </div>
                                
                            <div class="content">
                                <h3 class="tittle_cake">Cake</h3>
                                <div class="price_2"><span>$</span>2.25</div>
                            </div>
            
                        </div>
                    </a>
                    
                    <a href="#">
                        <div class="block_shadow3"></div>
                        <div class="block_3 type" >
                            <div class="block_img">
                                <div class="shadow_img_3"></div>
                                <img src={ Salad } alt="salad" />
                            </div>
                                
                            <div class="content">
                                <h3>Salad</h3>
                                <div class="price_3"><span>$</span>5.25</div>
                            </div>
            
                        </div>
                    </a>
                    
                </div>
    
                <div style={part2} class="part_2" id="part2">
                    <a href="#" class="links_footer">
                        <div class="block_shadow" />

                        <div class="block_1 type" />

                    </a>
                    
                    <a href="#" class="links_footer">
                      <div class="block_shadow2"/>
                      
                        <div class="block_2 type" />

                    </a>
                   
                    <a href="#" class="links_footer">
                      <div class="block_shadow3"/>
                      
                        <div class="block_3 type" />
                    </a>
                    
              </div>

            </div>
            <button onClick={() => moveRightActive()} style={rightLimit} className='rightArrow arrow'> { '>' } </button>
        </footer>
  )
}

export default Footer
