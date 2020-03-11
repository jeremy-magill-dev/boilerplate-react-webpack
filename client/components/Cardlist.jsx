import React from 'react'

import Card from './Card'

const Cardlist = () => {
    return (
        <div className="row">
            <div className="col-sm-4">
                <Card featureImage="https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png"
                        title="How To Make Interactive ReactJS Form"
                        description="Let's write some interactive form with React"
                        link="https://sebhastian.com/interactive-react-form"/>
            </div>
            <div className="col-sm-4">
                <Card />    
            </div>
            <div className="col-sm-4">
                <Card />
            </div>
        </div>
    )
}

export default Cardlist