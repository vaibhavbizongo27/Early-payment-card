import React, { useState } from 'react';
import styled from 'styled-components';
import MainComponent from './MainComponent'




const OuterBox = styled.div`
`;
const Heading = styled.div`
left:400px;
top: 90px;
position: relative;
color: #9747FF;
font-size:12px;
`;

const InnerBox = styled.div`
box-sizing: border-box;
position: relative;
width: 803px;
height: 420px;
left: 400px;
top: 98px;
border: 1px dashed #9747FF;
border-radius: 5px;`;

const EarlyPaymentCard = () => {

    const [checked, setChecked] = useState([]);
    // const [checkedState, setcheckedState] = useState([]);

    const [isCheckAll, setIsCheckAll] = useState(false);
    // const [isUnCheckAll, setIsUnCheckAll] = useState(false);
    // const [isCheck, setIsCheck] = useState([]);

    // const handleChecked = (event) => {
    //     let newCheckedState = [...checkedState];
    //     newCheckedState = newCheckedState.map((item) => (
    //         event.target.checked ? true : false
    //     ));
    // };


    // const handleAllSelect = () => {

    // }
    const information = [
        { id: "BZ/INV/018897/1000", amount: 90000000, date: new Date(23, 3, 2), name: "Sanjeev Mulchand Dogra", finance: "Axis Bank" },
        { id: "BZ/INV/018897/1001", amount: 90000000, date: new Date(23, 3, 2), name: "Sanjeev Mulchand Dogra", finance: "Axis Bank" },
        { id: "BZ/INV/018897/1002", amount: 90000000, date: new Date(23, 3, 2), name: "Sanjeev Mulchand Dogra", finance: "Bizongo" },
        { id: "BZ/INV/018897/1003", amount: 90000000, date: new Date(23, 3, 2), name: "Sanjeev Mulchand Dogra", finance: "Bizongo" },
    ];

    const handleSelectAll = () => {
        setIsCheckAll(!isCheckAll);

        //making uncheckall button false


        let checkbox = document.querySelectorAll('.checkbox');
        // console.log(checkbox[0].checked);


        setChecked(information.map((info) => info));

        if (isCheckAll) {
            setChecked([]);
            for (let i = 0; i < checkbox.length; i++) {
                checkbox[i].checked = false;
            }
        }
        else {
            for (let i = 0; i < checkbox.length; i++) {
                checkbox[i].checked = true;
            }
        }
    };


    // const handleUnSelectAll = (event) => {

    //     setIsUnCheckAll(!isUnCheckAll);

    //     let btn = document.getElementById('selectall')
    //     btn.checked = false;

    //     let checkbox = document.querySelectorAll('.checkbox');


    //     setChecked(information.map((info) => info));

    //     if (isUnCheckAll) {
    //         // for (let i = 0; i < checkbox.length; i++) {
    //         //     checkbox[i].checked = false;
    //         // }

    //     }
    //     else {

    //         setChecked([]);
    //         for (let i = 0; i < checkbox.length; i++) {
    //             checkbox[i].checked = false;
    //         }
    //     }

    // };

    console.log(checked);
    return (
        <OuterBox>
            <Heading>Early Payment Card</Heading>

            <label>
                <input
                    type="checkbox"
                    id="selectall"
                    onChange={handleSelectAll}

                />
                checkall
            </label>

            {/* <label>
                <input
                    type="checkbox"
                    id="unselectall"
                    onChange={handleUnSelectAll} />
                uncheckAll
            </label> */}


            <InnerBox>
                {
                    information.map((info) => (


                        <MainComponent
                            key={info.id}
                            // id={info.id}
                            // amount={info.amount}
                            // date={info.date}
                            // name={info.name}
                            // finance={info.finance}
                            info={info}
                            checked={checked}
                            setChecked={setChecked}

                        />
                    ))
                }

                {/* <MainComponent
                    id={information[0].id}
                    amount={information[0].amount}
                    date={information[0].date}
                    name={information[0].name}
                    finance={information[0].finance}
                />
                <MainComponent
                    id={information[1].id}
                    amount={information[1].amount}
                    date={information[1].date}
                    name={information[1].name}
                    finance={information[1].finance}
                />
                <MainComponent
                    id={information[2].id}
                    amount={information[2].amount}
                    date={information[2].date}
                    name={information[2].name}
                    finance={information[2].finance}
                />
                <MainComponent
                    id={information[3].id}
                    amount={information[3].amount}
                    date={information[3].date}
                    name={information[3].name}
                    finance={information[3].finance}
                /> */}





            </InnerBox>
        </OuterBox>
    )
}

export default EarlyPaymentCard
