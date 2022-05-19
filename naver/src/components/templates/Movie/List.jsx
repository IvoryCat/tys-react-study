import styled from 'styled-components';

const MovieList = ({ data }) => {
  return (
    <>
      <List>
        {data.map(({ link, image, title }) => (
          <Item key={link}>
            <a href={link} target="_blank" rel="noreferrer">
              <Thumbnail src={image} />
              <Title dangerouslySetInnerHTML={{ __html: title }} />
            </a>
          </Item>
        ))}
      </List>
    </>
  );
};

const List = styled.ul`
  padding: 20px;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const Item = styled.li``;

const Thumbnail = styled.img`
  width: 100%;
`;

const Title = styled.p``;

export default MovieList;
