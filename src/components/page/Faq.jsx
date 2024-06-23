import { useState} from "react";
export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqData = [
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment online or by calling our clinic. Our friendly staff will be happy to assist you in finding a convenient time for your visit."
    },
    {
      question: "What types of dental services do you offer?",
      answer: "We offer a wide range of dental services including cleanings, fillings, root canals, crowns, and more."
    },
    {
      question: "Does your clinic accept dental insurance?",
      answer: "Yes, we accept a variety of dental insurance plans. Please contact us for more information."
    },
    {
      question: "What can I expect during my first visit to your clinic?",
      answer: "During your first visit, we will conduct a thorough examination of your dental health and discuss any concerns or treatment options with you."
    }
  ];
  return (
    <div className="faq-box">
    <div className="faq-left">
    <h1>Most Asked Questions</h1>
    </div>
    <div className="faq-right">
    <div className="faqstyle">
  <div className="faq-container">
  <div className="faq-items">
    {faqData.map((item, index) => (
      <div className="faq-item" key={index}>
        <div className="faq-question" onClick={() => toggleFAQ(index)}>
          <h2 className={activeIndex === index ? 'active' : ''}>{item.question}</h2>
          <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
        </div>
        <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
          <p>{item.answer}</p>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
    </div>
    </div>
  )
}
