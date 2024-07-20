import React from "react";
import styled from "styled-components";
import NewNavbar from "../components/NewNavbar";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: auto auto;

  padding: 40px 20px;
  padding-top: 5%;
  font-family: "Roboto", sans-serif;
  color: #333;
  background-color: #f9f9f9;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  color: #1a5f7a;
  font-size: 2.8em;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  color: #457b9d;
  font-size: 1.8em;
  font-weight: 400;
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

const VisionMissionSection = styled(Section)`
  background-color: #f1faee;
`;

const VisionMissionTitle = styled(SectionTitle)`
  color: #1d3557;
`;

const VisionMissionContent = styled.div`
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const MissionList = styled.ol`
  padding-left: 20px;
`;

const MissionItem = styled.li`
  margin-bottom: 10px;
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

const AnnualReportPage = () => {
  return (
    <>
      <NewNavbar />
      <PageContainer>
        <Header>
          <Title>Annual Report</Title>
          <Subtitle>1st April 2022 - 31st March 2023</Subtitle>
        </Header>

        <VisionMissionSection>
          <VisionMissionTitle>Our Vision and Mission</VisionMissionTitle>
          <VisionMissionContent>
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
          </VisionMissionContent>
          <VisionMissionContent>
            <h3>Mission Statement</h3>
            <p>
              "The mission of the Adi Shankaracharya Vedic Foundation (ASVF) is
              to serve humanity by fostering holistic wellness, education,
              social reform, and community empowerment. We are dedicated to:"
            </p>
            <MissionList>
              <MissionItem>
                Establishing and promoting Yoga Ashrams, Naturopathy and
                Ayurvedic Hospitals, and other holistic wellness centers to
                enhance physical and mental health.
              </MissionItem>
              <MissionItem>
                Advancing the reformation, rehabilitation, and reintegration of
                prisoners through vocational and educational programs both
                within prisons and in the broader community.
              </MissionItem>
              <MissionItem>
                Creating and supporting drug de-addiction programs and centers
                for the general public and prison inmates.
              </MissionItem>
              <MissionItem>
                Setting up educational and research institutes, schools, and
                colleges worldwide to advance knowledge and innovation.
              </MissionItem>
              <MissionItem>
                Promoting prison reforms through diverse media, including
                cinema, drama, street plays, and documentaries.
              </MissionItem>
              <MissionItem>
                Conducting devotional and motivational corporate training
                programs to inspire and empower individuals and communities.
              </MissionItem>
              <MissionItem>
                Running dispensaries, hospitals, temples, schools, colleges, and
                crèches to meet diverse community needs.
              </MissionItem>
              <MissionItem>
                Improving the availability, acceptance, use, and safety of
                education, health services, environmental sustainability
                practices, and technology in developing countries.
              </MissionItem>
              <MissionItem>
                Fighting social inequality, relieving poverty, distress, and
                sickness, and advancing education for economically and socially
                disadvantaged people globally.
              </MissionItem>
              <MissionItem>
                Renovating ancient temples and math established by Adi
                Shankaracharya to preserve and promote cultural heritage.
              </MissionItem>
              <MissionItem>
                Providing training and skills development to enhance community
                capabilities and resilience.
              </MissionItem>
              <MissionItem>
                Offering opportunities for voluntary service to individuals and
                groups, fostering a culture of giving and collaboration.
              </MissionItem>
              <MissionItem>
                Assisting in development work in India and overseas in
                partnership with governmental and non-governmental
                organizations.
              </MissionItem>
              <MissionItem>
                Organizing exhibitions, meetings, lectures, classes, seminars,
                and courses to disseminate knowledge and encourage community
                engagement.
              </MissionItem>
              <MissionItem>
                Conducting and sharing research on the foundation's objectives
                and their societal impact.
              </MissionItem>
              <MissionItem>
                Collaborating with local, national, and international
                authorities to advance the foundation's mission and vision.
              </MissionItem>
            </MissionList>
            <p>
              Through these comprehensive and inclusive efforts, ASVF strives to
              build a healthier, more equitable, and enlightened world for all.
            </p>
          </VisionMissionContent>
        </VisionMissionSection>

        <Section>
          <SectionTitle>Programs and Events</SectionTitle>
          <ProgramGrid>
            <ProgramCard>
              <ProgramImage
                src="/path/to/jyoti-parv.jpg"
                alt="Jyoti Parv at Tihar Jail"
              />
              <ProgramContent>
                <ProgramTitle>Jyoti Parv at Tihar Jail</ProgramTitle>
                <ProgramDescription>
                  Organized on 18th June 2022 with 2500 inmate participants,
                  focusing on psychological rehabilitation and embracing dharma.
                </ProgramDescription>
              </ProgramContent>
            </ProgramCard>

            <ProgramCard>
              <ProgramImage
                src="/path/to/yoga-culture.jpg"
                alt="Yoga Culture and Demonstration"
              />
              <ProgramContent>
                <ProgramTitle>Yoga Culture and Demonstration</ProgramTitle>
                <ProgramDescription>
                  Held on 28th April 2022 at the National Media Center, Delhi,
                  in collaboration with the Ministry of Jal Shakti.
                </ProgramDescription>
              </ProgramContent>
            </ProgramCard>

            <ProgramCard>
              <ProgramImage
                src="/path/to/nimka-jail.jpg"
                alt="Nimka Jail Faridabad"
              />
              <ProgramContent>
                <ProgramTitle>Parivartan Yatra at Nimka Jail</ProgramTitle>
                <ProgramDescription>
                  8th World Yoga Day program at District Jail Faridabad,
                  promoting a crime-free India through yoga practices.
                </ProgramDescription>
              </ProgramContent>
            </ProgramCard>

            <ProgramCard>
              <ProgramImage
                src="/path/to/female-inmates.jpg"
                alt="Yoga Day for Female Inmates"
              />
              <ProgramContent>
                <ProgramTitle>Yoga Day for Female Inmates</ProgramTitle>
                <ProgramDescription>
                  Special program for female inmates at District Jail Faridabad,
                  focusing on lifestyle diseases and yoga's health benefits.
                </ProgramDescription>
              </ProgramContent>
            </ProgramCard>

            <ProgramCard>
              <ProgramImage
                src="/path/to/dhanuka-agritech.jpg"
                alt="Yoga at Dhanuka Agritech Ltd"
              />
              <ProgramContent>
                <ProgramTitle>
                  Yoga Program at Dhanuka Agritech Ltd
                </ProgramTitle>
                <ProgramDescription>
                  Corporate yoga program addressing mental and physical health
                  for executives and professionals.
                </ProgramDescription>
              </ProgramContent>
            </ProgramCard>

            <ProgramCard>
              <ProgramImage
                src="/path/to/religion-conclave.jpg"
                alt="International Religion Conclave"
              />
              <ProgramContent>
                <ProgramTitle>International Religion Conclave</ProgramTitle>
                <ProgramDescription>
                  Speaker at the conclave on the importance of spirituality in
                  the modern world, held at Vigyan Bhawan, New Delhi in January
                  2023.
                </ProgramDescription>
              </ProgramContent>
            </ProgramCard>

            <ProgramCard>
              <ProgramImage
                src="/path/to/marwah-studio.jpg"
                alt="Marwah Studio Event"
              />
              <ProgramContent>
                <ProgramTitle>Spiritual Event at Marwah Studio</ProgramTitle>
                <ProgramDescription>
                  Panel discussion on connecting youth with spirituality, held
                  on January 6th, 2023 in Noida.
                </ProgramDescription>
              </ProgramContent>
            </ProgramCard>

            <ProgramCard>
              <ProgramImage
                src="/path/to/bhagwat-katha.jpg"
                alt="Bhagwat Katha"
              />
              <ProgramContent>
                <ProgramTitle>Bhagwat Katha at Mandolin Jail</ProgramTitle>
                <ProgramDescription>
                  Spiritual discourse for prisoners to promote hope, purpose,
                  and inner peace, held on July 14th, 2022 at Mandolin Jail,
                  Faridabad.
                </ProgramDescription>
              </ProgramContent>
            </ProgramCard>

            <ProgramCard>
              <ProgramImage src="/path/to/yoga-camps.jpg" alt="Yoga Camps" />
              <ProgramContent>
                <ProgramTitle>Yoga Camps</ProgramTitle>
                <ProgramDescription>
                  Camps organized from June 1st to 3rd, 2022 in Delhi, promoting
                  physical fitness, mental well-being, and stress relief.
                </ProgramDescription>
              </ProgramContent>
            </ProgramCard>

            <ProgramCard>
              <ProgramImage
                src="/path/to/yoga-lectures.jpg"
                alt="Lectures on Yoga"
              />
              <ProgramContent>
                <ProgramTitle>Lectures and Teachings on Yoga</ProgramTitle>
                <ProgramDescription>
                  Lectures held on July 5th, 2022 at Rishikesh, Uttarakhand,
                  focusing on the multifaceted benefits of yoga practices.
                </ProgramDescription>
              </ProgramContent>
            </ProgramCard>

            <ProgramCard>
              <ProgramImage
                src="/path/to/corporate-programs.jpg"
                alt="Corporate Programs"
              />
              <ProgramContent>
                <ProgramTitle>Corporate Yoga Programs</ProgramTitle>
                <ProgramDescription>
                  Workshops conducted from October 2nd to 14th, 2022, addressing
                  stress management and team building in corporate settings.
                </ProgramDescription>
              </ProgramContent>
            </ProgramCard>

            <ProgramCard>
              <ProgramImage
                src="/path/to/health-camps.jpg"
                alt="Health Awareness Camps"
              />
              <ProgramContent>
                <ProgramTitle>Health Awareness Camps</ProgramTitle>
                <ProgramDescription>
                  Holistic wellness camps held from June 5th to 8th in New
                  Delhi, offering yoga, mindfulness, and healthy living
                  workshops.
                </ProgramDescription>
              </ProgramContent>
            </ProgramCard>

            <ProgramCard>
              <ProgramImage
                src="/path/to/yoga-therapies.jpg"
                alt="Yoga and Therapies"
              />
              <ProgramContent>
                <ProgramTitle>Teaching Yoga and Therapies</ProgramTitle>
                <ProgramDescription>
                  Comprehensive programs conducted in September 2022 at
                  Rishikesh, focusing on physical, mental, and emotional
                  well-being through yoga and therapeutic techniques.
                </ProgramDescription>
              </ProgramContent>
            </ProgramCard>

            <ProgramCard>
              <ProgramImage
                src="/path/to/reformation-program.jpg"
                alt="Reformation Program"
              />
              <ProgramContent>
                <ProgramTitle>Reformation Program for Prisoners</ProgramTitle>
                <ProgramDescription>
                  Yoga-based rehabilitation program for inmates, conducted on
                  World Yoga Day (June 21st, 2022) in Delhi, addressing stress,
                  emotional well-being, and positive behavior change.
                </ProgramDescription>
              </ProgramContent>
            </ProgramCard>
          </ProgramGrid>
        </Section>
      </PageContainer>
    </>
  );
};

export default AnnualReportPage;
