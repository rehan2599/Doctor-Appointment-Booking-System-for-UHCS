import React from "react" ; 
import userImg from '../../assets/images/doctor-img01.png'
import {authContext} from "./../../context/AuthContext";

import MyBookings from "./MyBookings";
import Profile from "./Profile"

import useGetProfile from '../..hooks/useFetchData'
import { BASE_URL } from "../../config";

const MyAccount = () => {
    const {dispatch} = useContext(authContext);
    const {tab, setTab} = useState("bookings");

    const {
        data: userData,
        loading,
        error,
    } = useGetProfile('${BASE_URL}/user/profile/me');

    console.log(userData, 'userdata');

    const handleLogout = () => {
        dispatch({ type : "LOGOUT"};)

    }};

    return (
        <section>
            <div className="max-w-[1170px] px-5 mx-auto">
                
                {loading && <Loading/>}

                { error && <Error/>}

                {
                    !loading && !error && (
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="pb-[50px] px-[30px] rounded-md">
                                <div className="flex items-center justify-center">
                                    <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                                        <img
                                          src={userImg}
                                          alt=""
                                    </figure>
                                </div>
                            </div>
                    )
                }


            </div>
        </section>
    )
