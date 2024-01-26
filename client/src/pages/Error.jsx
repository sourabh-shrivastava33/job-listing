import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";
import notFound from "../assets/image/not-found.svg";
const Wrapper = styled.main`
  background-color: var(--primary-50);
  div {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1rem;
    padding: 6rem 0;
    img {
      width: 40%;
      object-fit: cover;
    }
    a {
      color: var(--grey-600);
    }
    .error {
      justify-content: center;
    }
  }

  @media (max-width: 992px) {
    div {
      padding: 10rem 0;
      img {
        width: 50%;
      }
    }
  }
`;
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={notFound} alt="not found" />
          <h3>Ohh page not found</h3>
          <p>We can&apos;t seem to have page you was looking for</p>
          <Link to="/">Back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3 className="error">Something went wrong</h3>
        <Link to="/">Back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
