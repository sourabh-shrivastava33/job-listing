import styled from "styled-components";
const Wrapper = styled.aside`
  background-color: var(--white);
  box-shadow: var(--shadow-primary);
  padding: 2rem 6rem;
  height: 200px;
  border-radius: var(--border-radius);
  .title-filter {
    input {
      width: 100%;
      height: 40px;
      border: 1px solid var(--grey-200);
      border-radius: 5px;
      padding: 1rem 2rem;
      color: var(--grey-300);
      letter-spacing: var(--letter-spacing);
      text-transform: capitalize;
      font-size: 1.1rem;
      &::placeholder {
        color: var(--grey-200);
      }
    }
  }
  .skill-filter {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 2rem;
    .skills {
      width: 10rem;
      border-radius: var(--border-radius);
      border: 1px solid var(--grey-200);
      font-size: 1rem;
      padding: 2px 5px;
      color: var(--grey-200);
      height: 2.4rem;
      option {
        color: var(--grey-300);
        width: 100px;
      }
    }
    .clear {
      font-size: 1rem;
      background: transparent;
      border: none;
      color: var(--primary-500);
      letter-spacing: var(--letter-spacing);
      text-transform: capitalize;
      transition: var(--transition);
      padding: 0.3rem 1.6rem;
      cursor: pointer;
      border-radius: var(--border-radius);
      &:hover {
        box-shadow: var(--shadow-2);
        background-color: var(--primary-700);
        color: var(--white);
      }
    }

    .tags {
      display: flex;
      align-items: center;
      gap: 1rem;
      width: 20rem;
      height: 4rem;
      overflow-x: scroll;
      overflow-y: hidden;
      &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--primary-300);
        border-radius: 6px;
      }
      li {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.2rem;
        white-space: nowrap;
        background-color: var(--primary-100);
        span,
        .cross {
          padding: 0.1rem 1.2rem;
        }
        .cross {
          background-color: var(--primary-500);
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 992px) {
    height: auto;
    padding: 2rem 3rem;
    .skill-filter {
      flex-direction: column;
      .tags {
        width: 100%;
      }
    }
  }
`;
export default Wrapper;
