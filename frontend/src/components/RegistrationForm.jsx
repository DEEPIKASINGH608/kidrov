import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) tempErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) tempErrors.email = "Please present a valid email address.";

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone) tempErrors.phone = "Phone number is required.";
    else if (!phoneRegex.test(formData.phone)) tempErrors.phone = "Phone number must be exactly 10 digits.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatusMsg(null);

    try {
      const response = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMsg({ type: 'success', text: ' Application Sent Successfully! We will contact you shortly.' });
        setFormData({ name: '', email: '', phone: '' });
      } else {
        setStatusMsg({ type: 'error', text: data.message || 'Submission failed. Please check inputs.' });
      }
    } catch (err) {
      setStatusMsg({ type: 'error', text: '⚠️ Unable to reach the server. Please verify backend is running.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4">
      <div className="bg-white text-gray-800 p-8 rounded-3xl shadow-2xl border border-indigo-800/20">
        <h3 className="text-2xl font-black text-center text-indigo-900 mb-2">Secure a Seat</h3>
        <p className="text-sm text-center text-gray-500 mb-6">Fill out your information to apply for registration.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 ring-1 ring-red-200' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="parent@example.com"
              className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 ring-1 ring-red-200' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9876543210"
              className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 ring-1 ring-red-200' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.phone}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-extrabold py-3.5 px-4 rounded-xl transition-colors duration-200 flex justify-center items-center gap-2 shadow-lg"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing Enquiry...
              </>
            ) : (
              'Submit Application'
            )}
          </button>
        </form>

        {statusMsg && (
          <div className={`mt-4 p-3 rounded-xl text-sm font-semibold text-center ${statusMsg.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {statusMsg.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;


