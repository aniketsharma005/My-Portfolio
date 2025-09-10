import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Col from 'react-bootstrap/Col';

const Services = () => {
    return (
      <div id='Services' className='services'>
          <div className='services-title col'>
              <h1>My Services</h1>
              <img src={theme_pattern} alt=''/>
          </div>
          <div className="service-container">
          {Services_Data.map((service, index) => (
            
            <div key={index} className="services-format ">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="Arrow Icon" />
              </div>
            </div>
          )
          )
          }
        </div>
        </div>
    )
  }
  




// const Services = ({ Services_Data, theme_pattern, arrow_icon }) => {
//   return (
//     <Container id="Services" className="services py-5">
//       {/* Services Title Section */}
//       <Row className="services-title text-center mb-4">
//         <Col>
//           <h1>My Services</h1>
//           <img src={theme_pattern} alt="Theme Pattern" className="img-fluid" />
//         </Col>
//       </Row>

//       {/* Services List Section */}
//       <Row className="service-container">
//         {Services_Data.map((service, index) => (
//           <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
//             <Card className="services-format text-center h-100 shadow-sm">
//               <Card.Body>
//                 <Card.Title as="h3">{service.s_no}</Card.Title>
//                 <Card.Subtitle as="h2" className="mb-3">
//                   {service.s_name}
//                 </Card.Subtitle>
//                 <Card.Text>{service.s_desc}</Card.Text>
//                 <Button variant="link" className="services-readmore d-flex align-items-center justify-content-center">
//                   <span>Read More</span>
//                   <img src={arrow_icon} alt="Arrow Icon" className="ms-2" />
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

 export default Services