import React, { useEffect } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {

    // Close on ESC
    useEffect(() => {
        const handleEsc = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Lock scroll
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => (document.body.style.overflow = 'auto');
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>×</button>

                <div className="modal-body">
                    <div className="modal-left">
                        <h2 className="modal-title">Get Started</h2>
                        <p className="modal-subtitle">
                            Join us and transform your business today.
                        </p>
                    </div>

                    <div className="modal-right">
                        <form
                            className="modal-form"
                            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfEcgAs9Wp5SQrutIkBfL4AoR6gefT9dkKHj6MZ10ijQ6FvBg/formResponse"
                            method="POST"
                            target="hidden_iframe"
                            onSubmit={() => {
                                setTimeout(() => {
                                    alert("Thanks! We’ll contact you shortly.");
                                    onClose();
                                }, 500);
                            }}
                        >
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="entry.1347796074"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="entry.1505141721"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="entry.1488136435"
                                    rows="3"
                                    placeholder="Tell us about your needs..."
                                ></textarea>
                            </div>

                            <button type="submit" className="modal-submit-btn">
                                Join Waiting List <span className="arrow">→</span>
                            </button>
                        </form>

                        {/* Hidden iframe prevents redirect */}
                        <iframe name="hidden_iframe" style={{ display: 'none' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
