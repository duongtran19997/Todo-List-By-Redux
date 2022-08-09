import React from "react";
import {useDispatch, useSelector} from "react-redux";
import HobbyList from "../components/Home/HobbyList/index"
import casual from "casual";
import {addNewHobby} from "../actions/hobby";


function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list)
    const dispatch = useDispatch();

    const addHobbyCLick = () =>{
        //random hobby object
        const newHobby ={
            id:casual.uuid,
            title:casual.title
        }
        const action = addNewHobby(newHobby)
        dispatch(action)
    }
    return(
        <div>
            <h1>Redux</h1>
            <button onClick={addHobbyCLick}>Add Hobby</button>

            <HobbyList hobbyList={
                hobbyList
            }/>
        </div>
    )
}
export default HomePage