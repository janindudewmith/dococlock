import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v2 as cloudinary } from 'cloudinary';
import doctorModel from '../models/doctorModel.js';
import appointmentModel from '../models/appointmentModel.js';
import userModel from '../models/userModel.js';

// API to register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Details Missing" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid email" });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Enter a strong password" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = { name, email, password: hashedPassword };
    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    console.log('Register successful, token:', token);
    res.json({ success: true, token });
  } catch (error) {
    console.error('Register Error:', error);
    res.json({ success: false, message: error.message });
  }
};

// API for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt:', { email });
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      console.log('Login successful, token:', token);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error('Login Error:', error);
    res.json({ success: false, message: error.message });
  }
};

// API to get user profile data
const getProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log('GetProfile - UserID:', userId);
    const userData = await userModel.findById(userId).select('-password');

    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    console.log('Profile sent:', userData);
    res.json({ success: true, userData });
  } catch (error) {
    console.error('GetProfile Error:', error);
    res.json({ success: false, message: error.message });
  }
};

// API to update user profile
const updateProfile = async (req, res) => {
  try {
    const { userId, name, phone, address, dob, gender } = req.body;
    const imageFile = req.files?.image;

    if (!userId || !name || !phone || !dob || !gender) {
      return res.json({ success: false, message: "Data Missing" });
    }

    const updateData = { name, phone, address: JSON.parse(address), dob, gender };
    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
      updateData.image = imageUpload.secure_url;
    }

    await userModel.findByIdAndUpdate(userId, updateData);
    const updatedUser = await userModel.findById(userId).select('-password');

    console.log('Profile updated for user:', userId);
    res.json({ success: true, message: "Profile Updated", userData: updatedUser });
  } catch (error) {
    console.error('UpdateProfile Error:', error);
    res.json({ success: false, message: error.message });
  }
};

// API to book appointment
const bookAppointment = async (req, res) => {
  try {
    const { userId, docId, slotDate, slotTime } = req.body;

    const docData = await doctorModel.findById(docId).select('-password');
    if (!docData.available) {
      return res.json({ success: false, message: "Doctor not available" });
    }

    let slots_booked = docData.slots_booked || {};
    if (slots_booked[slotDate]?.includes(slotTime)) {
      return res.json({ success: false, message: "Slot not available" });
    } else {
      slots_booked[slotDate] = slots_booked[slotDate] || [];
      slots_booked[slotDate].push(slotTime);
    }

    const userData = await userModel.findById(userId).select('-password');
    delete docData.slots_booked;

    const appointmentData = {
      userId,
      docId,
      userData,
      docData,
      amount: docData.fees,
      slotTime,
      slotDate,
      date: Date.now()
    };

    const newAppointment = new appointmentModel(appointmentData);
    await newAppointment.save();

    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    console.log('Appointment booked:', appointmentData);
    res.json({ success: true, message: "Appointment Booked" });
  } catch (error) {
    console.error('BookAppointment Error:', error);
    res.json({ success: false, message: error.message });
  }
};

// API to get user's appointments list
const listAppointments = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log('ListAppointments - UserID:', userId);
    const appointments = await appointmentModel.find({ userId }); // Fixed from findByIdAndUpdate to find
    res.json({ success: true, appointments });
  } catch (error) {
    console.error('ListAppointments Error:', error);
    res.json({ success: false, message: error.message });
  }
};

// API to cancel user's appointment
const cancelAppointment = async (req, res) => {
  try {
    const { userId, appointmentId } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId);
    if (!appointmentData || appointmentData.userId !== userId) {
      return res.json({ success: false, message: "Unauthorized Action" });
    }

    await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true });

    const { docId, slotDate, slotTime } = appointmentData;
    const doctorData = await doctorModel.findById(docId);

    let slots_booked = doctorData.slots_booked;
    slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime);

    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    console.log('Appointment cancelled:', appointmentId);
    res.json({ success: true, message: "Appointment Cancelled" });
  } catch (error) {
    console.error('CancelAppointment Error:', error);
    res.json({ success: false, message: error.message });
  }
};

export { registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointments, cancelAppointment };