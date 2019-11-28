import React from "react";
import styled from "@emotion/styled";

const Image = styled.img`
  width: 100%;
  height: 460px;
  object-fit: none;
  object-position: top;
`;

const ImageWrapper = styled.div`
  object-fit: cover;
}
`;

const TextWish = styled.div`
  color: #4a4c3d;
  weight: 70%;
  min-height: 80px;
  padding: 8px;
`;

export default function DoorNext() {
  return (
    <>
      <main>
        <h1>#2 Türchen</h1>
        <ImageWrapper>
          <Image
            src={
              "https://images.unsplash.com/photo-1513639725746-c5d3e861f32a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            }
            alt=""
          />
        </ImageWrapper>
        <TextWish>
          Einen schönen ersten Advent – auch ganz ohne phsischen Adventskalender
          🎄
        </TextWish>
      </main>
    </>
  );
}
