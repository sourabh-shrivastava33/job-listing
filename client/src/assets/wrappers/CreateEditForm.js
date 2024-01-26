import styled from "styled-components";
const Wrapper = styled.section`
  height: 100vh;

  .form {
    width: 90%;
    box-shadow: none;
    /* max-width: var(--fixed-width); */
    overflow-y: scroll;
    max-width: none;
    flex-grow: 1;
    margin: 3rem;
    padding-top: 1rem;
  }
  .form::-webkit-scrollbar {
    width: 12px;
  }
  .form::-webkit-scrollbar-thumb {
    width: 12px;
    border-radius: 100px;
    background-color: var(--grey-50);
  }
  .form-select {
    width: 12rem;
    height: 3rem;
    font-size: 1.4rem;
    color: var(--grey-300);
  }
  .file-input {
    height: 45px;
  }
  .text-area {
    resize: none;
    height: 10rem;
  }
  .form-alert {
    display: none;
  }
  .form-input:invalid[focused="true"] ~ .form-alert {
    display: block;
  }
  .form-title {
    margin-bottom: 1.5rem;
  }
  .form-label {
    align-self: flex-start;
  }
  .input-alert {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    gap: 1rem;
  }
  .form-label {
    font-size: 1.5rem;
    min-width: 200px;
  }

  .form-row {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .cta-btns {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  .submit-btn,
  .cancel-btn {
    padding: 0.6rem 2.1rem;
  }
  .cancel-btn {
    background-color: transparent;
    border: none;
    box-shadow: none;
    color: var(--primary-500);
    &:hover {
      background-color: var(--primary-500);
      color: var(--white);
      box-shadow: var(--shadow-3);
    }
  }

  .create-page {
    max-height: 100vh;
    display: flex;
  }
  .banner-cont {
    position: relative;
  }
  .img-text {
    position: absolute;
    top: 3rem;
    transform: translate(50%, 0);
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--white);
    letter-spacing: var(--letter-spacing);
  }
  .main-img {
    height: 100vh;
    width: 700px;
    object-fit: fill;
  }
  @media (max-width: 640px) {
    .form-row {
      flex-direction: column;
    }
    .input-alert {
      align-self: flex-start;
      gap: 0;
      width: 100%;
    }
    .form-row {
      gap: 0;
    }
    .form-title {
      font-size: 1.6rem;
    }
    .form-label {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 1240px) and (min-width: 992px) {
    .main-img {
      width: 500px;
    }
    .form-label {
      font-size: 1.2rem;
      min-width: 150px;
    }
    .form-row {
      gap: 0.5rem;
    }

    .img-text {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 992px) {
    .banner-cont {
      display: none;
    }
    .input-alert {
      gap: 0.5rem;
    }
    .form {
      margin: 1.5rem auto;
      box-shadow: none;
    }
  }
`;
export default Wrapper;
