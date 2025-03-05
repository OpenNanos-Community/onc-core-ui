import React, { useState } from 'react';
import Events from '@/Events';

const CharacterCreator: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here

    Events.Call('ONC::CreateCharacter', firstName, lastName, dob);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return null;
  }

  return (
    <div className="bg-app-bg text-app-text p-6 rounded-lg w-full max-w-md mx-auto mt-10">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName" className="block mb-2">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full p-2 border border-app-text rounded bg-app-bg text-app-text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="block mb-2">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="w-full p-2 border border-app-text rounded bg-app-bg text-app-text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob" className="block mb-2">Date of Birth</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
            className="w-full p-2 border border-app-text rounded bg-app-bg text-app-text scheme-dark"
          />
        </div>
        <button type="submit" className="w-full p-2 bg-app-text rounded hover:bg-white hover:cursor-pointer text-app-bg">Create Character</button>
      </form>
    </div>
  );
};

export default CharacterCreator;