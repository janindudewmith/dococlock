import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import doctorModel from '../models/doctorModel.js';
import appointmentModel from '../models/appointmentModel.js';

// API to change doctor availability (for admin use)
const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;
    const doctorData = await doctorModel.findById(docId);
    if (!doctorData) {
      return res.json({ success: false, message: "Doctor not found" });
    }
    await doctorModel.findByIdAndUpdate(docId, { available: !doctorData.available });
    console.log('Availability changed for doctor:', docId); // Debug
    res.json({ success: true, message: "Availability Changed" });
  } catch (error) {
    console.log('ChangeAvailability Error:', error);
    res.json({ success: false, message: error.message });
  }
};

// API to get list of all doctors (public or admin use)
const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select(['-password', '-email']);
    console.log('Doctor list fetched:', doctors.length); // Debug
    res.json({ success: true, doctors });
  } catch (error) {
    console.log('DoctorList Error:', error);
    res.json({ success: false, message: error.message });
  }
};

// API for doctor login
const loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Doctor login attempt:', { email }); // Debug
    const doctor = await doctorModel.findOne({ email });

    if (!doctor) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (isMatch) {
      const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET);
      console.log('Doctor login successful, token:', token); // Debug
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log('LoginDoctor Error:', error);
    res.json({ success: false, message: error.message });
  }
};

// API to get doctor's appointments
const appointmentsDoctor = async (req, res) => {
  try {
    const { docId } = req.body;
    console.log('AppointmentsDoctor - DocID:', docId); // Debug
    const appointments = await appointmentModel.find({ docId });
    res.json({ success: true, appointments });
  } catch (error) {
    console.log('AppointmentsDoctor Error:', error);
    res.json({ success: false, message: error.message });
  }
};

// API to cancel doctor's appointment
const appointmentCancel = async (req, res) => {
  try {
    const { docId, appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);

    if (!appointmentData || appointmentData.docId !== docId) {
      return res.json({ success: false, message: "Unauthorized or invalid appointment" });
    }

    await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true });

    const doctorData = await doctorModel.findById(docId);
    let slots_booked = doctorData.slots_booked;
    slots_booked[appointmentData.slotDate] = slots_booked[appointmentData.slotDate].filter(
      slot => slot !== appointmentData.slotTime
    );

    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    console.log('Appointment cancelled by doctor:', appointmentId); // Debug
    res.json({ success: true, message: "Appointment Cancelled" });
  } catch (error) {
    console.log('AppointmentCancel Error:', error);
    res.json({ success: false, message: error.message });
  }
};

// API to complete doctor's appointment
const appointmentComplete = async (req, res) => {
  try {
    const { docId, appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);

    if (!appointmentData || appointmentData.docId !== docId) {
      return res.json({ success: false, message: "Unauthorized or invalid appointment" });
    }

    await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true });

    console.log('Appointment completed by doctor:', appointmentId); // Debug
    res.json({ success: true, message: "Appointment Completed" });
  } catch (error) {
    console.log('AppointmentComplete Error:', error);
    res.json({ success: false, message: error.message });
  }
};

// API to get doctor's dashboard data
const doctorDashboard = async (req, res) => {
  try {
    const { docId } = req.body;
    console.log('DoctorDashboard - DocID:', docId); // Debug
    const appointments = await appointmentModel.find({ docId });

    let earnings = 0;
    appointments.forEach(item => {
      if (item.isCompleted || item.payment) {
        earnings += item.amount;
      }
    });

    let patients = [];
    appointments.forEach(item => {
      if (!patients.includes(item.userId)) {
        patients.push(item.userId);
      }
    });

    const dashData = {
      earnings,
      appointments: appointments.length,
      patients: patients.length,
      latestAppointments: appointments.reverse().slice(0, 5)
    };

    console.log('Dashboard data sent:', dashData); // Debug
    res.json({ success: true, dashData });
  } catch (error) {
    console.log('DoctorDashboard Error:', error);
    res.json({ success: false, message: error.message });
  }
};

// API to get doctor's profile data
const doctorProfile = async (req, res) => {
  try {
    const { docId } = req.body;
    console.log('DoctorProfile - DocID:', docId); // Debug
    const profileData = await doctorModel.findById(docId).select('-password');
    if (!profileData) {
      return res.json({ success: false, message: "Doctor not found" });
    }
    res.json({ success: true, profileData });
  } catch (error) {
    console.log('DoctorProfile Error:', error);
    res.json({ success: false, message: error.message });
  }
};

// API to update doctor's profile
const updateDoctorProfile = async (req, res) => {
  try {
    const { docId, fees, address, available } = req.body;

    await doctorModel.findByIdAndUpdate(docId, { fees, address, available });

    console.log('Doctor profile updated:', docId); // Debug
    res.json({ success: true, message: "Profile Updated" });
  } catch (error) {
    console.log('UpdateDoctorProfile Error:', error);
    res.json({ success: false, message: error.message });
  }
};

export {
  changeAvailability,
  doctorList,
  loginDoctor,
  appointmentsDoctor,
  appointmentCancel,
  appointmentComplete,
  doctorDashboard,
  doctorProfile,
  updateDoctorProfile
};