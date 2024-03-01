import React from "react";
import styled from "styled-components";
import card from "../assets/award/card1.png";
import card2 from "../assets/award/card2.png";
import card3 from "../assets/award/card3.png";
import card4 from "../assets/award/card4.png";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

export default function () {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="heading">
        <h1>Awards & Recognitions</h1>
      </div>
      <section class="cards">
        <div class="card">
          <div class="card__image-container">
            <img src={card} />
          </div>
          <div class="card__content">
            <div class="card__info">
              <p class="card__title text--medium">
                Honored by “SCHOOL OF AYUSH STUDIES AND RESEARCH CONFEDERATION
                OF INDIAN UNIVERSITIES” in field of naturopathy and indigenous
                therapies
              </p>
              <p class="text--medium">29 March, 2018.</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card__image-container">
            <img src={card2} />
          </div>
          <div class="card__content">
            <div class="card__info">
              <p class="card__title text--medium">
                Yoga Prashikshan Samman by Swami Sahjanand Sarshwati Kishan
                Suchna Kendra, New Delhi
              </p>
              <p class="text--medium">2012</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card__image-container">
            <img src={card3} />
          </div>
          <div class="card__content">
            <div class="card__info">
              <p class="card__title text--medium">
                Appreciation for the work done to reduce stress and negativity
                through yoga in Tihar jail by Tihar DG Shri Alok Kumar Verma
              </p>
              <p class="text--medium">29 March, 2018.</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card__image-container">
            <img src={card4} />
          </div>
          <div class="card__content">
            <div class="card__info">
              <p class="card__title text--medium">
                Honored by HEART CARE FOUNDATION OF INDIA in contribution of
                lots of Yoga, spiritual and holistic therapies activities
              </p>
              <p class="text--medium">2002</p>
            </div>
          </div>
        </div>
      </section>
      <a href="" onClick={() => navigate("/allawards")}>
        <div className="left">
          See all Awards
          <FaAngleRight />
        </div>
      </a>
    </Container>
  );
}

const Container = styled.div`
  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5%;
    padding: 3% 0% 2% 0%;
    /* background: #ebf4f1; */
    h1 {
      font-size: 45px;
      font-weight: 400;
      color: #02a66e;
    }
  }
  main {
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 60px)) 1fr;
    grid-gap: 40px;
    padding: 60px 0;
  }

  .text--medium {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: #ecf0f1;
  }

  .cards {
    grid-column: 1 / span 19;
    display: grid;
    grid-template-columns: repeat(19, minmax(auto, 60px));
    grid-gap: 25px;
    margin-left: 13%;
    margin-top: 1.5%;
  }

  .card {
    grid-column-end: span 4;
    display: flex;
    flex-direction: column;
    background-color: #39393b;
    transition: all 0.3s ease 0s;
    border-radius: 10px;
    overflow: hidden;
  }

  .card__image-container {
    width: 100%;
    padding-top: 76.25%;
    overflow: hidden;
    position: relative;
  }

  .card__image-container {
    img {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .card__content {
    padding: 20px;
  }

  .card__title {
    margin-bottom: 20px;
  }

  .card__info {
    display: flex;
    align-self: end;
    align-items: start;
    flex-direction: column;
  }

  .card__price {
    margin-left: auto;
    padding: 5px 20px;
    background-color: #303032;
    border-radius: 20px;
  }
  a {
    text-decoration: none;
    color: #007d52;
    font-size: 32px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3% 0%;
    /* margin: 3% 0%; */
    .left {
      font-family: Helvetica;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    &:hover {
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 1000px) {
    .card {
      grid-column-end: span 12;
    }
    .cards {
      margin: 0% 10%;
    }
    .heading {
      h1 {
        font-size: 38px;
      }
    }
  }

  @media only screen and (max-width: 700px) {
    main {
      grid-gap: 20px;
    }
    .card {
      grid-column-end: span 12;
    }
    .cards {
      margin: 0% 6%;
    }
    .heading {
      h1 {
        font-size: 32px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    main {
      grid-template-columns: 10px repeat(6, 1fr) 10px;
      grid-gap: 10px;
    }
    .cards {
      grid-column: 2 / span 12;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 12px;
      margin: 0% 3%;
    }
    .card {
      grid-column-end: span 6;
    }
    .heading {
      h1 {
        font-size: 28px;
      }
    }
  }
  @media only screen and (max-width: 381px) {
    .heading {
      h1 {
        font-size: 22px;
      }
    }
  }
`;
