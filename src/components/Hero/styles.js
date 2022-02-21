import styled from "styled-components";

export const HeroStyled = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 92vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 957px) {
    display: flex;
    flex-direction: column;
  }
`

export const TextStyled = styled.article`
  width: 550px;
  
  padding: 2rem 0;

  color: var(--light);
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  margin: 0 auto 1rem;

  text-transform: uppercase;

  span {
    font-size: 63px;
    color: var(--blue);
    
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 3rem 0 0;

    a {
      width: 250px;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-decoration: none;
      justify-content: space-evenly;
      padding: 1rem 2.5rem;
      background-color: var(--dark);
      color: var(--light);
      border-radius: 5px;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      border: 2px solid var(--blue);
      margin-right: 2rem;
      cursor: pointer;
      letter-spacing: 2px;
      transition: all ease 0.5s;

      &:hover { // Neon
        box-shadow: 0 0 30px var(--blue);
      }
    }
  }

`
export const ImageStyled = styled.div`
  width: 600px;
  margin: 0 auto;
  
 
`
