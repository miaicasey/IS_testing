import React from "react";
import * as S from "./styles";

const images = ["/assets/id412/w1/images/1.webp", "/assets/id412/w1/images/2.webp", "/assets/id412/w1/images/3.webp", "/assets/id412/w1/images/4.webp"];

const gridSize = 10; // This can be changed to any number

export default function ImageDisplay() {
  const totalCells = gridSize * gridSize;

  return (
    <S.ImageContainer $gridSize={gridSize}>
      {[...Array(totalCells)].map((_, index) => {
        const row = Math.floor(index / gridSize);
        const col = index % gridSize;
        const shouldReverseX = col % 2 !== 0;
        const shouldReverseY = row % 2 !== 0;
        const imageIndex = index % images.length;

        return (
          <S.GridItem key={index} $reverseX={shouldReverseX} $reverseY={shouldReverseY}>
            <S.StyledImage src={images[imageIndex]} alt={`Sample Image ${imageIndex + 1}`} />
          </S.GridItem>
        );
      })}
    </S.ImageContainer>
  );
}