import React, { useState } from 'react';
import './FAQ.css';
import { RiAddLine, RiSubtractFill } from 'react-icons/ri';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How can I join the travel community?",
            answer: "Sign up on our website, create a profile, and start connecting with fellow travelers and agencies."
        },
        {
            question: "How do I book a trip?",
            answer: "Browse our trips section, select a trip, and follow the booking instructions to secure your spot."
        },
        {
            question: "Can I suggest new destinations for trips?",
            answer: "Absolutely! Use the Suggest a Destination feature on our website to propose new ideas for upcoming trips."
        },
        {
            question: "Are the trips guided?",
            answer: "Most of our trips are guided by experienced professionals, but some may be self-guided. Check the trip details for specifics."
        },
        {
            question: "Do you offer travel insurance?",
            answer: "Travel insurance is not included but is highly recommended. We can provide recommendations for trusted insurance providers."
        }
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container">
            <div className="accordion__wrapper">
                <h1 className="accordion__title">Frequently Asked Questions</h1>
                {faqs.map((faq, index) => (
                    <div className="accordion" key={index}>
                        <div className="accordion__header" onClick={() => handleToggle(index)}>
                            <h2 className="accordion__question">{faq.question}</h2>
                            <span className={`accordion__icon ${openIndex === index ? 'rotate' : ''}`}>
                                {openIndex === index ? <RiSubtractFill /> : <RiAddLine />}
                            </span>
                        </div>
                        <div
                            className="accordion__content"
                            style={{
                                maxHeight: openIndex === index ? '200px' : '0',
                                transition: 'max-height 0.4s ease'
                            }}
                        >
                            <p className="accordion__answer">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
