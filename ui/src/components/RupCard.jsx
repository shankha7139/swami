import React from "react";
import styled from "styled-components";
import card from "../assets/rupantarn/card1.png";
import card2 from "../assets/rupantarn/card2.png";
import card3 from "../assets/rupantarn/card3.png";
import card4 from "../assets/projects/card4.jpg";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  return (
    <Container>
      <section class="cards">
        <div class="card">
          <div class="card__image-container">
            <img src={card} />
          </div>
          <div class="card__content">
            <div class="card__info">
              <p class="text--medium">
                Permission for welfasre Activities at Central Jail No.14 Mandoli
                2018
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card__image-container">
            <img src={card2} />
          </div>
          <div class="card__content">
            <div class="card__info">
              <p class="text--medium">
                18 convicts lodged in Tihar back from yoga session in Haridwar
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card__image-container">
            <img src={card3} />
          </div>
          <div class="card__content">
            <div class="card__info">
              <p class="text--medium">From Prison Inmates to Yoga Warriors</p>
            </div>
          </div>
        </div>
        <div class="card" onClick={() => navigate("/allprogs")}>
          <div class="card__image-container">
            <img src={card4} />
          </div>
          <div class="card__content">
            <div class="card__info">
              <p class="text--medium">All Projects and Programs... </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
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
    padding-top: 56.25%;
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
    align-items: center;
  }

  .card__price {
    margin-left: auto;
    padding: 5px 20px;
    background-color: #303032;
    border-radius: 20px;
  }

  @media only screen and (max-width: 1000px) {
    .card {
      grid-column-end: span 12;
    }
    .cards {
      margin: 0% 10%;
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
  }
`;
