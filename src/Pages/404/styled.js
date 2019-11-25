import Styled from 'styled-components';

export const PageNotFoundComponent = Styled.section` 

  article {
    max-height: 400px; 
    max-width: 400px;
    position: absolute;
    width:100%;
    margin: 0 auto;
    margin-left: 5%;
    margin-top: 10%;

    h2 {
      color: #DD4646;
      font-size: 5rem;
      position: relative;
      letter-spacing: 2rem;;

      div {
        width: 80px;
        height: 80px;
        background: #DD4646;
        position: relative;
        border-radius: 50%;
        top: -80px;
        left: 60px;
        
        &:before {
          content: '';
          width: 140%;
          height: 140%;
          display: block;
          border-radius: 50%;
          background: #DD464677;
          position: relative;
          left: -20%;
          top: -20%;
          
        }
        &:after {
          content: '';
          width: 170%;
          height: 170%;
          display: block;
          border-radius: 50%;
          background: #DD464677;
          position: absolute;
          left: -35%;
          top: -35%;
        }
      }
    }

    p {
      position: relative;
      top: -80px;
      font-size: 1.2rem;
      
      span {
        cursor: pointer;
        color: #333;
        padding: 5px 0;
        background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);

        background-repeat: no-repeat;
        background-size: 100% 0.2em;
        background-position: 0 88%;
        transition: background-size 0.25s ease-in;
        &:hover, &:active {
          transition: background-size 0.25s ease-in;
          background-size: 100% 88%;
          color: #fff;
        }
      }
    }
  }

  
`;