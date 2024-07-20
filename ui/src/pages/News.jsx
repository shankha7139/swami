import React from "react";
import styled from "styled-components";
import NewNavbar from "../components/NewNavbar";
import { Footer } from "../components/Footer";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: auto;
  padding-top: 7%;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h3`
  margin-top: 0;
`;

const CardLink = styled.a`
  color: #0066cc;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const NewsClipsPage = () => {
  const newsClips = [
    {
      title: "News Clip 1",
      url: "https://youtu.be/y8dy_wRUHYM?feature=shared",
    },
    {
      title: "News Clip 2",
      url: "https://youtu.be/iYwFlthA43E?feature=shared",
    },
    {
      title: "News Clip 3",
      url: "https://youtu.be/8qnGLmz7lpo?feature=shared",
    },
    {
      title: "News Clip 4",
      url: "https://youtu.be/1vvxVpNoy_k?feature=shared",
    },
    {
      title: "News Clip 5",
      url: "https://youtu.be/y8dy_wRUHYM?feature=shared",
    },
    {
      title: "News Clip 6",
      url: "https://youtu.be/1vvxVpNoy_k?feature=shared",
    },
    {
      title: "News Clip 7",
      url: "https://youtu.be/Yku6xz673U8?feature=shared",
    },
    {
      title: "News Clip 8",
      url: "https://youtu.be/0o6WFuMHT_o?feature=shared",
    },
    {
      title: "News Clip 9",
      url: "https://youtu.be/krZtX9UUvlk?feature=shared",
    },
    {
      title: "News Clip 10",
      url: "https://youtu.be/jClM80MlQxI?feature=shared",
    },
    {
      title: "18 Tihar prisoners on transformation tour of Haridwar",
      url: "https://timesofindia.indiatimes.com/city/dehradun/18-tihar-prisoners-on-transformation-tour-of-haridwar/articleshow/54487628.cms",
    },
    {
      title: "Tihar jail inmates undergo transformation in Haridwar",
      url: "https://timesofindia.indiatimes.com/videos/news/tihar-jail-inmates-undergo-transformation-in-haridwar/videoshow/54682495.cms",
    },
    {
      title: "Tihar jail inmates undergo transformation in Haridwar (Hindi)",
      url: "https://navbharattimes.indiatimes.com/video/news/tihar-jail-inmates-undergo-transformation-in-haridwar/videoshow/54682868.cms",
    },
    {
      title: "Yoga training is being given to prisoners in jail",
      url: "https://www.hindusthansamachar.in/Encyc/2024/6/20/Yoga-training-is-being-given-to-prisoners-in-jail.php",
    },
    {
      title: "Yoga instructors will be prepared in Tihar Jail",
      url: "https://www.jagran.com/delhi/new-delhi-city-ncr-yoga-instructors-will-be-prepared-in-tihar-jail-18113548.html",
    },
    {
      title: "News Clip 16",
      url: "https://youtu.be/eGSVvTjckaY?feature=shared",
    },
    {
      title: "Yoga training to prisoners in jail",
      url: "https://m.haryana.punjabkesari.in/haryana/news/yoga-training-to-prisoners-in-jail-815452",
    },
    {
      title: "Yoga Day preparation in Tihar Jail",
      url: "https://www.aajtak.in/india/delhi/story/yoga-day-preparation-in-tihar-jail--302285-2015-06-18",
    },
    {
      title: "54 prisoners attend 45-day long course, turn yoga trainers",
      url: "https://timesofindia.indiatimes.com/city/gurgaon/54-prisoners-attend-45-day-long-course-turn-yoga-trainers/articleshow/65096092.cms",
    },
    {
      title: "Kiran Bedi Tweet",
      url: "https://x.com/thekiranbedi/status/1004372395279302658?t=TCsI4xvpE5jPUpEpI8WwVg&s=08",
    },
    {
      title: "Prisoners in Haryana jail would be trained as Yog Gurus",
      url: "https://timesofindia.indiatimes.com/city/chandigarh/prisoners-in-haryana-jail-would-be-trained-as-yog-gurus/articleshow/64497124.cms",
    },
  ];

  return (
    <>
      <NewNavbar />
      <PageContainer>
        <Title>News Clips</Title>
        <CardGrid>
          {newsClips.map((clip, index) => (
            <Card key={index}>
              <CardContent>
                <CardTitle>{clip.title}</CardTitle>
                <CardLink
                  href={clip.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View News Clip
                </CardLink>
              </CardContent>
            </Card>
          ))}
        </CardGrid>
      </PageContainer>
      <Footer />
    </>
  );
};

export default NewsClipsPage;
