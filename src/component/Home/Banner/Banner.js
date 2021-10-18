import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Button, Carousel } from 'react-bootstrap';
import slider1 from '../../../images/slide1-4.jpg'
import slider2 from '../../../images/slide1-5.jpg'
import slider3 from '../../../images/slide1-6.jpg'
import './Banner.css'

const Banner = () => {
    return (

        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />

                    <Carousel.Caption className="caption">
                        <h3>We Take Care Of Your Healthy Health</h3>
                        <p>Stay aware of your emotions and moodsEat a healthy, balanced diet with lots of vegetables and fruit.</p>
                        <Button variant="primary">Read More <FaArrowRight /></Button>
                    </Carousel.Caption>


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="caption">
                        <h3>We Take Care Of Your Healthy Health</h3>
                        <p>Stay aware of your emotions and moodsEat a healthy, balanced diet with lots of vegetables and fruit.</p>
                        <Button variant="primary">Read More <FaArrowRight /></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="caption">
                        <h3>We Take Care Of Your Healthy Health</h3>
                        <p>Stay aware of your emotions and moodsEat a healthy, balanced diet with lots of vegetables and fruit.</p>
                        <Button variant="primary">Read More <FaArrowRight /></Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>

    );
};

export default Banner;


const fakedata = [
    {
        id: 1,
        name: "Dental Care",
        image: "https://image.similarpng.com/very-thumbnail/2021/06/Tooth-Icon,-dental-care-icon-premium-vector-PNG.png",
        description: "Dental care is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders. Dentistry, the professional care of teeth, including professional oral hygiene and dental surgery.Oral Surgery, any of a number of medical procedures that involve artificially modifying dentition; in other words, surgery of the teeth and jaw bones."
    },
    {
        id: 2,
        name: "Cardeology",
        image: "https://i.ibb.co/PjXqWVh/pngaaa-com-6057851.png",
        description: "Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist.Cardiology is a branch of medicine that deals with the disorders of the heart as well as some parts of the circulatory system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology. Physicians who specialize in this field of medicine are called cardiologists, a specialty of internal medicine. Pediatric cardiologists are pediatricians who specialize in cardiology. Physicians who specialize in cardiac surgery are called cardiothoracic surgeons or cardiac surgeons, a specialty of general surgery."
    },
    {
        id: 3,
        name: "Orthopaedics",
        image: "https://image.freepik.com/free-vector/sport-medicine-abstract-concept-illustration-orthopaedic-medical-services-physician-specialist-sport-injury-rehabilitation-pain-management-medicine-athletes_335657-541.jpg",
        description: "The Department of Orthopaedics offers out-patient consultation services and procedures. It is well supported by fully equipped operation theatre (OT), intensive care units for pre- and post- operative care, as well as rehabilitation services in Physical Medicine & Rehabilitation Centre. The state-of-the-art OT is equipped with the latest fracture tables and imaging facilities including a C-arm image intensifier. The hospital is also equipped with CT scan (64 slice), MRI Scan (1.5 tesla), and X-ray for prompt screening facilities. The theatre is scrupulously maintained such that the infection rate is always near zero."
    },
    {
        id: 4,
        name: "Blood Bank",
        image: "https://i.ibb.co/C8trJ9P/Png-Item-3036306.png",
        description: "Blood Bank is a place for testing, screening, collecting, processing and storing of whole blood, packed red blood cells, fresh frozen plasma and platelet concentrate gathered as a result of blood donation by family members, friends and volunteer donors, preserved for patients use in this hospital and also other hospitals on request. We are committed to ensure 24hrs service of providing most secure blood transfusion policy and maintain quality in every aspects. BSHL blood bank provides safest possible blood for the patients which follows the American Association of Blood Bank (AABB) guideline, USFDA guideline is used for donor infectious diseases screening (HBs Ag, HIV-1 &II, Anti – HCV, VDRL, Malaria). The blood bank is located at Level-11 at extension building and is a government approved blood bank."
    },
    {
        id: 5,
        name: " Plastic & Aesthetic Surgery",
        image: "https://i.ibb.co/FK16vSs/favpng-eye-plastic-surgery-face-illustration-nose.png",
        description: "Department of Plastic, Reconstructive & Cosmetic Surgery of Bangladesh Specialized Hospital provides exceptional and extensive services to its patients in several aspects of Plastic Surgery. Our post graduate qualified plastic surgeons utilize the latest techniques and provide a wide variety of aesthetic and reconstructive procedures for both men and women with safe, successful outcomes Aesthetic surgeries done include liposuction(Fat Reduction), rhinoplasty(beautification of nose), mammoplasty(beautification of breasts), hair transplant(for baldness) and many others.Non operative anti- aging procedures include laser, Botox, fillers and microneedliug.Reconstructive procedures such as cleft lip and palate repair, burn contracture release, cancer excision and bed sore reconstruction is also done."
    },
    {
        id: 6,
        name: "  Gastroenterology & Hepatology",
        image: "https://i.ibb.co/BVp88M0/suyog-gastro-liver-933899.png",
        description: "Department of Gastroenterology & Hepatology is devoted to the clinical care of patients with gastrointestinal and liver disorders. The department is home to excellent patient care, and our specialists employ the most advanced diagnostic and therapeutic endoscopy services to ensure the best outcomes for each patient.Working closely with a dedicated staff that includes doctors, technologists, nurses, dietitians and more, our care is unsurpassed with the kind of quality and compassion you can expect from a leader in healthcare."
    },

]


