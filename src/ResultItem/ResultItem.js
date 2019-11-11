import React from 'react';
import styled, { css } from 'styled-components'

// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;

//   ${props =>
//     props.primary &&
//     css`
//       background: palevioletred;
//       color: white;
//     `};
// `

// .bookmark {
//   padding: 5px;
//   border-top: solid 1px rgba(0,0,0,0.2);
// }

// .bookmark__row {
//   display: flex;
//   justify-content: space-between;
// }

// .bookmark__description {
//   text-align: left;
//   font-size: 0.95em;
// }

const Result = styled.div`
  padding: 5px;
  border-top: solid 1px rgba(0,0,0,0.2);
`

export default function ResultItem(props) {
  return (
    <Result>{props.volumeInfo.title}</Result>
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