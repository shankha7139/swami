import React, { useState } from "react";
import styled from "styled-components";
import a200 from "../assets/course/200a.png";
import b200 from "../assets/course/200b.png";

export default function Selector() {
  const [opt, setOpt] = useState("one");
  return (
    <Container>
      <div className="buttons">
        <button
          className="active"
          onClick={() => {
            setOpt("one");
          }}
        >
          200 Hrs
        </button>
        <button
          onClick={() => {
            setOpt("two");
          }}
        >
          300 Hrs
        </button>
        <button
          onClick={() => {
            setOpt("three");
          }}
        >
          500 Hrs
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
  if (props.option === "one") {
    return (
      <div className="disp">
        <div className="left">
          <h1>200 Hours TTC Curriculum of Vedic Wellness Center Rishikesh</h1>
          <h2>200 Yoga Teacher Training Programme</h2>
          <p>
            Vedic Wellness Center has carefully chosen the modules of yoga
            teacher training program based on traditional teachings of hatha
            yoga with blend of contemporary teachings of world renowned yoga
            traditions in line with 200 hours standards of Yoga Alliance USA.
          </p>
          <h2>Techniques,Training and Practice</h2>
          <p>
            The daily practical training of teacher training program involves
            the study and practice of the following yogic techniques or
            practices with their brief theoretical knowledge about the
            importance of the name, the technique, salient points, precautions
            to be taken and advantages of each of the following yogic practices
            including the techniques of alignment and assistance.
          </p>
          <div className="pics">
            <img src={a200} alt="" />
            <img src={b200} alt="" />
          </div>
          <h2>Teaching Methodology</h2>
          <p>
            In this module, students will learn and experience the teaching
            skills of presentation & practice of teaching in yoga. Communication
            skills in yoga teaching practice such as group dynamics, time
            management, and the establishment of priorities and
            boundaries.Teachings skills to address the specific needs of
            individuals and special populations in group set up to the possible
            extent.
          </p>
          <h2>Anatomy and Physiology</h2>
          <p>
            Students will learn about the structure, parts/process and functions
            of muscular and skeletal system respiratory & cardio-vascular system
            as well as digestive and excretory system.Health and
            Yoga:Definition, meaning, concept of health in yoga, importance and
            role of yoga and yogic diet and nutrition in maintaining holistic
            health.Students will also learn role of yoga in maintaining holistic
            health through the understanding curative preventive and promotive
            aspects of yoga as natural health care measures through the applied
            anatomy and physiology with applied yoga.
          </p>
          <h2>Practicum</h2>
          <p>
            Includes practice teaching, receiving feedback, observing others
            teaching and hearing and giving feedback. Also includes assisting
            students while someone else is teaching. Presentations and group
            discussions.
          </p>
        </div>
      </div>
    );
  }
  if (props.option === "two") {
    return (
      <div className="disp">
        <div className="left">
          <h1>300 Hours</h1>
          <p>300</p>
        </div>
      </div>
    );
  }
  if (props.option === "three") {
    return (
      <div className="disp">
        <div className="left">
          <h1>500 Hrs</h1>
          <p>500</p>
        </div>
      </div>
    );
  }
}

const Container = styled.div`
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
    margin-top: 3%;
    /* gap: 200px; */
    .left {
      width: 100%;
      padding-left: 10px;
      h1 {
        font-size: 58px;
        margin: 0;
        font-weight: 500;
        letter-spacing: 4px;
      }
      h2 {
        padding: 1.5% 0%;
        font-size: 36px;
        font-weight: 400;
        background: linear-gradient(to right, #3bc797, #8bdab8);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
      p {
        font-size: 23px;
      }
      .pics {
        display: flex;
        justify-content: space-between;
        margin: 1% 0%;
        img {
          border-radius: 1%;
        }
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    gap: 4px;
    margin-top: 10%;
    button {
      display: flex;
      flex-direction: column;
      min-height: 7rem;
      min-width: 200px;
      color: black;
      font-family: Helvetica;
      background-color: #f4f4f4;
      border-radius: 10px;
      transition: 0.3ms ease-in-out;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      border: none;
      padding: 0% 8%;
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

  @media screen and (max-width: 1400px) {
    padding: 40px;
    .buttons {
      overflow-y: auto;
    }
    .right {
      img {
        display: none;
      }
    }
    .disp {
      padding: 0;
      margin: 0;
      width: 100%;
      .left {
        padding: 0;
        margin: 0;
        width: 100%;
        h1 {
          font-size: 46px;
        }
        h2 {
          font-size: 32px;
        }
        p {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding: 40px;
    .buttons {
      overflow-y: auto;
    }
    .right {
      img {
        display: none;
      }
    }
    .disp {
      padding: 0;
      margin: 0;
      .left {
        padding: 0;
        margin: 0;
        h1 {
          font-size: 42px;
          color: red;
        }
        h2 {
          font-size: 28px;
        }
        p {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding: 40px;
    .buttons {
      overflow-y: auto;
    }
    .disp {
      flex-direction: column;
    }
    .right {
      img {
        display: none;
      }
    }
    .disp {
      padding: 0;
      margin: 0;
      .left {
        padding: 0;
        margin: 0;
        width: 100%;
        h1 {
          font-size: 36px;
        }
        h2 {
          font-size: 22px;
        }
        p {
          width: 100%;
        }
      }
    }
  }
`;
//
