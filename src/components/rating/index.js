import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

const Rating = ({rate, count}) => {
  const [stars, setStars] = useState([
    'https://cdn1.iconfinder.com/data/icons/material-core/21/star-512.png',
    'https://cdn1.iconfinder.com/data/icons/material-core/21/star-512.png',
    'https://cdn1.iconfinder.com/data/icons/material-core/21/star-512.png',
    'https://cdn1.iconfinder.com/data/icons/material-core/21/star-512.png',
    'https://cdn1.iconfinder.com/data/icons/material-core/21/star-512.png',
  ]);
  useEffect(() => {
    const updateStars = () => {
      console.log(rate, count);
      const rateRounded = Math.round(rate);
      let tmp = stars.map((_, id) =>
        id + 1 < rateRounded
          ? 'https://cdn1.iconfinder.com/data/icons/material-core/21/star-512.png'
          : 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-512.png',
      );
      setStars(tmp);
    };
    // updateStars();
  }, []);

  return (
    <RatingContainer>
      {stars.map(star => {
        return (
          <StyledImage
            source={{
              uri: star,
            }}
          />
        );
      })}
      <Text>{count}</Text>
    </RatingContainer>
  );
};

const RatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
const StyledImage = styled.Image`
  width: 30px;
  height: 30px;
`;

export default Rating;
