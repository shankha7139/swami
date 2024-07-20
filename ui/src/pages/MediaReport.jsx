import React, { useState } from "react";
import styled from "styled-components";
import NewNavbar from "../components/NewNavbar";
import { Footer } from "../components/Footer";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: auto;
  font-family: "Roboto", sans-serif;
  color: #333;
  background-color: #f9f9f9;
  padding-top: 7%;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: #1a5f7a;
  font-size: 2.8em;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const ToggleButton = styled.button`
  background-color: ${(props) => (props.active ? "#1a5f7a" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#1a5f7a")};
  border: 2px solid #1a5f7a;
  padding: 10px 20px;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:first-child {
    border-radius: 5px 0 0 5px;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
  }

  &:hover {
    background-color: #1a5f7a;
    color: #fff;
  }
`;

const Section = styled.section`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  color: #1a5f7a;
  font-size: 2em;
  margin-bottom: 20px;
  border-bottom: 2px solid #457b9d;
  padding-bottom: 10px;
`;

const Content = styled.div`
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ProgramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ProgramCard = styled.div`
  background-color: #f1faee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProgramImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProgramContent = styled.div`
  padding: 20px;
`;

const ProgramTitle = styled.h3`
  color: #1d3557;
  font-size: 1.4em;
  margin-bottom: 10px;
`;

const ProgramDescription = styled.p`
  font-size: 1em;
  line-height: 1.5;
