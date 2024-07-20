import React, { useState } from "react";
import styled from "styled-components";

export default function Modal() {
  const [view, setView] = useState(false);
  const toggleModal = () => {
    setView(!view);
  };
  return (
    <Container>
      <button onClick={toggleModal}>Contact Us</button>
      {view && (
        <ModalOverlay>
          <ModalContent>
            <h2>Contact Us</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <FormField>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g., John Doe"
                />
              </FormField>
              <FormField>
                <label htmlFor="phone">Contact Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="e.g., +1 (555) 123-4567"
                />
              </FormField>
              <FormField>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g., john.doe@example.com"
                />
              </FormField>
              <FormField>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="e.g., United States"
                />
              </FormField>
              <ButtonGroup>
                <SubmitButton type="submit">Submit</SubmitButton>
                <CancelButton onClick={toggleModal}>Cancel</CancelButton>
              </ButtonGroup>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

const Container = styled.div`
  button {
    background-color: #02a66e;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #028656;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    color: #333;
    text-align: center;
  }
`;

const FormField = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: #02a66e;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`;

const SubmitButton = styled(Button)`
  background-color: #02a66e;
  color: #fff;

  &:hover {
    background-color: #028656;
  }
`;

const CancelButton = styled(Button)`
  background-color: #f1f1f1;
  color: #333;

  &:hover {
    background-color: #e1e1e1;
  }
`;