import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 30px 0px;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar />
      <Details>
        <Name>
          John Doe <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, impedit
          dicta itaque ut quam eius temporibus perspiciatis velit quos inventore
          nostrum fugit veritatis sapiente repudiandae blanditiis. Rem officia
          sed numquam?
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
