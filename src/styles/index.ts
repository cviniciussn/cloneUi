import styled from "styled-components";
import { motion } from "framer-motion";

import bg from "../img/bg.jpg";

export const Main = styled.main``;

export const Section = styled.div`
  position: relative;

  .first {
    background-color: red;
    overflow: hidden;

    .offset {
      width: 100%;
      height: 100%;
    }

    .a {
      background: url(${bg});
      background-size: cover;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        color: white;
        background-color: #000000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        position: relative;
      }

      .logotipo {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 25%;
      }

      .banner {
        display: flex;
        flex-direction: column;
        margin-top: 50%;
        padding: 10%;
        gap: 25px;

        > h1 {
          font-size: 3rem;
          font-family: "Cairo", sans-serif;
        }

        > h3 {
          font-size: 2rem;
          font-family: "Lato", sans-serif;
          font-weight: 300;
        }
      }
      .right-side {
        width: 50%;
        height: 100%;
        display: flex;

        .right-image {
          background-color: transparent;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .b {
      background-color: black;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      color: white;
      align-items: center;
      justify-content: center;
      // padding: 10%;
      text-align: center;
      font-size: 30px;
      font-weight: 300;
      font-family: "Lato", sans-serif;
      padding-top: 20px;
      padding-bottom: 20px;
      /* padding-left: 200px;
      padding-right: 200px; */

      > div {
        margin: 20px;
      }
      img {
        height: 10rem;
        width: 10rem;
      }
    }
    .c {
      background-color: #191919;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        width: 80%;
        height: 100%;
      }
    }
  }

  .second {
    background-color: #191919;
  }

  .second-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    > img {
      width: 500px;
      height: 100px;
    }
  }

  .third {
    background-color: yellow;
  }

  .fourth {
    background-color: blue;
  }
`;

export const Sticky = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;
