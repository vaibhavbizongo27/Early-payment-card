import React, { useState } from 'react';
import styled from 'styled-components';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { CheckBox } from '@mui/icons-material';


const MainBox = styled.div`
   display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  
  margin: 20px 20px;
  width: 763px;
  height: 80px;

  box-sizing: border-box;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #DFE4EC;
   
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const LeftContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 16px;
width: 358px;
height: 46px;
flex: none;
order: 0;
flex-grow: 0;`;


const RightContainer = styled.div``;

const LeftContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;
width: 277px;
height: 46px;
flex: none;
order: 1;
flex-grow:0`;

const PaymentID = styled.div`

width: 180px;
height: 22px;
flex: none;
order: 0;
flex-grow: 0;
font-family: 'Nunito';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 22px;
color: #343B48;`;


const LeftBottomContainer = styled.div`
display:flex;`;

const PaymentDate = styled.div`
width: 117px;
height: 20px;
font-family: 'Nunito';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
color: #6B798E;
flex: none;
order: 1;
flex-grow: 0;`;

const PaymentName = styled.div`
width: 156px;
height: 20px;
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 20px;
color: #6B798E;
flex: none;
order: 2;
flex-grow: 0;`;

const RightContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
padding: 0px;
gap: 4px;
width: 127px;
height: 48px;
flex: none;
order: 1;
flex-grow: 0;`;

const Amount = styled.div`
width: 90px;
height: 22px;
font-family: 'Nunito';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 22px;
color: #343B48;
flex: none;
order: 0;
flex-grow: 0;`;

const RightBottomContainer = styled.div`
display: flex;
`;

const Finance = styled.div`
width: 122px;
height: 20px;
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 20px;
color: #969FAE;
flex: none;
order: 1;
flex-grow: 0;`;






const MainComponent = (props) => {

    /* const [checked, setChecked] = useState([]); */
    const info = props.info;

    const handleCheck = (event) => {

        // let updatedList = [];

        /* console.log(event.target.checked); */


        if (event.target.checked) {
            /* console.log(props.info); */
            /* updatedList = [...checked, event.target.value]; */
            /* updatedList = [...props.checked, Object.values(props.info)];
             */
            /* updatedList = [...props.checked, props.info]; */
            props.setChecked(checked => ([...checked, props.info]));
            /* console.log(updatedList); */
        }
        else {
            /* console.log(props.checked.indexOf(props.id)); */
            /* updatedList.splice(props.checked.indexOf(props), 1); */
            /* console.log((props.checked).indexOf(props.info)); */
            /* props.setChecked(checked=>(checked.splice(index,1))); */
            const index = props.checked.findIndex(check => (check.id === props.info.id));
            /* props.setChecked(checked => {
                checked.splice(index, 1)
                return [...checked]
            }) */
            props.checked.splice(index, 1);
            props.setChecked([...props.checked]);
            // updatedList = props.checked.splice((props.checked).indexOf(index), 1);
            /* props.setChecked(updatedList); */
            /* console.log(props.checked, index); */
            /* updatedList = props.checked.filter(val => val !== props); */
            /* console.log(props.checked.filter(val => val !== props)); */
            /* console.log("unchecked"); */
        }
        /* console.log(props.checked); */
        /* props.setChecked(updatedList); */
        /* console.log(props.checked); */
    }


    /* console.log(props.checked); */



    const month = info.date.toLocaleString("en-US", { month: "long" });
    const year = info.date.toLocaleString("en-US", { year: "2-digit" });
    const day = info.date.toLocaleString("en-US", { day: "2-digit" });
    return (

        <MainBox className='MainBox'>


            <LeftContainer id='container'>

                <label>
                    <input value={info.id} type="checkbox" id="checkbox" onChange={handleCheck} className="checkbox" />
                </label>


                <LeftContent>
                    <PaymentID>{info.id}</PaymentID>

                    <LeftBottomContainer>
                        <PaymentDate>Due on {day} {month}'{year}</PaymentDate>
                        <PaymentName>{info.name}</PaymentName>
                    </LeftBottomContainer>

                </LeftContent>

            </LeftContainer>

            <RightContainer id='container'>

                <RightContent>
                    <Amount>{(info.amount).toLocaleString('en-IN')}</Amount>

                    <RightBottomContainer>
                        <AccountBalanceIcon />
                        <Finance>Financed by {info.finance}</Finance>
                    </RightBottomContainer>
                </RightContent>
            </RightContainer>



        </MainBox>
    )
}

export default MainComponent
