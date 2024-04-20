import React from "react";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from "./../../components/Doctors/DoctorCard";
import Loading from "../../components/Loader/Loading"; // Import the Loading component
import { Error } from "../../components/Error/Error";

const MyBookings = () => {
  const {
    data: appointments,
    loading, // This loading is coming from the useFetchData hook, not from the Loading component
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);
  
  return (
    <div>
        {loading && !error && <Loading />} {/* Render Loading component when loading is true */}
        
        {error && !loading && <Error errMessage={error} />} {/* Render Error component when error occurs */}
        
        {!loading && !error && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {appointments.map(doctor => (
                    <DoctorCard doctor={doctor} key={doctor._id} /> // Make sure to return DoctorCard component
                ))}
            </div>
        )}
        
        {!error && !loading && appointments.length === 0 && (
            <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">
                You did not book any doctor yet!
            </h2>
        )}
    </div>
  );
};

export default MyBookings;
