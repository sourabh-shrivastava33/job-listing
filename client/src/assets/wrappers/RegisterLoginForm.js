import styled from "styled-components";
const Wrapper = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  overflow-y: hidden;
  .img {
    height: 100vh;
  }
  .form {
    width: 90%;
    box-shadow: none;
    max-width: var(--fixed-width);
    .last-row {
      .form-input {
        margin-bottom: 0;
      }
    }
  }
  .form-title {
    font-size: 1.8rem;
    text-transform: none;
    margin-bottom: 0.8rem;
  }
  .form-text {
    font-size: 1rem;
    margin-bottom: 1.4rem;
  }
  .bcImage {
    position: relative;
    display: none;
  }
  .info {
    position: absolute;
    font-size: 2.8rem;
    transform: translate(-42%, 0);
    white-space: nowrap;
    letter-spacing: var(--letter-spacing);
    top: 10%;
    color: var(--white);
    left: 42%;
  }
  .form-row {
    margin-bottom: 1.5rem;
  }
  .form-input {
    height: 45px;
    display: block;
    background-color: var(--grey-50);
  }
  .form-alert {
    display: none;
  }
  .form-input:invalid[focused="true"] ~ .form-alert {
    display: block;
  }
  .form-text {
    color: var(--grey-700);
    margin-bottom: 2.4rem;
  }
  .form-check {
    margin-right: 0.8rem;
  }
  .check {
    margin-bottom: 1.5rem;
  }
  .check-label {
    font-size: 0.6rem;
    display: inline-block;
    color: var(--grey-500);
  }
  .navigate {
    margin-top: 1rem;
    color: var(--grey-500);
  }
  @media (max-width: 992px) {
    place-items: center;
    align-content: start;
  }
  @media (min-width: 992px) {
    .form {
      max-width: none;
    }
    .bcImage {
      display: block;
    }
    .form-title {
      font-size: 2.4rem;
    }
    .form-input {
      height: 65px;
      width: 80%;
    }
    .form-alert {
      margin-bottom: 2rem;
    }
    .form-text {
      font-size: 1.3rem;
      margin-bottom: 3rem;
    }
    .check-label {
      font-size: 0.8rem;
    }
  }

  .form-btn {
    width: 13rem;
    height: 45px;
  }
  @media (min-width: 992px) and (max-width: 1240px) {
    grid-template-columns: 1fr 650px;
  }
  @media (min-width: 1240px) {
    grid-template-columns: 1fr 45%;
  }
`;
export default Wrapper;
