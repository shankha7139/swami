import React from "react";
import styled from "styled-components";
import card from "../assets/membership/card1.png";
import card2 from "../assets/membership/card2.png";
import card3 from "../assets/membership/card3.png";
import card4 from "../assets/membership/card4.png";
import card5 from "../assets/membership/card5.png";
import card6 from "../assets/membership/card6.png";

export default function () {
  return (
    <Container>
      <div className="heading">
        <h1>Associations and membership</h1>
      </div>
      <section class="cards">
        <div class="card">
          <div class="card__image-container">
            <img src={card} />
          </div>
          <div class="card__content">
            <p class="card__title text--medium">Founder And Secretry</p>
            <div class="card__info">
              <p class="text--medium">
                Panchwati YogaShram and Nature cure Center
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card__image-container">
            <img src={card2} />
          </div>
          <div class="card__content">
            <p class="card__title text--medium">Yoga Consultant</p>
            <div class="card__info">
              <p class="text--medium">
                Bennett, Coleman & Co Ltd, The Times of India Group, Delhi;
                2008-09
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card__image-container">
            <img src={card3} />
          </div>
          <div class="card__content">
            <p class="card__title text--medium">General Secretary</p>
            <div class="card__info">
              <p class="text--medium">
                Akhil Bhartiya Sanatan Dharma Mahasabha, Delhi State
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card__image-container">
            <img src={card4} />
          </div>
          <div class="card__content">
            <p class="card__title text--medium">Impaneled Yoga Teacher</p>
            <div class="card__info">
              <p class="text--medium">Sita World Travel (Cyoni Travels).</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card__image-container">
            <img src={card5} />
          </div>
          <div class="card__content">
            <p class="card__title text--medium">
              Yoga Consultant of various foreign embassies
            </p>
            <div class="card__info">
              <p class="text--medium">
                Italian, Egypt, Czechoslovakia, Argentina, Pakistan, France,
                Germany, USA, Canada.
              </p>
            </div>
          </div>
        </div>
      </section>
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
    grid-column: 1 / span 24;
    display: grid;
    grid-template-columns: repeat(24, minmax(auto, 40px));
    grid-gap: 25px;
    margin-left: 12%;
    margin-top: 1.5%;
  }

  .card {
    grid-column-end: span 4;
    display: flex;
    flex-direction: column;
    background-color: #39393b;
    transition: all 0.3s ease 0s;
    border-radius: 10px;
  }

  .card__image-container {
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;
    position: relative;
  }

  .card__image-container img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
