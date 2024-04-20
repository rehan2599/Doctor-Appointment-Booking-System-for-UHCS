import React, { useState } from 'react';
import { BASE_URL} from "..//../config";
import DoctorCard from './../..components/Loader/Loading';
import Error from "../../components/Error/Error";


const useFetchdata = (url) => {

    const {data:appointments, loading,error } = useFetchData('${BASE_URL}')

    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState9(null)

    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch(url, {
                headers:{Authorization : 'Bearer $ {token}'}
            })
        }


    },[])

    return (
        <div>
            {loading && !error && <Loadin />}

            {error && !error && <Error errMessage={error} /> }

            {!loading && !error && (
                <div className='grid grid-cols-1 lg-grid-cols-2 gap-5'>
                    {appointments.map(doctor => (
                        <DoctorCard doctor={doctor} key={doctor._id} />
                    ))}
                    </div>
            )}
            </div>
            )}
            </div>

            </div>
    )}

    {!loading && !error && appointments.length===0 &&
         <h2 className='mt-5 text-center text-headingColor'>You did not book any doctor yet</h2>}
};

export default MyBookings;

