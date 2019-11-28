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

export default function DoorPrev() {
  return (
    <>
      <main>
        <h1>#1 Türchen</h1>
        <ImageWrapper>
          <Image
            src={
              "https://images.unsplash.com/photo-1545048702-79362596cdc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
            }
            alt=""
          />
        </ImageWrapper>
        <TextWish>Ab jetzt gibt es jeden Tag ein Türchen 🎄</TextWish>
      </main>
    </>
  );
}
