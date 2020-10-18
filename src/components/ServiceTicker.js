import React from 'react'
import Ticker from 'react-ticker'

// Styles, Fonts, Images
import "../styles/components/ticker.scss"

const MoveStuffAround = () => (
    <div className="service__ticker">
        <Ticker speed={1.5}>
            {({ index }) => (
                <div className="service__ticker__inner">
                    <div>
                        <h1 className="text--white">Design Concepts</h1>
                    </div>
                    <div>
                        <h1>Platforms</h1>
                    </div>
                    <div>
                        <h1 className="text--blue">Web Development</h1>
                    </div>
                </div>
            )}
        </Ticker>
        <Ticker speed={1.5} direction="toRight">
            {({ index }) => (
                <div className="service__ticker__inner">
                    <div>
                        <h1 className="text--blue">Design </h1>
                    </div>
                    <div>
                        <h1 className="text--white"> Web Applications</h1>
                    </div>
                    <div>
                        <h1>Strategy</h1>
                    </div>

                </div>
            )}
        </Ticker>
        <Ticker speed={1.5}>
            {({ index }) => (
                <div className="service__ticker__inner">
                    <div>
                        <h1 className="text--white">Web Design</h1>
                    </div>
                    <div>
                        <h1>Corporate Identity</h1>
                    </div>
                    <div>
                        <h1 className="text--blue">Branding</h1>
                    </div>
                </div>
            )}
        </Ticker>
    </div>
)

export default MoveStuffAround