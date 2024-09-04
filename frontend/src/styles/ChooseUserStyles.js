import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChooseUserContainer = styled.div`
  margin: 0;
  background: url(https://static.vecteezy.com/system/resources/previews/006/941/002/non_2x/small-hexagon-shape-with-light-white-and-grey-color-seamless-pattern-background-free-vector.jpg)
    no-repeat;

  z-index: 1;
  background-size: cover;

  display: flex;
  max-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: beige;
  padding-top: 10%;
  max-height: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

export const UserSection = styled.div`
  text-align: center;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3), -0px -0px 5px white;
  background-color: #F5F7F8;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #227B94; /* Admin: Orange color */

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Button = styled(Link)`
  background-color: #78B7D0; /* Student: Light green color */
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #227B94; /* Darker shade of green on hover */
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;
