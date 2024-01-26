import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 3rem;
  font-family: "Dm sans";
  article {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.3rem;
    box-shadow: var(--shadow-primary);
    border-radius: var(--border-radius);

    .logo-img {
      width: 3rem;
      height: 3rem;
      border-radius: 1rem;
      justify-self: center;
    }
  }
  .no-jobs {
    text-align: center;
    text-transform: uppercase;
    padding: 0 5rem;
  }
  .flag-img {
    width: 48px;
  }
  .contOne {
    display: grid;
    grid-template-columns: 50px 1fr;
    justify-content: center;
    gap: 1rem;
  }
  .position {
    color: var(--grey-900);
    font-weight: 700;
    font-size: 1.3rem;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
  }
  .company-brief {
    display: flex;
    flex-direction: column;
    row-gap: 1.2rem;
    ul {
      display: flex;
      align-items: center;
      color: var(--grey-400);
      gap: 1.4rem;
      li {
        display: flex;
        align-items: center;
        white-space: nowrap;
        gap: 0.7rem;
        span {
          font-size: 1rem;
          font-weight: 500;
        }
        .location {
          text-transform: capitalize;
        }
      }
    }
  }
  .icon-img {
    width: 1rem;
  }
  .currency-img {
    width: 0.7rem;
  }
  .job-type {
    display: flex;
    align-items: center;

    gap: 1.4rem;
    span {
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      font-size: 1rem;
      color: var(--primary-500);
    }
  }
  .contTwo {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    justify-content: space-between;
  }
  .cta-btns {
    align-self: flex-end;
    display: flex;
    gap: 1.4rem;
    button {
      padding: 0.5rem 3rem;
      white-space: nowrap;
      font-size: 1.1rem;
      letter-spacing: var(--letter-spacing);
      text-transform: capitalize;
    }
  }
  .edit-btn {
    background-color: transparent;
    color: var(--primary-500);
    padding: 0.5rem 3rem;
    border: 1px solid var(--primary-500);
  }
  .edit-btn:hover {
    background-color: var(--primary-500);
    color: var(--white);
  }
  .skills {
    display: flex;
    height: 45px;
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 1.5rem;
    li {
      display: flex;
      padding: 1rem 2rem;
      align-items: center;
      cursor: pointer;

      height: 30px;
      background-color: var(--primary-100);
      border-radius: var(--border-radius);
      white-space: nowrap;
    }
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--primary-300);
      border-radius: 6px;
    }
  }

  @media (max-width: 540px) {
    .flag-img {
      width: 42px;
    }
    .company-brief {
      ul {
        gap: 1rem;
        li {
          gap: 0.5rem;
          span {
            font-size: 0.8rem;
          }
        }
      }
    }
    .cta-btns {
      gap: 1rem;
      button {
        padding: 0.4rem 2.1rem;
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 992px) {
    .contOne {
      justify-items: center;
      grid-template-columns: 1fr;
      grid-template-rows: 50px 1fr;
    }
    article {
      row-gap: 1rem;
      flex-direction: column;
      .logo-img {
        width: 4rem;
        height: 4rem;
      }
    }

    .company-brief {
      align-items: center;
    }
    .contTwo {
      width: 100%;
    }
    .cta-btns {
      align-self: end;
    }
    .skills {
      width: 60%;
      align-self: center;
    }
  }
`;
export default Wrapper;
