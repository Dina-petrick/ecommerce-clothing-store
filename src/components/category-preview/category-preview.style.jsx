import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const CategoryPreviewContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;
`


export const Title = styled.h2`
  margin-bottom: 20px;
  cursor: pointer;
`




export const TitleLink = styled(Link)`
  font-size: 28px;
  letter-spacing: 1px;
  transition : letter-spacing 0.4s ease;
  &:hover{
    letter-spacing: 4px;
  }
`

export const Arrow = styled.span`
  display:inline-block;
  margin-left: 5px;
  transition : margin-left 0.2s ease;

  ${TitleLink}:hover & {
    margin-left: 12px;
  }

`

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`

