import styled from "styled-components";
import headerImg from "../image/header.png";

export const Wrapper = styled.section`
  min-height: 100vh;
  header {
    margin: 0 auto;
    width: 100%;
    height: 5.5rem;
    background-image: url("${headerImg}");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    position: relative;
    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6rem;
      padding: 1.5rem 2rem;
    }
    .logo {
      font-size: 1.8rem;
      color: var(--white);
      font-weight: 700;
    }
    nav {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
  .login-btn,
  .register-btn {
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 1px solid var(--white);
  }
  .register-btn {
    background-color: var(--white);
    color: var(--primary-400);
  }
  .loading {
    width: 4rem;
    height: 4rem;
    border-top: 5px solid var(--primary-900);
  }
  .user-header {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--white);
    .logout-btn {
      font-size: 0.8rem;
      background-color: transparent;
      border: none;
      box-shadow: none;
      font-weight: 600;
    }
    .logout-btn:hover {
      background-color: var(--primary-600);
      box-shadow: var(--shadow-2);
    }
    .greet {
      font-size: 1rem;
      font-weight: 700;
      white-space: nowrap;
    }
    svg {
      font-size: 40px;
      display: none;
    }
  }

  @media (min-width: 992px) {
    header {
      border-bottom-left-radius: 3.5rem;
      border-bottom-right-radius: 3.5rem;
      height: var(--nav-height);
      .logo {
        font-size: 2.4rem;
      }
      .nav-container {
        padding: 2rem;
        width: 100%;
      }
      nav {
        gap: 1.5rem;
      }
    }
    .user-header {
      svg {
        display: block;
      }
      .greet {
        font-size: 1.3rem;
      }
      .logout-btn {
        font-size: 1.2rem;
      }
    }
    .login-btn,
    .register-btn {
      padding: 0.7rem 1.4rem;
    }
  }
  @media (max-width: 620px) {
    header {
      .logo {
        font-size: 1.4rem;
      }

      .nav-container {
        gap: 1rem;
      }
      .login-btn,
      .register-btn {
        padding: 0.3rem 0.6rem;
      }
    }
    .user-header {
      gap: 0;
      font-size: 0.9rem;
    }
  }
`;
