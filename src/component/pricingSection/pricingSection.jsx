
import './pricingSection.scss'
import PriceCard from './priceCard/priceCard'

const Pricing = () => {
    return (
        <div class="container">
            <div class="row">
                <PriceCard
                    plan="Plan 1"
                    month="1 Month"
                    bandwith="100 MB"
                    price="100 taka"
                    support="Live"
                />
                <PriceCard
                    plan="Plan 2"
                    month="6 Month"
                    bandwith="600 MB"
                    price="500 taka"
                    support="Live"
                />
                <PriceCard
                    plan="Plan 3"
                    month="1 Year"
                    bandwith="1.5 GB"
                    price="1000 taka"
                    support="Live"
                />
            </div>
        </div>
    )
}

export default Pricing
