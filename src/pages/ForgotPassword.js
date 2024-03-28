import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const [otp, setOTP] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [timer, setTimer] = useState(null); // State to hold the timer
    const [countdown, setCountdown] = useState(60); // State to hold the countdown value
    const [passwordValidationMessage, setPasswordValidationMessage] = useState('');

    const sendOTP = async () => {
        try {
            const response = await axios.post('http://localhost:9000/forgotpassword', { email });
            setMessage(response.data);
            // Start the timer for 1 minute
            setTimer(setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 2000)); // Update countdown every second
        } catch (error) {
            console.error('Error sending OTP:', error);
            setMessage('Error sending OTP');
        }
    };

    const resetPassword = async () => {
        try {
            const response = await axios.post('http://localhost:9000/resetpassword', { email, otp, newPassword });
            setMessage(response.data);
            navigate("/login")
        } catch (error) {
            console.error('Error resetting password:', error);
            setMessage('Error resetting password');
        }
    };

    const handleConfirmPasswordChange = (e) => {
        const { value } = e.target;
        setConfirmNewPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmNewPassword) {
            setMessage('Passwords do not match');
        } else {
            resetPassword();
        }
    };

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setNewPassword(value);
        if (value.length < 8) {
            setPasswordValidationMessage('Password must be at least 8 characters');
        } else if (value.length > 20) {
            setPasswordValidationMessage('Password must be at most 20 characters');
        } else {
            setPasswordValidationMessage('');
        }
    };

    useEffect(() => {
        // Clear the timer when component unmounts
        return () => {
            clearInterval(timer);
        };
    }, [timer]);

    useEffect(() => {
        // Clear the countdown when it reaches 0
        if (countdown === 0) {
            clearInterval(timer);
            setTimer(null);
            setCountdown(120); // Reset countdown to 60 seconds
        }
    }, [countdown, timer]);

    return (
        <div className="mx-auto max-w-lg p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
                    <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <button type="button" onClick={sendOTP} className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${timer ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={timer}>Send OTP</button>
                    {timer && <span className="text-sm text-gray-500 ml-2">({countdown} sec)</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">Enter OTP:</label>
                    <input type="text" value={otp} name="otp" onChange={(e) => setOTP(e.target.value)} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">New Password:</label>
                    <input type="password" value={newPassword} name="newPassword" onChange={handlePasswordChange} className="w-full p-2 border rounded" required />
                    {passwordValidationMessage && <p className="text-red-500 text-sm">{passwordValidationMessage}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmNewPassword">Confirm New Password:</label>
                    <input type="password" value={confirmNewPassword} name="confirmNewPassword" onChange={handleConfirmPasswordChange} className="w-full p-2 border rounded" required />
                    {passwordValidationMessage && <p className="text-red-500 text-sm">{passwordValidationMessage}</p>}
                </div>
                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Reset Password</button>
            </form>
            {message && <p className="text-red-500 mt-4">{message}</p>}
        </div>
    );
}

export default ForgotPassword;
