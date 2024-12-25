import React, { useState, useId } from 'react';
import emailjs from 'emailjs-com';
import './Schedule.css';

function Schedule() {
  const id = useId();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    callDuration: '',
    callType: '',
    additionalInfo: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    const today = new Date().toISOString().split('T')[0];

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Valid email is required';
    if (!formData.date || formData.date < today)
      newErrors.date = 'Preferred call date cannot be in the past';
    if (!formData.callDuration)
      newErrors.callDuration = 'Please select a call duration';
    if (!formData.callType) newErrors.callType = 'Please select a call type';
    if (formData.callType === 'Other' && !formData.additionalInfo)
      newErrors.additionalInfo = 'Please specify the call type';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSuccessMessage(''); 
    setErrorMessage(''); 

    emailjs
      .send(
        'service_uw52dn4',
        'template_jyy292d',
        formData,
        'Q7uMd2R2F_2NwkW7u'
      )
      .then(
        () => {
          setSuccessMessage(
            'Call scheduled successfully! Check your email for details.'
          );
          setFormData({
            name: '',
            email: '',
            date: '',
            callDuration: '',
            callType: '',
            additionalInfo: '',
            notes: '',
          });
        },
        () => {
          setErrorMessage(
            'There was an issue scheduling the call. Please try again later.'
          );
        }
      );
  };

  return (
    <div className="schedule">
      <h1>Schedule a Call</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={`${id}-name`}>Your Name:</label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            value={formData.name}
            onInput={handleInputChange}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor={`${id}-email`}>Your Email:</label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            value={formData.email}
            onInput={handleInputChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label htmlFor={`${id}-date`}>Preferred Call Date:</label>
          <input
            id={`${id}-date`}
            name="date"
            type="date"
            value={formData.date}
            onInput={handleInputChange}
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>

        <div>
          <label htmlFor={`${id}-duration`}>Call Duration (minutes):</label>
          <select
            id={`${id}-duration`}
            name="callDuration"
            value={formData.callDuration}
            onChange={handleInputChange}
          >
            <option value="">Select duration</option>
            {[10, 20, 30, 40, 50, 60].map((duration) => (
              <option key={duration} value={duration}>
                {duration} minutes
              </option>
            ))}
          </select>
          {errors.callDuration && <span className="error">{errors.callDuration}</span>}
        </div>

        <div>
          <label htmlFor={`${id}-type`}>Call Type:</label>
          <select
            id={`${id}-type`}
            name="callType"
            value={formData.callType}
            onChange={handleInputChange}
          >
            <option value="">Select call type</option>
            <option value="Zoom">Zoom</option>
            <option value="Skype">Skype</option>
            <option value="Phone">Phone</option>
            <option value="Other">Other</option>
          </select>
          {errors.callType && <span className="error">{errors.callType}</span>}
        </div>

        {formData.callType === 'Other' && (
          <div>
            <label htmlFor={`${id}-additionalInfo`}>Specify Call Type:</label>
            <input
              id={`${id}-additionalInfo`}
              name="additionalInfo"
              type="text"
              value={formData.additionalInfo}
              onInput={handleInputChange}
              placeholder="Enter other call type"
            />
            {errors.additionalInfo && <span className="error">{errors.additionalInfo}</span>}
          </div>
        )}

        <div>
          <label htmlFor={`${id}-notes`}>Notes/Special Instructions:</label>
          <textarea
            id={`${id}-notes`}
            name="notes"
            value={formData.notes}
            onInput={handleInputChange}
            placeholder="Enter any special instructions"
          />
        </div>

        <button type="submit">Schedule Call</button>
      </form>

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default Schedule;
