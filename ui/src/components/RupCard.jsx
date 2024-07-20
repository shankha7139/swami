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
  padding: 5% 0;
  background: linear-gradient(135deg, #f6f9fc, #edf1f7);

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding: 0 5%;
  }

  .card {
    width: 300px;
    background-color: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    }
  }

  .card__image-container {
    height: 200px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  .card:hover .card__image-container img {
    transform: scale(1.1);
  }

  .card__content {
    padding: 20px;
  }

  .card__info {
    .text--medium {
      font-family: "Poppins", sans-serif;
      font-size: 18px;
      line-height: 1.4;
      color: #333;
      font-weight: 500;
      margin: 0;
    }
  }

  .card__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    display: flex;
    align-items: flex-end;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .card:hover .card__overlay {
    opacity: 1;
  }

  .card__category {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: #02a66e;
    padding: 5px 10px;
    border-radius: 20px;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  @media only screen and (max-width: 1200px) {
    .card {
      width: calc(33.333% - 20px);
    }
  }

  @media only screen and (max-width: 900px) {
    .card {
      width: calc(50% - 15px);
    }
  }

  @media only screen and (max-width: 600px) {
    .card {
      width: 100%;
    }
  }
`;
