import React from 'react';
import styled, { css } from 'styled-components'

const Result = styled.div`
  box-sizing:border-box;
  height: 300px;
  padding: 5px;
  border-top: solid 1px rgba(0,0,0,0.2);
`

const Title = styled.div`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Container = styled.div`
  
  width:100%;
  padding-top: 5px;
  padding-bottom: 50px;
`;

const ContainerImage = styled.img`
  max-height: 200px;
  width: 25%;
  float: left;
`;

const ContainerDescription = styled.div`
  max-height: inherit;
  overflow: hidden;
  width: 75%;
  float: left;
  text-align: center;
`;


export default function ResultItem(props) {

  let imgSrc = "https://cdn.discordapp.com/attachments/636565266356240394/643526122516250696/screenshot.png";
  if (props.volumeInfo.imageLinks !== undefined) {
    imgSrc = props.volumeInfo.imageLinks.thumbnail;
  }

  let author = 'N/A';
  if (props.volumeInfo.authors !== undefined) {
    author = props.volumeInfo.authors[0];
  }

  let price = 'N/A';
  if (props.saleInfo.listPrice !== undefined) {
    if (props.saleInfo.listPrice.amount !== undefined) {
      price = props.saleInfo.listPrice.amount;
    }
  }

  let description = 'N/A';
  if (props.volumeInfo.description !== undefined) {
    description = props.volumeInfo.description.split('.')[0] +
      '.';
  }
  // console.log(typeof descriptionSentence);

  return (
    <Result>
      <Title>{props.volumeInfo.title}</Title>
      <Container>
        {/* <img src={props.volumeInfo.imageLinks.thumbnail}></img> */}
        <ContainerImage src={imgSrc}></ContainerImage>
        <ContainerDescription>
          {'Author: ' + author} <br></br>
          {'Price: ' + price} <br></br><br></br>
          {description}
        </ContainerDescription>
      </Container>
    </Result>
    // <div className="bookmark">
    //   <div className="bookmark__row">
    //     <div className="bookmark__title">
    //       <a 
    //         href={props.url} 
    //         target="_blank"
    //         rel="noopener noreferrer">
    //           {props.title}
    //         </a>
    //     </div>
    //     <Rating value={props.rating}/>
    //   </div>      
    //   <div className="bookmark__description">
    //     {props.description}
    //   </div>
    // </div>
  )
}