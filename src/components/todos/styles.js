import styled from 'styled-components';


export const MainInput = styled.input`
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  margin: 35px 0 !important;
  line-height: 2em !important;
  padding-bottom: 0.625rem;
  width: 70%;
  text-align: center;
`

export const MainSelect = styled.select`
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  margin: 35px 0 !important;
  line-height: 2em !important;
  padding-bottom: 0.625rem;
  width: 70%;
  text-align: center;
`

export const MainBtn = styled.button`
  border-radius: 0 !important;
  padding: 1.3rem 2rem;
  font-weight: 300;
  font-style: normal;
  letter-spacing: .05em;
  text-transform: none;
  line-height: 1.2em;
  font-size: 1rem;
  color: black;
  background: white;
  border: 2px solid black;
  margin: 10px 0 60px 0;

  &:hover {
    color: white;
    background: black;
  }
`