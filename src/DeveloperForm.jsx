import React, { useEffect, useState } from 'react'

const DeveloperForm = () => {

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    role: "",
    years: "",
    skills: [],
    agreeTerms: false,
    notifications: false
  })

  const devSkills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Java', 'UI Design', 'API Integration'];

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    
    if (name === 'fullname') {
      if (!value.trim()) {
        error = "Full name is required";
      } else if (!/^[a-zA-Z\s]{2,30}$/.test(value)) {
        error = "Please enter a valid name (2-30 characters, letters only)";
      }
    }
    
    if (name === 'email') {
      if (!value) {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid email address";
      }
    }
    
    if (name === 'role') {
      if (!value) {
        error = "Please select a role";
      }
    }
    
    if (name === 'years') {
      if (!value) {
        error = "Experience is required";
      } else if (isNaN(value) || value < 0 || value > 50) {
        error = "Please enter valid years of experience (0-50)";
      }
    }
    
    if (name === 'skills') {
      if (!value || value.length === 0) {
        error = "Please select at least one skill";
      }
    }
    
    if (name === 'agreeTerms') {
      if (!value) {
        error = "You must agree to the terms";
      }
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Show validation immediately when user types/changes value
    const error = validateField(name, newValue);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSkillChange = (skill) => {
    const newSkills = formData.skills.includes(skill)
      ? formData.skills.filter(s => s !== skill)
      : [...formData.skills, skill];
    
    setFormData(prev => ({
      ...prev,
      skills: newSkills
    }));

    // Validate skills immediately
    const error = validateField('skills', newSkills);
    setErrors(prev => ({
      ...prev,
      skills: error
    }));
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const formErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        formErrors[key] = error;
      }
    });

    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Handle successful submission
    } else {
      setErrors(formErrors);
    }
  };


  return (
    <div className='min-h-screen bg-gray-200 px-4 py-8'>
        <form className='max-w-84 mx-auto shadow-md bg-white p-6 rounded-xl space-y-4'>
            <h2 className='font-bold text-center'>Developer Application Form</h2>
            <label htmlFor="fullname" className='text-xs text-gray-700 font-semibold'>Full Name</label><br/>
            <input 
                type="text" 
                name="fullname" 
                id="fullname"
                className='border border-gray-400 rounded w-full text-xs py-1 px-2' 
                value={formData.fullname}
                onChange={handleChange}
            /><br/>
            {
              errors.fullname && <p className='text-xs text-red-700 font-semibold'>{errors.fullname}</p>
            }
            <label htmlFor="email" className='text-xs text-gray-700 font-semibold'>Email</label><br/>
            <input 
                type="email" 
                name="email"
                id="email" 
                className='border border-gray-400 rounded w-full text-xs py-1 px-2' 
                value={formData.email}
                onChange={handleChange}
            /><br/>
            {
              errors.email && <p className='text-xs text-red-700 font-semibold'>{errors.email}</p>
            }
            <label htmlFor="role" className='text-xs text-gray-700 font-semibold'>Role</label><br/>
            <select 
              name="role" 
              id="role"
              className='border border-gray-400 rounded w-full text-xs py-1 px-2'
              value={formData.role}
              onChange={handleChange}
            >
              <option>Select a role</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="Fullstack">Fullstack Developer</option>
              <option value="ui/ux">UI/UX Designer</option>
              <option value="productManager">Product Manager</option>
            </select><br/>
            {
              errors.role && <p className='text-xs text-red-700 font-semibold'>{errors.role}</p>
            }
             <label htmlFor="years" className='text-xs text-gray-700 font-semibold'>Years of Experience</label><br/>
            <input 
                type="number" 
                name="years"
                id="years" 
                min={0}
                className='border border-gray-400 rounded w-full text-xs py-1 px-2' 
                value={formData.years}
                onChange={handleChange}
            /><br/>
            {
              errors.years && <p className='text-xs text-red-700 font-semibold'>{errors.years}</p>
            }
             <label htmlFor="skills" className='text-xs text-gray-700 font-semibold'>Skills</label><br/>
             {/* skills */}
             <div className='grid grid-cols-2 py-1 gap-2'>
              {
                devSkills.map((skill)=>(
                  <div className='flex items-center gap-2' key={skill}>
                  <input 
                      type="checkbox" 
                      checked={formData.skills.includes(skill)}
                      onChange={() => handleSkillChange(skill)} 
                      className='border border-gray-400 rounded'
                  />
                  <label className='text-xs text-gray-700'>{skill}</label>
                </div>
                ))
              }
             </div>
             {
              errors.skills && <p className='text-xs text-red-700 font-semibold'>{errors.skills}</p>
            }
              <div className='flex items-center gap-2'>
                <input 
                    type="checkbox" 
                    name="agreeTerms"
                    id="agree" 
                    className='border border-gray-400 rounded' 
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                />
                <label className='text-xs text-gray-700'>I agree to the terms and conditions.</label>
              </div>
              {
              errors.agreeTerms && <p className='text-xs text-red-700 font-semibold'>{errors.agreeTerms}</p>
            }
              <div className='flex items-center gap-2'>
                <input 
                    type="checkbox" 
                    name="notifications"
                    id="notifications" 
                    className='border border-gray-400 rounded' 
                    checked={formData.notifications}
                    onChange={handleChange}
                />
                <label className='text-xs text-gray-700'>Receive notifications about new opportunities.</label>
              </div>
              <button className='bg-rose-600 text-white w-full text-sm font-semibold py-2 rounded' onClick={handleSubmit}>Submit Application</button>
        </form>
    </div>
  )
}

export default DeveloperForm