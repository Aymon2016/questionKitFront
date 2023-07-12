import React from 'react'

const PriceCard = ({ plan, month, bandwith, support, price }) => {
    return (
        <div class="col-md-4 mt-4">
            <div class="pricing-table purple">

                <div class="pricing-label">Fixed Price</div>
                <h2>{plan}</h2>
                <h5>{month}</h5>

                <div class="pricing-features">
                    <div class="feature">Create Question<span>{month}</span></div>
                    <div class="feature">Download PDF<span>{month}</span></div>
                    <div class="feature">Bandwith<span>{bandwith}</span></div>
                    <div class="feature">Support<span>{support}</span></div>
                </div>

                <div class="price-tag">
                    <span class="amount">{price}</span>
                    <span class="after">/month</span>
                </div>

                <a class="price-button" href="#">Get Started</a>
            </div>
        </div>
    )
}

export default PriceCard