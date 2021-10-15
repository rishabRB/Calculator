import {React,useState} from 'react'
import styled from 'styled-components'
import { Button } from '../component/Button/button'


//styled components


const ContainerSection=styled.div`

  width: 100%;
  height:100%;
  background: #010606;
   
  @media screen and (max-width:468px){
   box-sizing: border-box;
   padding: 40px;
 
}

`

const ContainerWrapper=styled.div`
 width:100%;
 height: 100%;
 display: flex;
 justify-content: center;
`

const CalculatorWrapper=styled.div`
width:500px;
height:500px;
background: #111;
position:absolute;
top:80px;
border-radius: 20px;
display: flex;
flex-direction: column;

@media screen and (max-width:468px){
  width:350px;
  height:500px;
  
}

`
const ExpressionWrapper=styled.div`
outline: none;
background: transparent;
width:100%;
height:150px;
color: #fff;
border-radius:20px;
font-size: 20px;
box-sizing:border-box;
padding:13px 5px 0 10px;

`

const InputContainer=styled.div`
  width: 100%;
  height: 100%;
  margin: 5px
`

const ExpressionContianer=styled.input`
background:#010606;
outline:none;
border-radius: 20px;
border: 0;
color: #fff;
width:98%;
height:150px;
font-size:18px;
resize: none;
overflow: hidden;
box-sizing: border-box;
padding: 20px;

@media screen and (max-width:468px){
  width: 96%;
  height: 100%;
  
}

`

const AnswerContainer=styled.div`
  
 height:30px;
 display: flex;
 padding: 5px;
 margin: 30px 15px;
 box-sizing: border-box;
 justify-content: flex-end;
`


const OperationWrapper=styled.div`
   width: 98%;
   height:250px;
   margin: 8px;
   position: absolute;
   bottom: 10px;
   display: flex;
   flex-direction: column;
`

const OperatorContainer=styled.div`
display: flex;
flex-direction:${({direction})=> direction ? direction : 'row'};
box-sizing: border-box;
padding: 0 10px;
`
const NumberContainer=styled.div`
display: flex;
height: 100%;
width: 100%;
box-sizing: border-box;
padding: 10px;
flex-direction: row;
`
const NumberSection=styled.div`
width:85%;
display: flex;
flex-direction: column;

@media screen and (max-width:468px){
  width:80%;
}

`

const NumberWrapper=styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin: 5px 0;
`




const Home = () => {


  //All operation function 

   const [expression,setExpression]=useState("")
   const [answer,setAnswer]=useState("0")

  
   const handleExpression=(e)=>{
        document.activeElement.blur();
        setExpression(e.target.value)
        
    }


     const clearExpression=()=>{
       setExpression("")
       setAnswer("0")
     };

    const addseven=()=>{
       setExpression(prev=>prev+"7")
    }

    const addEight=()=>{
       setExpression(prev=>prev+"8")
    }

        const addNine=()=>{
       setExpression(prev=>prev+"9")
    }

    const addfour=()=>{
       setExpression(prev=>prev+"4")
    }

    const addFive=()=>{
       setExpression(prev=>prev+"5")
    }

        const addSix=()=>{
       setExpression(prev=>prev+"6")
    }

    const addOne=()=>{
       setExpression(prev=>prev+"1")
    }

    const addTwo=()=>{
       setExpression(prev=>prev+"2")
    }

        const addThree=()=>{
       setExpression(prev=>prev+"3")
    }

    const addZero=()=>{
       setExpression(prev=>prev+"0")
    }

  const addAddSymbol=()=>{
    setExpression(prev=>prev+"+")
  } 
    
    const addSubSymbol=()=>{
       setExpression(prev=>prev+"-")
    
    }
    
    const addMultiSymbol=()=>{
       setExpression(prev=>prev+"*")
    }
    
    const addDivSymbol=()=>{
       setExpression(prev=>prev+"/")
    }


      const calculateAnswer=()=>{
       var answer=eval(expression)
       setAnswer(answer)
       setExpression(answer)
     
    }


    const remove=()=>{
        setExpression(prev=>prev.slice(0,prev.length-1))
     }
     

    return (
        <>
         <ContainerSection>
             <ContainerWrapper>
                <CalculatorWrapper>
                     <ExpressionWrapper>
                         <InputContainer>
                          <ExpressionContianer value={expression} onChange={handleExpression}  autoFocus={true} type='text' placeholder="0"  />
                          </InputContainer>
                          <AnswerContainer>{answer}</AnswerContainer>
                     </ExpressionWrapper>
                     <OperationWrapper>
                     <OperatorContainer >
                     <Button  width="250px" onClick={clearExpression}>clear</Button>
                     <Button  width="60px" onClick={addDivSymbol}>/</Button>
                     <Button  width="60px" onClick={addMultiSymbol}>*</Button>
                     <Button  width="60px" onClick={remove}>erase</Button>
                     </OperatorContainer>
                     <NumberContainer>
                       <NumberSection>
                           <NumberWrapper>
                           <Button  width="125px" onClick={addseven}>7</Button> 
                           <Button  width="125px" onClick={addEight} >8</Button> 
                           <Button  width="125px" onClick={addNine} >9</Button> 
                           </NumberWrapper>
                           <NumberWrapper>
                           <Button  width="125px" onClick={addfour} >4</Button> 
                           <Button  width="125px" onClick={addFive} >5</Button> 
                           <Button  width="125px" onClick={addSix} >6</Button> 
                           </NumberWrapper>
                           <NumberWrapper>
                           <Button  width="125px" onClick={addThree} >3</Button> 
                           <Button  width="125px" onClick={addTwo} >2</Button> 
                           <Button  width="125px" onClick={addOne} >1</Button> 
                           </NumberWrapper>
                           <NumberWrapper>
                           <Button  width="190px" onClick={addZero}>0</Button> 
                           <Button  width="190px" bg="#ff9933" onClick={calculateAnswer}>=</Button>
                           </NumberWrapper>
                       </NumberSection>
                       <OperatorContainer direction="column">
                        <Button bg="#1b7" width="50px" height="80px" upmargin={true} onClick={addSubSymbol} >-</Button>
                        <Button bg="#1b7" width="50px" height="80px" upmargin={true} onClick={addAddSymbol}>+</Button> 
                       </OperatorContainer>
                     </NumberContainer>  
                     </OperationWrapper>
                </CalculatorWrapper>
             </ContainerWrapper>
         </ContainerSection>   
        </>
    )
}

export default Home
