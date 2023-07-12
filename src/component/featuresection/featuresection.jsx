import './feature.scss'
import Card from '../shared/card/Card'

const FeatureSection = () => {
    return (
        <div className="container">
            <div className="featurecontainer" id='container'>
                <div className="heading">
                    <h1>Features</h1>
                </div>
                <div className="featurebody">
                    <Card title='Auto Generate' />
                    <Card title='Custom Generate' />
                    <Card title='Online Exam' />
                    <Card title='Online Class' />
                    <Card title='Ofline tutorial' />
                </div>
            </div>
        </div>
    )
}

export default FeatureSection