`;

const MediaReportPage = () => {
  const [activeSection, setActiveSection] = useState("vision");

  return (
    <>
      <NewNavbar />
      <PageContainer>
        <Header>
          <Title>Annual Report</Title>
        </Header>

        <ToggleContainer>
          <ToggleButton
            active={activeSection === "vision"}
            onClick={() => setActiveSection("vision")}
          >
            2022-2023
          </ToggleButton>
          <ToggleButton
            active={activeSection === "programs"}
            onClick={() => setActiveSection("programs")}
          >
            Vision
          </ToggleButton>
        </ToggleContainer>

        {activeSection === "vision" && (
          <Section>
            <SectionTitle>Annual Report 2022-2023</SectionTitle>
            <Content>
              <h3>Our Vision and Mission</h3>
              <p>
                Our vision is to create a center of holistic healing rooted in
                the rich heritage of Indian naturopathy. We aim to be the
                powerhouse of wellness, where ancient wisdom meets modern
                science, fostering a balanced, healthy lifestyle.
              </p>
              <p>
                Our goal is not just to treat ailments but to empower
                individuals to embrace proactive wellness practices. Through
                education and guidance, we seek to inspire lifestyle changes
                that promote longevity, vitality, and overall well-being.
              </p>
              <p>
                We aspire to create a serene environment, surrounded by nature,
                allowing our guests to disconnect from the stresses of daily
                life and reconnect with themselves. Our team of holistic healers
                will provide compassionate care, fostering a sense of community
                and support.
              </p>
              <p>
                Ultimately, we envision being a destination where individuals
                embark on a transformative journey towards holistic health,
                embracing the innate healing potential of their mind, body, and
                spirit.
              </p>
              <p>
                Our various programs, workshops, and treatments focused on
                restoring balance and vitality using natural therapies deeply
                rooted in ancient Indian traditions.
              </p>

              <h3>
                Programs and events conducted from 1st April 2022-31st March
                2023
              </h3>

              <h4>Jyoti parv at Tihar Jail:</h4>
              <p>
                Jyoti parv was organized at Tihar jail in Delhi on 18th June
                2022 with Adi Shankaracharya Vedic Foundation , in which
                approximately 2500 inmates participated voluntarily , as we all
                know that about 99% of the prisoners including those on trial
                and those who have been sentenced have a strong emotion of
                seeking revenge and committing yet another crime to fulfil the
                pending desire ,it is because of this criminal psychology our
                organization aimed at educating the inmates of these
                psychological patterns and behaviors and making them take the
                path of dharma , the inmates which participated then pledged
                that they will work their way to get freed from this feeling of
                revenge , the event was attended by the DG of tihar jail.
              </p>

              <h4>Yoga Culture and Demonstration:</h4>
              <p>
                The ministry of Jal Shakti, government of India and Adi
                Shankaracharya Vedic Foundation organized yoga lecture and
                demonstration at national media center, central Delhi on 28th
                April 2022; it was the 54th day to the countdown to the 8th
                international day of yoga 2022. As an initiative of our
                honorable prime minister Shree Narendra Modi ji , turning it
                into a great success ,we had Miss Vini Mahajan , Secretary,
                Department of Drinking Water and Sanitation, River Development
                and Ganga Rejuvenation , Ministry of Jal Shakti Government of
                India ; Mr. RK Aggarwal, CMD - WAPCOS, NPCC , as towering
                leaders to Grace this splendid event through their presence.
              </p>

              <h4>Nimka Jail Faridabad:</h4>
              <p>
                Parivartan Yatra - Yoga yukt India, imbued with the vision of a
                crime-free India, the program of the 8th World Yoga Day under
                the joint work of Adi Shankaracharya Vedic Wellness Foundation
                and District Jail Faridabad, Haryana, in which Jail
                Superintendent Mr. Jai Kishan Chhillar and Founder of Adi
                Shankaracharya Vedic Wellness Foundation Yogi Ashutosh ji.
                Maharaj participated along with Shri Devendra Gandhiji as the
                chief guest. On the occasion of World Yoga Day, this program was
                organized in District Jail Faridabad in which all the prisoners
                of the jail.
              </p>

              <h4>Nimka jail yoga day for female inmates:</h4>
              <p>
                A yoga program specifically designed for female inmates was
                organized on World Yoga Day. The aim was to educate inmates
                about lifestyle diseases and how yoga can help them deal with
                common health issues.
              </p>

              <h4>
                International Day of Yoga program at Dhanuka Agritech Ltd:
              </h4>
              <p>
                Conducted a program at Dhanuka Agritech Ltd, Gurugram on
                International Day of Yoga 2022. The program focused on
                mindfulness and simple techniques to improve actions in work and
                personal situations.
              </p>

              <h4>International Religion conclave:</h4>
              <p>
                Participated as a speaker at the International Religion conclave
                on the Importance of spirituality culture in the Modern World,
                organized by the Confederation of World religions at Vigyan
                Bhawan, New Delhi in January 2023.
              </p>

              <h4>Marwah Studio:</h4>
              <p>
                Participated in a spiritual event organized by Marwah studio on
                January 6th 2023 in Noida. The panel discussed the need to
                connect today's young generation with spirituality.
              </p>

              <h4>Bhagwat Katha:</h4>
              <p>
                Conducted a Bhagwat Katha on July 14th 2022 at Mandolin jail
                Faridabad to promote spirituality among prisoners.
              </p>

              <h4>Yoga Camps:</h4>
              <p>
                Yoga in camps, offers numerous benefits. It promotes physical
                fitness, mental well-being, and stress relief, crucial in
                high-pressure environments. Additionally, it cultivates
                discipline, focus, and resilience, qualities valuable in various
                contexts, including rehabilitation programs. Moreover, yoga
                fosters a sense of camaraderie and unity among participants;
                overall, integrating yoga into camp activities can improve
                overall health and performance while fostering a positive
                environment, the yoga camps were organized by Adi Shankaracharya
                Vedic Foundation from 1st June till 3rd June 2022 at Delhi.
              </p>

              <h4>Lectures and teachings on yoga:</h4>
              <p>
                Conducted lectures on 5th July 2022 at Rishikesh, Uttarakhand,
                focusing on the benefits of yoga for physical, mental, and
                emotional well-being.
              </p>

              <h4>Corporate programs:</h4>
              <p>
                Conducted corporate yoga workshops between 2nd October 2022-14th
                October 2022 in India, focusing on stress management and team
                building.
              </p>

              <h4>Health awareness camps:</h4>
              <p>
                Yoga camps serve as transformative experiences, offering a
                holistic approach to wellness. They provide an immersive
                environment for participants to deepen their yoga practice,
                improve physical fitness, and enhance mental well-being.
                Moreover, yoga camps often incorporate mindfulness practices,
                meditation, and healthy living workshops, promoting overall
                health and stress management. They also foster a sense of
                community and connection among participants, creating a
                supportive environment for personal growth and self-discovery.
                Ultimately, yoga camps offer a unique opportunity for
                individuals to recharge, rejuvenate, and cultivate a balanced
                lifestyle. The health camps were conducted by Adi Shankaracharya
                Vedic Foundation from 5th June to 8th June at New Delhi.
              </p>

              <h4>Teaching yoga and therapies:</h4>
              <p>
                Conducted yoga and therapy teaching sessions in September 2022
                at Rishikesh, focusing on stress management, anxiety relief, and
                overall well-being.
              </p>

              <h4>Reformation program:</h4>
              <p>
                Organized reformation programs for prisoners in Delhi,
                coinciding with the celebration of World Yoga Day on 21st June
                2022.
              </p>

              <p>
                To view the full PDF version of this annual report, please{" "}
                <a
                  href="/path/to/annual-report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  click here
                </a>
                .
              </p>
            </Content>
          </Section>
        )}

        {activeSection === "programs" && (
          <Section>
            <SectionTitle>Our Vision and Mission</SectionTitle>
            <Content>
              <h3>Vision Statement</h3>
              <p>
                "To nurture a world where holistic wellness, education, social
                equity, and justice flourish, creating a harmonious and crime
                free society. Guided by the timeless wisdom of Adi
                Shankaracharya, our vision is to build a compassionate and
                enlightened society through dedicated programs that promote
                health, advance education, ensure environmental sustainability,
                drive social reform, and foster community integration. We are
                committed to prison reforms that support the reformation,
                rehabilitation, and reintegration of inmates, empowering them to
                lead meaningful lives post-incarceration. We aspire to empower
                individuals and communities, providing them with the tools and
                opportunities to achieve their fullest potential and contribute
                to a just and equitable world."
              </p>

              <h3>Mission Statement</h3>
              <p>
                "The mission of the Adi Shankaracharya Vedic Foundation (ASVF)
                is to serve humanity by fostering holistic wellness, education,
                social reform, and community empowerment. We are dedicated to:
              </p>
              <ol>
                <li>
                  Establishing and promoting Yoga Ashrams, Naturopathy and
                  Ayurvedic Hospitals, and other holistic wellness centers to
                  enhance physical and mental health.
                </li>
                <li>
                  Advancing the reformation, rehabilitation, and reintegration
                  of prisoners through vocational and educational programs both
                  within prisons and in the broader community.
                </li>
                <li>
                  Creating and supporting drug de-addiction programs and centers
                  for the general public and prison inmates.
                </li>
                <li>
                  Setting up educational and research institutes, schools, and
                  colleges worldwide to advance knowledge and innovation.
                </li>
                <li>
                  Promoting prison reforms through diverse media, including
                  cinema, drama, street plays, and documentaries.
                </li>
                <li>
                  Conducting devotional and motivational corporate training
                  programs to inspire and empower individuals and communities.
                </li>
                <li>
                  Running dispensaries, hospitals, temples, schools, colleges,
                  and crèches to meet diverse community needs.
                </li>
                <li>
                  Improving the availability, acceptance, use, and safety of
                  education, health services, environmental sustainability
                  practices, and technology in developing countries.
                </li>
                <li>
                  Fighting social inequality, relieving poverty, distress, and
                  sickness, and advancing education for economically and
                  socially disadvantaged people globally.
                </li>
                <li>
                  Renovating ancient temples and math established by Adi
                  Shankaracharya to preserve and promote cultural heritage.
                </li>
                <li>
                  Providing training and skills development to enhance community
                  capabilities and resilience.
                </li>
                <li>
                  Offering opportunities for voluntary service to individuals
                  and groups, fostering a culture of giving and collaboration.
                </li>
                <li>
                  Assisting in development work in India and overseas in
                  partnership with governmental and non-governmental
                  organizations.
                </li>
                <li>
                  Organizing exhibitions, meetings, lectures, classes, seminars,
                  and courses to disseminate knowledge and encourage community
                  engagement.
                </li>
                <li>
                  Conducting and sharing research on the foundation's objectives
                  and their societal impact.
                </li>
                <li>
                  Collaborating with local, national, and international
                  authorities to advance the foundation's mission and vision.
                </li>
              </ol>
              <p>
                Through these comprehensive and inclusive efforts, ASVF strives
                to build a healthier, more equitable, and enlightened world for
                all."
              </p>
            </Content>
          </Section>
        )}
      </PageContainer>
      <Footer />
    </>
  );
};

export default MediaReportPage;
