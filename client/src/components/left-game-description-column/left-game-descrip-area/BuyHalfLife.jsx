import React, { useContext } from 'react';
import '../styles/BuyHalfLife.css'
import '../styles/GameDescriptionArea2.css'
import '../styles/GameDescriptionArea.css'

function BuyHalfLife() {
    return (
        <div className='game_area_purchase_game_wrapper'>
            <div className='game_area_purchase_game' id='game_area_purchase_section_add_to_cart_34'>
                <form name='add_to_cart_34' action='https://store.steampowered.com/cart/' method='POST'>
                </form>
                <div className='game_area_purchase_platform'>
                    <span class='platform_img win'></span>
                    <span class='platform_img mac'></span>
                    <span class='platform_img linux'></span>
                </div>
                <h1>Buy Half-LIfe</h1>
                <div className='game_purchase_action_bg'>
                    <div className='game_purchase_price price' data-price-final='999'> $9.99 </div>
                    <div className='btn_addtocart'>
                        <a class='btn_green_steamui btn_medium'>
                            <span>Add to Cart</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyHalfLife;