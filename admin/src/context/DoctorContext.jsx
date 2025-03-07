import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [dToken, setDToken] = useState(localStorage.getItem('dToken') || '');
  const [appointments, setAppointments] = useState([]);
  const [dashData, setDashData] = useState(false);
  const [profileData, setProfileData] = useState(false);
  const [loading, setLoading] = useState(false);

  const getAppointments = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${backendUrl}/api/doctor/appointments`, { headers: { dToken } });
      console.log('Appointments API Response:', data); // Debug response
      if (data.success) {
        setAppointments(data.appointments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const completeAppointment = async (appointmentId) => {
    try {
      setLoading(true);
      const { data } = await axios.post(`${backendUrl}/api/doctor/complete-appointment`, { appointmentId }, { headers: { dToken } });
      if (data.success) {
        toast.success(data.message);
        getAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      setLoading(true);
      const { data } = await axios.post(`${backendUrl}/api/doctor/cancel-appointment`, { appointmentId }, { headers: { dToken } });
      if (data.success) {
        toast.success(data.message);
        getAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getDashData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${backendUrl}/api/doctor/dashboard`, { headers: { dToken } });
      console.log('Dashboard API Response:', data); // Debug response
      if (data.success) {
        setDashData(data.dashData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getProfileData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${backendUrl}/api/doctor/profile`, { headers: { dToken } });
      if (data.success) {
        setProfileData(data.profileData);
        console.log('Profile Data:', data.profileData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    dToken, setDToken,
    backendUrl,
    appointments, setAppointments,
    getAppointments,
    completeAppointment, cancelAppointment,
    dashData, setDashData, getDashData,
    profileData, setProfileData,
    getProfileData,
    loading,
  };

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvider;