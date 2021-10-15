import styled from "styled-components";

export const Button=styled.button`

padding:10px 15px;
background:${({bg})=>bg ? bg : '#1b7'};
width: ${({width})=> width ? width :'100px'};
height:${({height}) => height ? height : '35px'};
border:0;
margin:${({upmargin})=> upmargin ? '5px 0' : '0 5px'};
display: flex;
justify-content: center;
border-radius:5px;
box-sizing: border-box;
text-transform: uppercase;
color:${({color})=> color ? color : '#111'};
font-weight: 600;
justify-items: center;

`