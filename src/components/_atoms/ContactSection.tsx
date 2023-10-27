import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 10px;
  color: #fff;
  background: #333;
`;

const ContactTitle = styled.h3`
  margin-top: 0;
`;

const ContactInfo = styled.p`
  margin: 5px 0;
`;

const ContactSection: React.FC = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactInfo>Email: contact@example.com</ContactInfo>
      <ContactInfo>Phone: (123) 456-7890</ContactInfo>
      <ContactInfo>Address: 123 Example Street, City, Country</ContactInfo>
    </ContactContainer>
  );
};

export default ContactSection;
