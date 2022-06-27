import styled from "styled-components";

export const Container = styled.div`
  background-color: #171C22;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 1190px) {
    height: 100%;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 120px 40px;
  justify-content: space-between;

  @media (max-width: 1190px) {
    display: flex;
    flex-direction: column;
    
  }

  @media (max-width: 628px) {
    margin: 100px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
type Props = {
    backImage: string;
};

export const MovieContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;

  @media (max-width: 1190px) {
    margin-top: 0;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    padding: 20px 0;
  }
  
  @media (max-width: 628px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 458px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Left = styled.div<Props>`
  height: 475px;
  width: 375px;
  background-image: url(${(props) => props.backImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px 0 0 20px;

  @media (max-width: 1190px) {
    border-radius: 20px 0 0 20px;
  }

  @media (max-width: 628px) {
    border-radius: 20px 20px 0 0;
  }

  @media (max-width: 458px) {
    height: 250px;
    width: 230px;
    border-radius: 10px;
  }
`
export const Right = styled.div`
  height: 475px;
  width: 500px;
  background-color: #1D262D;
  text-justify: inter-word;
  border-radius:0 20px 20px 0;
  padding: 0 20px;

  span{
    color: #5DC98D;
  }
  
  h1 {
    color: #F7F7F7
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 30px;
    gap: 40px;
    padding-left: 0;
    padding-right: 0;
  }

  p {
    margin: 20px 20px;
    color: #CCCCCC;
  }

  @media (max-width: 1190px) {
    width: 375px;
    border-radius: 0 20px 20px 0;

    div {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 628px) {
    border-radius: 0 0 20px 20px;
    padding: 0;

    div {
      gap: 20px;
    }

    h1 {
      margin: 20px 20px;
    }
  }

  @media (max-width: 458px) {
    height: auto;
    width: 100%;
    border-radius: 10px;
    margin: 40px 0 0 0;
  }
`

export const CastContainer = styled.div`
  height: 475px;
  width: 375px;
  background-color: #1D262D;
  border-radius: 20px;

  @media (max-width: 458px) {
    height: auto;
    width: 100%;
    border-radius: 10px;
  }
`;