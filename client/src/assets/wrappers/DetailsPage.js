import styled from "styled-components";

const Wrapper = styled.section`
  min-height: calc(100dvh - 7rem + 30px);
  background-color: var(--primary-50);
  .head,
  .body {
    width: 100%;
    box-shadow: var(--shadow-primary);
    border-radius: var(--border-radius);
    background-color: var(--white);
    padding: 1rem 2rem;
  }
  .head {
    min-height: 6rem;
    margin-top: -30px;
    position: relative;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    h4 {
      text-align: center;
      text-transform: none;
    }
  }
  .company,
  .job-type {
    white-space: nowrap;
    text-transform: capitalize;
  }

  .small-brief {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--grey-200);
    letter-spacing: var(--letter-spacing);
  }
  .created-time {
    white-space: nowrap;
  }

  .logo-img {
    width: 48px;
  }
  .job-position-cont {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .job-position {
      font-size: 2.8rem;
      font-weight: 500;
      text-align: center;
    }
  }

  .edit-btn {
    padding: 0.6rem 2.1rem;
    white-space: nowrap;
  }
  .location {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 0.9rem;
    font-weight: 500;
    margin-top: 0.5rem;
    letter-spacing: var(--letter-spacing);
  }
  .salary-duration-cont {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
    color: var(--grey-200);
    p {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 0.5rem;
    }
    .salary,
    .duration {
      font-size: 1rem;
      color: var(--grey-900);
    }
  }
  .svg-box {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    text-transform: capitalize;
    img {
      width: 1.6rem;
    }
  }
  .description {
    h5 {
      font-size: 1rem;
      letter-spacing: var(--letter-spacing);
      font-weight: 700;
      margin: 2rem 0 1.5rem 0;
    }
    p {
      line-height: 1.6;
    }
  }
  .skill-tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    .skill {
      padding: 0.5rem 1.8rem;
      border-radius: 100px;
      cursor: pointer;
      background-color: var(--primary-50);
    }
  }
  .skill-required {
    font-size: 1rem;
    letter-spacing: var(--letter-spacing);
    font-weight: 700;
    margin: 2rem 0 1.5rem 0;
  }
  @media (max-width: 640px) {
    .head {
      padding: 0;
      h4 {
        font-size: 1.3rem;
      }
    }
    .body {
      padding: 1rem;
    }
    .small-brief {
      flex-wrap: wrap;
      justify-content: center;
    }
    .location {
      justify-content: center;
    }
    .job-position-cont {
      flex-direction: column;
      gap: 1rem;
      .job-position {
        font-size: 2.4rem;
      }
      button {
        width: 50%;
      }
    }
    .logo-img {
      width: 36px;
    }
    .company {
      white-space: normal;
      text-align: center;
    }
    .salary-duration-cont {
      justify-content: center;
    }
  }

  @media (max-width: 992px) {
    min-height: calc(100dvh - 5.5rem);
    padding: 2rem 0;
    .head {
      margin-top: 0;
    }
  }
  @media (max-width: 992px) and (min-width: 640px) {
    .head {
      margin-top: 0;
      h4 {
        font-size: 1.6rem;
      }
    }
  }
`;
export default Wrapper;
