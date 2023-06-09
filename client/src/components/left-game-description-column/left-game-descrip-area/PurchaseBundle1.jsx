import React, { useContext } from 'react';
import BundleContext from "../../../context/BundleContext";
import '../styles/PurchaseBundle.css'

function PurchaseBundle1() {
    const { showBundleTooltip, tooltipPosition, handleMouseEnter, handleMouseExit } = useContext(BundleContext);

    const tooltipStyle = {
        position: 'fixed',
        top: tooltipPosition.y - 105,
        left: tooltipPosition.x - 37,
    };

    return (
        <div className="game_bundle_wrapper game_bundle">

            <form name="add_bundle_to_cart_232">
            </form>
            <div className="game_bundle_area_purchase_platform">
                <span className='bundle1_platform_img win'></span>
                <span className='bundle1_platform_img mac'></span>
            </div>
            <h1 className='bundle1_h1'>Buy Valve Complete Pack
                <span
                    className='bundle_label'
                    onMouseEnter={(e) => handleMouseEnter(e)}
                    onMouseLeave={handleMouseExit}
                    tooltip-text="Bundles are a special discount on a set of products. If you already own some of the products contained in the bundle, purchasing the bundle will allow you to 'complete the set', paying only for the products you don't already own while still receiving the full bundle discount on each of those products."
                >
                    BUNDLE
                </span>
                {showBundleTooltip && (
                    <div className="tooltip" style={tooltipStyle}>
                        Bundles are a special discount on a set of products. If you already own some of the products contained in the bundle, purchasing the bundle will allow you to 'complete the set', paying only for the products you don't already own while still receiving the full bundle discount on each of those products.
                    </div>
                )}
                <span className='bundle_label_tooltip'>(?)</span>
            </h1>
            <p className='package_contents'>
                <div className='bundle_deal'>Buy this bundle to save 55% off all 22 items!</div>
                <div className='bundle_contents_preview collapsed'>
                    <div className='bundle_contents_preview_position'>
                        <a>
                            <img className='first_game_inside_bundle1' />
                        </a>
                        <a>
                            <img className='second_game_inside_bundle1' />
                        </a>
                        <a>
                            <img className='third_game_inside_bundle1' />
                        </a>
                        <a>
                            <img className='fourth_game_inside_bundle1' />
                        </a>
                        <a>
                            <img className='fifth_game_inside_bundle1' />
                        </a>
                        <a>
                            <img className='sixth_game_inside_bundle1' />
                        </a>
                        <a>
                            <img className='seventh_game_inside_bundle1' />
                        </a>
                        <a>
                            <img className='eighth_game_inside_bundle1' />
                        </a>
                        <a>
                            <img className='ninth_game_inside_bundle' />
                        </a>
                    </div>
                </div>
            </p>
            <div className='game_purchase_action'>
                <div className="bundle_purchase_action_bg">
                    <div className='btn_addtocart btn_package info'>
                        <a className='btn_blue_steamui btn_package info'>
                            <span>Bundle Info</span>
                        </a>
                    </div>
                    <div className='bundle_base_discount'>-55%</div>
                    <div className='discount_block game_purchase_discount no_discount'>
                        <div className='discount_prices'>
                            <div className='your_price_label'>Your Price:</div>
                            <div className='discount_price'>$65.70</div>
                        </div>
                    </div>
                    <div className='btn_addtocart'>
                        <a className='btn_green_steamui btn_medium'>
                            <span>Add to Cart</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PurchaseBundle1;