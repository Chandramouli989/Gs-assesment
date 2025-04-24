import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f6fa;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 600px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: #000;
  margin-bottom: 1rem;
  text-align:left;
  margin-left:1.5rem;
`;

const Separator = styled.hr`
  width: 60%;
  margin: 1rem auto;
  border: none;
  border-top: 3px solid #222;
`;

const RingWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 2rem auto;
`;

const RotatingRing = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(#6a11cb,rgb(109, 109, 184), #6a11cb);
  animation: spin 4s linear infinite;
  box-shadow: 0 0 25px rgba(106, 17, 203, 0.3);

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const InnerCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.3rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  background: white;
  border-radius: 12px;
  padding: 12px 20px;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.15);
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 10px #aaa;
  }
`;

const ConnectButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const CircleIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #222;
  color: white;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Disclaimer = styled.p`
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #666;
`;

const Onboardingcomponents = () => {
  return (
    <Container>
      <Card>
        <Heading>Ah!!, I never saw someone from your Company.</Heading>
        <Separator />

        <RingWrapper>
          <RotatingRing />
          <InnerCircle>Welcome!!</InnerCircle>
        </RingWrapper>

        <ButtonWrapper>
          <Button>Browse Test Data</Button>
          <ConnectButton>
            <CircleIcon>+</CircleIcon>
            Connect Domain
          </ConnectButton>
        </ButtonWrapper>

        <Disclaimer>
          **Tenant Connections are not allowed in free tier, however you can
          still explore the website features.
        </Disclaimer>
      </Card>
    </Container>
  );
};

export default Onboardingcomponents;
