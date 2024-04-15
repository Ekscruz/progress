import React from'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion (){
    return (
        <div className='faq-section'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Most Asked Question</h2>
                <p className='text-center mb-5'></p>
                <Accordion defaultActiveKey="" flush>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>What is the passing grade in UDM?</Accordion.Header>
                        <Accordion.Body>The passing grade at the Universidad de Manila, like in many educational institutions, can vary depending on the specific course or subject. Generally, a passing grade is typically around 75 or 2.5 or higher.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>What is the tagline of UDM?</Accordion.Header>
                        <Accordion.Body>“Uplifting lives through quality education.”</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>Does Universidad De Manila accept non Manila residents?</Accordion.Header>
                        <Accordion.Body>Universidad de Manila is a public university in Ermita, Manila, that offers excellent quality education from undergraduate to graduate studies, primarily for the City of Manila residents.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='3'>
                        <Accordion.Header>What is the meaning of UDM logo?</Accordion.Header>
                        <Accordion.Body>The logo symbolizes the unity of the eleven colleges which comprise the University as differentiated by each color which shaped the the 25 years of Universidad De Manila's existence when it was created in 1995 as the City College of Manila.</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}
export default FaqAccordion;