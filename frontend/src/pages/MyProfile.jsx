import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const updateUserProfileData = async () => {
    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append('userId', userData._id);
      formData.append('name', userData.name);
      formData.append('phone', userData.phone);
      formData.append('address', JSON.stringify(userData.address));
      formData.append('gender', userData.gender);
      formData.append('dob', userData.dob);

      if (image) {
        formData.append('image', image);
        console.log('Image being uploaded:', image.name);
      }

      // Explicitly set content type header to multipart/form-data
      const { data } = await axios.post(
        `${backendUrl}/api/user/update-profile`,
        formData,
        {
          headers: {
            token,
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      if (data.success) {
        toast.success(data.message);
        console.log('Updated profile data:', data.userData);
        setUserData(data.userData);
        setIsEdit(false);
        setImage(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('UpdateProfile Error:', error);
      toast.error(error.message || "Failed to update profile");
    } finally {
      setIsUploading(false);
    }
  };

  if (!userData) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      {/* Profile Image Section */}
      {isEdit ? (
        <label htmlFor="image">
          <div className='inline-block relative cursor-pointer'>
            <img
              className='w-36 h-36 rounded opacity-75 object-cover'
              src={image ? URL.createObjectURL(image) : userData.image || assets.upload_area}
              alt="Profile"
            />

          </div>
          <input
            onChange={(e) => e.target.files && e.target.files[0] && setImage(e.target.files[0])}
            type="file"
            accept="image/*"
            id="image"
            hidden
          />
          {/* Add helper text below image */}
          <p className="text-xs text-gray-500 mt-1">Click to change profile image</p>
        </label>
      ) : (
        <div className="relative">
          <img
            className='w-36 h-36 rounded object-cover'
            src={userData.image || assets.upload_area}
            alt="Profile"
          />
        </div>
      )}

      {/* Name Section */}
      {isEdit ? (
        <input
          className='bg-gray-50 text-3xl font-medium max-w-60 mt-4'
          type="text"
          value={userData.name}
          onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
        />
      ) : (
        <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      )}

      <hr className='bg-zinc-400 h-[1px] border-none' />

      {/* Contact details section */}
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT DETAILS</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {isEdit ? (
            <input
              className='bg-gray-100 max-w-52 p-1'
              type="text"
              value={userData.phone || ''}
              onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
            />
          ) : (
            <p className='text-blue-500'>{userData.phone || 'Not provided'}</p>
          )}
          <p className='font-medium'>Address:</p>
          {isEdit ? (
            <p>
              <input
                className='bg-gray-100 w-full mb-1 p-1'
                onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                value={userData.address?.line1 || ''}
                type="text"
                placeholder="Address line 1"
              />
              <br />
              <input
                className='bg-gray-100 w-full p-1'
                onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                value={userData.address?.line2 || ''}
                type="text"
                placeholder="Address line 2"
              />
            </p>
          ) : (
            <p className='text-gray-500'>
              {userData.address?.line1 || 'No address provided'}
              <br />
              {userData.address?.line2 || ''}
            </p>
          )}
        </div>
      </div>

      {/* Basic information section */}
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {isEdit ? (
            <select
              className='max-w-20 bg-gray-100 p-1'
              onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
              value={userData.gender || ''}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className='text-gray-500'>{userData.gender || 'Not specified'}</p>
          )}
          <p className='font-medium'>Date of Birth:</p>
          {isEdit ? (
            <input
              className='max-w-28 bg-gray-100 p-1'
              type="date"
              onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
              value={userData.dob || ''}
            />
          ) : (
            <p className='text-gray-500'>{userData.dob || 'Not specified'}</p>
          )}
        </div>
      </div>

      {/* Button section */}
      <div className='mt-5'>
        {isEdit ? (
          <button
            className='border border-blue-500 text-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all disabled:opacity-50'
            onClick={updateUserProfileData}
            disabled={isUploading}
          >
            {isUploading ? 'Saving...' : 'Save'}
          </button>
        ) : (
          <button
            className='border border-blue-500 text-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all'
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
