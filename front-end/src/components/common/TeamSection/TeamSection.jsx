// src/components/common/TeamSection/TeamSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import teamData from "../../../data/teamData.js";
import vectorImageSrc from "../../../assets/images/Vector.png";

import {
  Root,
  HeadingContainer,
  Heading,
  VectorImage,
  SwiperWrapper,
  TeamCard,
  AvatarStyled,
  CardContentStyled,
  Name,
  Title,
  Description,
  BackgroundContainer,
} from "./TeamSectionStyles";

const TeamSection = () => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      {/* Heading Section (Separate from Background) */}
      <HeadingContainer>
        <Heading>OUR Team</Heading>
        <VectorImage src={vectorImageSrc} alt="Decorative Vector" />
      </HeadingContainer>

      {/* Background and Swiper Section */}
      <BackgroundContainer>
        <Root>
          <SwiperWrapper>
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {teamData.map((member, index) => (
                <SwiperSlide key={index}>
                  <TeamCard>
                    <AvatarStyled alt={member.name} src={member.image} />
                    <CardContentStyled>
                      <Name>{member.name}</Name>
                      <Title>{member.title}</Title>
                      <Description>{member.description}</Description>
                    </CardContentStyled>
                  </TeamCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperWrapper>
        </Root>
      </BackgroundContainer>
    </div>
  );
};

export default TeamSection;
