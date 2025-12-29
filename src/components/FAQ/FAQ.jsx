import React, { useState, useEffect, useRef } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Who is eligible to apply for funding?",
            answer: "We support a wide range of businesses. Generally, if you have a consistent revenue stream and have been operating for at least 6 months, you are eligible to apply."
        },
        {
            question: "How quickly can I access the funds?",
            answer: "Once approved, funds are typically available within 24-48 hours. We prioritize speed to ensure you can capitalize on opportunities immediately."
        },
        {
            question: "Do I need to provide collateral or give up equity?",
            answer: "No. Our funding models are non-dilutive and unsecured. You keep full ownership of your business, and we don't require physical collateral."
        },
        {
            question: "Will applying affect my credit score?",
            answer: "Applying typically involves a soft credit pull which does not affect your credit score. We focus more on your business performance than personal credit history."
        }
    ];

    return (
        <section className="faq-section" ref={sectionRef}>
            <div className={`faq-container ${isVisible ? 'animate-in' : ''}`}>

                {/* Left Side: Title */}
                <div className="faq-header">
                    <h2 className="anim-item" style={{ transitionDelay: '0ms' }}>Frequently <br /> Asked Questions</h2>
                    <p className="anim-item" style={{ transitionDelay: '100ms' }}>
                        Clear answers to the most common questions <br />
                        about our funding process, eligibility, and costs.
                    </p>
                </div>

                {/* Right Side: Accordion */}
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item anim-item ${activeIndex === index ? 'active' : ''}`}
                            style={{ transitionDelay: `${200 + (index * 100)}ms` }}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{item.question}</h3>
                                <span className="faq-icon">
                                    {activeIndex === index ? '−' : '+'}
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
