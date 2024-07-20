import React, { useState } from "react";
import styled from "styled-components";
import ind from "../assets/india.png";
import world from "../assets/world.png";
import one from "../assets/indi-icon.png";
import two from "../assets/continents.png";

export default function Selector() {
  const [opt, setOpt] = useState("one");
  const [selected, setSelected] = useState(false);
  return (
    <Container>
      <div className="wrap">
        <span>
          We Present all over<span className="decor"> India</span> and
          <span className="decor"> World</span>....
        </span>
        <p>
          We are proud to present our offerings to the world, spreading wellness
          and wisdom across borders and cultures.
        </p>
        <a href="">Know More</a>
      </div>
      <div className="buttons">
        <button
          className="active"
          onClick={() => {
            setOpt("ind");
          }}
        >
          <img src={one} alt="" />
          India
        </button>
        <button
          onClick={() => {
            setOpt("world");
          }}
        >
          <img src={two} alt="" />
          World
        </button>
      </div>
      <div className="display">
        <FetchDisp option={opt} />
      </div>
      <script></script>
    </Container>
  );
}

function FetchDisp(props) {
  if (props.option === "ind") {
    return (
      <div className="disp">
        <img src={ind} alt="" />
      </div>
    );
  }
  if (props.option === "world") {
    return (
      <div className="disp">
        <img src={world} alt="" />
      </div>
    );
  }
}

const Container = styled.div`
  span {
    margin: 0;
    font-size: 90px;
    font-weight: 500;
    padding: 3% 0% 3% 0%;
  }
  .decor {
    font-size: 90px;
    color: #3bc797;
    font-weight: 500;
  }
  .wrap {
    margin-left: 8vw;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
    margin-top: 5%;
    p {
      font-size: 20px;
      padding: 3% 0% 3% 0%;
    }
    a {
      padding-left: 440px;
      font-size: 24px;
      text-decoration: none;
      font-weight: 500;
      color: #007d52;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .selected {
    background-color: red;
  }
  .display {
    padding: 20px 2px 20px 2px;
  }
  padding: 20px 150px 20px 150px;
  .disp {
    display: flex;
    flex: 50%;
    justify-content: center;
    align-items: center;
    /* gap: 200px; */
    img {
      width: 850px;
      height: 850px;
      object-fit: contain;
    }
  }
  .buttons {
    display: flex;
    padding-left: 27vw;
    gap: 12px;
    button {
      display: flex;
      flex-direction: column;
      min-height: 7rem;
      min-width: 200px;
      color: black;
      img {
        width: 60px;
        height: 60px;
      }
      background-color: #f4f4f4;
      border-radius: 10px;
      transition: all 0.4s ease-in-out;
    }
    button:active {
      background-color: #3bc797;
      color: #fff;
      img {
        width: 60px;
        height: 60px;
      }
    }
    button:focus {
      background-color: #3bc797;
      color: #fff;
      img {
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 1351px) {
    margin: 0;
    padding: 0;
    span {
      margin: 0;
      padding: 0;
      font-size: 65px;
      .decor {
        font-size: 65px;
      }
    }
    .wrap {
      a {
        padding: 10px 0;
        font-size: 30px;
      }
    }
    .buttons {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        min-height: 4rem;
        min-width: 150px;
        color: black;
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
    .disp {
      img {
        width: 600px;
        height: 600px;
        object-fit: contain;
      }
    }
  }

  @media screen and (max-width: 600px) {
    margin: 0;
    padding: 0;
    span {
      margin: 0;
      padding: 0;
      font-size: 55px;
      .decor {
        font-size: 55px;
      }
    }
    .wrap {
      a {
        padding: 10px 0;
        font-size: 22px;
      }
    }
    .buttons {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        min-height: 3rem;
        min-width: 120px;
        color: black;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
    .disp {
      img {
        width: 95%;
      }
    }
  }

  @media screen and (max-width: 376px) {
    margin: 0;
    padding: 0;
    span {
      margin: 0;
      padding: 0;
      font-size: 40px;
      .decor {
        font-size: 40px;
      }
    }
    .wrap {
      a {
        padding: 10px 0;
        font-size: 20px;
      }
    }
    .buttons {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        min-height: 2.5rem;
        min-width: 90px;
        color: black;
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
    .disp {
      img {
        width: 95%;
      }
    }
  }
`;
