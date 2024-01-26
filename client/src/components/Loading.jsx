import styled from "styled-components";

const Wrapper = styled.section`
  height: calc(100dvh - 5.5rem);
  .loading {
    margin: 0 auto;
  }
  @media (min-width: 992px) {
    height: calc(100dvh - 7rem);
  }
`;
const Loading = () => {
  return (
    <Wrapper>
      <div className="loading"></div>
    </Wrapper>
  );
};

export default Loading;
