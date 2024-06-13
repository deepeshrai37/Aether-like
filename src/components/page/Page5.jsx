import { useState } from "react";

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

export const Page5 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="page5">
      <div className="container">
      <h1>Lorem, ipsum dolor.</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam esse voluptates, odio molestiae voluptate nam debitis aliquam nemo dicta commodi.</p>
      <h2>Lorem, ipsum dolor.</h2>
      </div>
      <div className="card-container">
      <div className="card" style={{width: "30rem",height:"30rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card"  style={{width: "30rem",height:"30rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card"  style={{width: "30rem",height:"30rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>

      <div className="map-container">
        <div className="left">
          <h1>Map Section</h1>
        </div>
        <div className="right"></div>
      </div>
      <div className="stats-container">
        <div className="left">
          <h1>StatsSection</h1>
        </div>
        <div className="right"></div>
      </div>
      <div className="video-container">
        <h1>Video Gallery</h1>
        <div className="videocards">
        <div className="card" style={{width: "30rem", height:"30rem"}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
<div className="card" style={{width: "30rem", height:"30rem"}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
<div className="card" style={{width: "30rem", height:"30rem"}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eum soluta iste ipsum ad provident vel consectetur minima labore corporis, voluptates totam officiis amet error distinctio aliquid! Quam veritatis iusto ad aut beatae odio officiis sapiente magnam iure iste labore aspernatur, est porro provident error nesciunt consequatur. Aspernatur, dolor est eius dicta quaerat iste quis libero omnis nulla quia perferendis provident, porro ipsa impedit vero voluptatibus. Accusantium aspernatur sint odio incidunt saepe voluptatum id! Id iste, ad, alias quidem corporis nam adipisci voluptate deleniti, ipsum dicta veniam odio ipsa porro deserunt velit magnam illo fugiat consectetur? Facilis aliquam numquam quam.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
        </div>
      </div>
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
      
    </div>
  )
}
