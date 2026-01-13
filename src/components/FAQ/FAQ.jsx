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
            question: "What makes Eron CRM different from others?",
            answer: "Unlike traditional CRMs that charge monthly subscriptions per user, Eron CRM offers a custom-built solution that you own. You get all the powerful features without the recurring costs that eat into your profit."
        },
        {
            question: "Can I migrate my data from Zoho or Salesforce?",
            answer: "Yes! We specialize in seamless migrations. Our team will help you move your existing leads, contacts, and deals from platforms like Zoho or Salesforce into your new Eron CRM without any data loss."
        },
        {
            question: "How customizable is the CRM for my business?",
            answer: "Highly customizable. Since we build it specifically for you, every field, workflow, and dashboard is designed to match your unique sales process, rather than forcing you to adapt to a generic template."
        },
        {
            question: "Is there a limit to the number of users I can add?",
            answer: "No. Since you own your CRM instance, you can add as many users as you need without increasing your costs. This makes Eron CRM the most scalable solution for growing teams."
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
                        about Eron CRM, migration, and custom features.
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
