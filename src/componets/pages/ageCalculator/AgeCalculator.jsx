/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

const AgeCalculator = () => {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(null);

    const calculateAge = () => {
        if (birthdate) {
            const today = new Date();
            const birthDate = new Date(birthdate);
            const ageInMilliseconds = today - birthDate;

            // Calculate age in years
            const ageInYears = new Date(ageInMilliseconds).getFullYear() - 1970;
            setAge(ageInYears);
        } else {
            // Handle invalid input or show an error message
            alert('Please enter a valid birthdate in the format YYYY-MM-DD');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Calculate Your Baby's Age</h2>
            <label className="block mb-4">
                Enter Birthdate (YYYY-MM-DD):
                <input
                    type="text"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </label>
            <button
                onClick={calculateAge}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
                Calculate Age
            </button>

            {age !== null && (
                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Result:</h3>
                    <p className="mt-2">The age is {age} years.</p>
                </div>
            )}
        </div>
    );
};

export default AgeCalculator;
