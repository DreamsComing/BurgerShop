import React, {useState , useReducer } from 'react'
import './text.css'

function Text() {
    // const [order , setOrder] = useState(1)
    // const [price, setPrice] = useState(12.15)
    // const [styleColorDown, setStyleColorDown] = useState({
    //         color: "#007bff"
    // })
    // const [styleColorUp, setStyleColorUp] = useState({
    //         color:" #007bff"
    // })
    // const upOrder = () => {
    //     if (order < 3) {
    //         setOrder(order + 1)
    //         setPrice(price + 12.15)
    //         setStyleColorDown({
    //             color:"#007bff"
    //         })
    //     } else {
    //         setStyleColorUp({
    //             color:'gray'
    //         })
    //     } 

        
    // }
    const [styleColorDown, setStyleColorDown] = useState({
        color: "#007bff"
    })
    const [styleColorUp, setStyleColorUp] = useState({
        color:" #007bff"
    })
    const manage = (state, action) => {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case "upOrder":
                return { order: state.order + 1, price: state.price + 12.15 };
            case "downOrder":
                return {order: state.order - 1, price: state.price - 12.15}
            
        }
    }
    const [state, dispatch] = useReducer(manage, {order: 1, price:12.15})
        // eslint-disable-next-line eqeqeq
        if (state.order < 3 ) {
            setStyleColorUp({
                color:"#007bff"
            })
        } else {
            setStyleColorUp({
                color: 'gray'
            })
    }
    
        if (state.order > 3 ) {
            setStyleColorDown({
                color:"#007bff"
            })
        } else {
            setStyleColorDown({
                color: 'gray'
            })
        }
 
  return (
    <main>
      <div class="block___order">
                    <h1>Order your</h1>
                    <h2>favourite Foods</h2>
                    <p class="text_order">
                        Fresh and tasty seafood curry sit amet , consectetur
                        <br />
                        Curabitur auctor pulivinar proin 
                        <span>sit amet</span>
                    </p>
                </div>
                <div class="total___block">
                    <p class="text_total">Total order : <span class="price" /> 
                        
                        <div class="move___price" id="blokPrice">
                         <span>$</span>  <span class="input_price">{ state.price.toFixed(2) }</span> 
                        </div>
                    </p>
                </div>
                <div class="block___order_buy">
                    <div class="number_order_main">
                        <button onClick={() => dispatch({type: "downOrder"})} class="buttons">
                            <span className="arrows down" style={styleColorDown} >{'>'}</span>
                        </button>
    
                        <hr class="left_line line"/>
                        
                       <div class="number___order">
                         <span class="order" id="orderNumber">{ state.order }</span> 
                       </div>
    
                        <hr class="right_line line"/>
    
                        <button onClick={() => dispatch({type: "upOrder"})} id="upButtone" class="buttons">
                            <span class="arrows up" style={styleColorUp}>{'>'}</span>
                        </button> 
                    </div>

                    <button class="block__buy">
                        <p>Buy Now</p>
                    </button>

                </div>
    </main>
  )
}

export default Text
