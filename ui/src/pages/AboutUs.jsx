import React from "react";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import NewNavbar from "../components/NewNavbar";

const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 5%;
  box-sizing: border-box;
  background-color: #f9f9f9;
  color: #333;
  padding-top: 7%;
`;

const Content = styled.div`
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 20px;
  ol {
    list-style-type: circle;
  }
`;

const Header = styled.header`
  background: #04a56d;
  color: white;
  padding: 10px 0;
  text-align: center;
  font-size: 24px;
`;

const Section = styled.section`
  background: white;
  margin: 20px 0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: #4caf50;
  margin-bottom: 10px;
`;

const SectionContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const List = styled.ul`
  margin: 10px 0;
  padding: 0 20px;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
`;

const App = () => {
  return (
    <>
      <NewNavbar />
      <Container>
        <Header>Yogrishi Acharya Ashutosh Ji Maharaj</Header>
        <Section>
          <SectionTitle>Profile</SectionTitle>
          <SectionContent>
            Yogrishi Acharya Ashutosh Ji Maharaj is a renowned yoga teacher who
            firmly believes in the holistic system of human development and
            reformation through yoga and spiritual practices. With over 30 years
            of experience, he has made significant contributions globally,
            particularly in transforming Tihar prison through yoga and spiritual
            practices. The awakening slogan “योग युक्त भारत अपराध मुक्त भारत" is
            a gift of wisdom by Acharya Ashutosh Ji.
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Key Initiatives</SectionTitle>
          <SectionContent>
            Acharya Ji has undertaken several key initiatives, including:
          </SectionContent>
          <List>
            <ListItem>
              On International Yoga Day 2015, launched a year-long yoga program
              across all 10 jails of Tihar.
            </ListItem>
            <ListItem>
              Designed a 14-day holistic reformation program called “Rupantaran
              Yatra” for jail inmates.
            </ListItem>
            <ListItem>
              Transformed Mandoli Jail No.14 into a model facility.
            </ListItem>
            <ListItem>
              Opened a world-class yoga studio in Central Jail No-3 Tihar in
              2017.
            </ListItem>
            <ListItem>
              During the pandemic, led relief efforts distributing essential
              supplies to communities in need.
            </ListItem>
          </List>
        </Section>
        <Section>
          <SectionTitle>Achievements</SectionTitle>
          <SectionContent>
            Some of Acharya Ji's notable achievements include:
          </SectionContent>
          <List>
            <ListItem>
              Nearly 10865 inmates participated in the yoga program, earning
              recognition in the Limca Book of Records.
            </ListItem>
            <ListItem>
              Successfully reformed 550 inmates to yoga teachers by 2018.
            </ListItem>
            <ListItem>
              First volunteer to donate plasma during the COVID-19 pandemic.
            </ListItem>
            <ListItem>
              Received a pride letter from CM Office Delhi for his
              contributions.
            </ListItem>
          </List>
        </Section>
        <Section>
          <SectionTitle>Future Plans</SectionTitle>
          <SectionContent>
            On 21st June 2024, Acharya Ji resolved to establish:
          </SectionContent>
          <List>
            <ListItem>
              A successful nursery model in Uttarakhand Prison.
            </ListItem>
            <ListItem>
              A Panchkarma Training Center and world-class yoga studio for the
              reformation, rehabilitation, and reintegration of inmates.
            </ListItem>
          </List>
        </Section>
        <Section>
          <SectionTitle>Our Vision and Mission</SectionTitle>
          <Content>
            <h3>Vision Statement</h3>
            <p>
              "To nurture a world where holistic wellness, education, social
              equity, and justice flourish, creating a harmonious and crime free
              society. Guided by the timeless wisdom of Adi Shankaracharya, our
              vision is to build a compassionate and enlightened society through
              dedicated programs that promote health, advance education, ensure
              environmental sustainability, drive social reform, and foster
              community integration. We are committed to prison reforms that
              support the reformation, rehabilitation, and reintegration of
              inmates, empowering them to lead meaningful lives
              post-incarceration. We aspire to empower individuals and
              communities, providing them with the tools and opportunities to
              achieve their fullest potential and contribute to a just and
              equitable world."
            </p>

            <h3>Mission Statement</h3>
            <p>
              "The mission of the Adi Shankaracharya Vedic Foundation (ASVF) is
              to serve humanity by fostering holistic wellness, education,
              social reform, and community empowerment. We are dedicated to:
            </p>
            <ol>
              <li>
                Establishing and promoting Yoga Ashrams, Naturopathy and
                Ayurvedic Hospitals, and other holistic wellness centers to
                enhance physical and mental health.
              </li>
              <li>
                Advancing the reformation, rehabilitation, and reintegration of
                prisoners through vocational and educational programs both
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
                Running dispensaries, hospitals, temples, schools, colleges, and
                crèches to meet diverse community needs.
              </li>
              <li>
                Improving the availability, acceptance, use, and safety of
                education, health services, environmental sustainability
                practices, and technology in developing countries.
              </li>
              <li>
                Fighting social inequality, relieving poverty, distress, and
                sickness, and advancing education for economically and socially
                disadvantaged people globally.
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
                Offering opportunities for voluntary service to individuals and
                groups, fostering a culture of giving and collaboration.
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
              Through these comprehensive and inclusive efforts, ASVF strives to
              build a healthier, more equitable, and enlightened world for all."
            </p>
          </Content>
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default App;
