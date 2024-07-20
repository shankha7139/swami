import React from "react";
import styled from "styled-components";
import card from "../assets/projects/card1.png";
import card2 from "../assets/projects/card2.png";
import card3 from "../assets/projects/card3.png";
import card4 from "../assets/projects/card4.jpg";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

export default function () {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="heading">
        <h1>Projects and Programs</h1>
      </div>
      <section class="cards">
        <div class="card">
          <div class="card__image-container">
            <img src={card} />
          </div>
          <div class="card__content">
            <div class="card__info">
              <p class="text--medium">
                International Day of Yoga 2018 Inaugural in Tihar jail No.5
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
                Celebrate World Health Day in Tihar jail no.5 2018
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
              <p class="text--medium">
                Permission for welfasre Activities at Central Jail No.14 Mandoli
                2018
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card__image-container">
            <img src={card4} />
          </div>
          <div class="card__content">
            <div class="card__info">
              <p class="text--medium">
                {" "}
                World Health Day celebration for the inmates of Mandoli Jail{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <a href="" onClick={() => navigate("/allprogs")}>
        <div className="left">
          See all Projects
          <FaAngleRight />
        </div>
      </a>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 40px 0;

  .heading {
    text-align: center;
    margin-bottom: 40px;

    h1 {
      font-size: 42px;
      font-weight: 600;
      color: #02a66e;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    padding: 0 5%;
  }

  .card {
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    }
  }

  .card__image-container {
    width: 100%;
    padding-top: 66.67%; // 3:2 aspect ratio
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .card:hover .card__image-container img {
    transform: scale(1.05);
  }

  .card__content {
    padding: 20px;
  }

  .card__title {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
  }

  .text--medium {
    font-size: 14px;
    line-height: 1.4;
    color: #666;
  }

  a {
    display: block;
    text-align: center;
    margin-top: 40px;
    color: #02a66e;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #018756;
    }

    .left {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  }

  @media (max-width: 768px) {
    .heading h1 {
      font-size: 36px;
    }

    .cards {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }

  @media (max-width: 480px) {
    .heading h1 {
      font-size: 28px;
    }

    .cards {
      grid-template-columns: 1fr;
    }
  }
`;
