import React from 'react'
import './hero.css'

function Hero() {
    return (
        <section className='hero-section'>
            <div className='hero-container'>
                <div className='hero-content'>
                    <h1 className='hero-headline'>
                        Why you need subscription<br />
                        when you can have your<br />

                        <span className="hero-highlight">own CRM</span>
                    </h1>
                    {/* <p className="hero-subheadline">
                        Paying a Fortune on subscription? You are probably asking yourself if this subscription is really worth the money. A successful business is built on great people and strong values, not just expensive software. If your CRM keeps getting more expensive without giving you more value, it is time to make a smart change
                    </p> */}
                    <button className="btn-hero-primary">
                        GET STARTED
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero