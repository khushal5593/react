import React, { useState } from 'react';

const Form = () => {
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        password: "",
    });

    const [showData, setShowData] = useState({});
    const [errorData, setErrorData] = useState({});

    function handleSubmit(event) {
        event.preventDefault();
        if (validation()) {
            setShowData(userData);
            setUserData({ userName: "", email: "", password: "" });
            setErrorData({}); 
        }
    }

    function validation() {
        let valid = true;
        let errorObject = { userName: "", email: "", password: "" };
    
        if (userData.userName.trim() === "") {
            errorObject.userName = "User Name Not Found";
            valid = false;
        }
        if (userData.email.trim() === "") {
            errorObject.email = "Email Not Found";
            valid = false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(userData.email)) {
                errorObject.email = "Invalid Email Format";
                valid = false;
            }
        }
        if (userData.password.trim() === "") {
            errorObject.password = "Password Not Found";
            valid = false;
        }
    
        setErrorData(errorObject); 
        return valid;
    }
    
    return (
        <div className="border border-gray-300 shadow-lg p-8 max-w-md mx-auto mt-16 bg-white rounded-lg">
            <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Sign Up</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">User Name</label>
                    <input
                        id="username"
                        onChange={(event) => setUserData({ ...userData, userName: event.target.value })}
                        value={userData.userName}
                        placeholder="Your Name"
                        type="text"
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errorData.userName && <p className="text-red-500 text-xs mt-1">{errorData.userName}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        onChange={(event) => setUserData({ ...userData, email: event.target.value })}
                        value={userData.email}
                        placeholder="Your Email"
                        type="email"
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errorData.email && <p className="text-red-500 text-xs mt-1">{errorData.email}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="password"
                        onChange={(event) => setUserData({ ...userData, password: event.target.value })}
                        value={userData.password}
                        placeholder="Your Password"
                        type="password"
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errorData.password && <p className="text-red-500 text-xs mt-1">{errorData.password}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Register
                </button>
            </form>

            {showData.userName && (
                <div className="mt-8 bg-gray-50 p-4 rounded-lg shadow-inner">
                    <h2 className="text-xl font-semibold text-gray-800">Submitted Data</h2>
                    <p><strong>Username:</strong> {showData.userName}</p>
                    <p><strong>Email:</strong> {showData.email}</p>
                    <p><strong>Password:</strong> {showData.password}</p>
                </div>
            )}
        </div>
    );
};

export default Form;
