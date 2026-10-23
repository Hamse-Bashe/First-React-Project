import React from 'react'
import { set, useForm } from 'react-hook-form'
import useFormPersist from 'react-hook-form-persist'


const StudentRegistration = () => {

    const {register, handleSubmit, watch, setValue, reset, formState: {errors} } = useForm();

    useFormPersist("Student-Registration-Form", {
        watch,
        setValue,
        storage: window.localStorage, 
    })

    const subjects = ["Mathematics", "Science", "English"];

    const onSubmit = (data)=> {
        alert(`Registration Successfully  ${JSON.stringify(data)}`)
        // reset();
    }

  return (
    <div className='min-h-screen p-4 bg-gray-100'>
        <form className='max-w-84 px-6 py-8 shadow-md mx-auto bg-white rounded-xl space-y-2' onSubmit={handleSubmit(onSubmit)}>
            <h2 className='font-bold text-lg'>Student Registration Form</h2>
            <div>
                <label className='text-sm font-semibold text-gray-700'>Student Name</label> <br />
                <input type="text" className={`border p-2 w-full rounded text-sm outline-none ${errors.stdName ? `border-red-500 border-2  ` : `border-gray-400`}`} {...register('stdName', {required: "Name is required", minLength: {value: 2, message: "Name must be at least 2 characters"}})} />
                {
                    errors.stdName && <p className='text-sm text-red-500'>{errors.stdName.message}</p>
                }
            </div>
            <div>
                <label className='text-sm font-semibold text-gray-700'>Email</label>
                <input type="email" className={`border p-2 w-full rounded text-sm outline-none ${errors.email ? `border-red-500 border-2  ` : `border-gray-400`}`} {...register("email", {required: "Email is required", pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address"}})} />
                {
                    errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>
                }
            </div>
            <div>
                <label className='text-sm font-semibold text-gray-700'>Grade</label>
                <select className={`border p-2 w-full rounded text-sm outline-none ${errors.grade ? `border-red-500 border-2  ` : `border-gray-400`}`} {...register("grade", {required: "Select grade"})}>
                    <option value="">Select Grade</option>
                    <option value="grade9">Grade 9</option>
                    <option value="grade10">Grade 10</option>
                    <option value="grade11">Grade 11</option>
                    <option value="grade12">Grade 12</option>
                </select>
                {
                    errors.grade && <p className='text-sm text-red-500'>{errors.grade.message}</p>
                }
            </div>
            <div>
                <label className='text-sm font-semibold text-gray-700'>Subjects Interest</label>
                {
                    subjects.map((subject)=>(
                        <label className='flex items-center gap-2 text-sm' key={subject}>
                        <input type="checkbox" {...register("subject", {required: "Select at least 1 subject"})} value={subject} />
                        {subject}
                        </label>
                    ))
                }
                {
                    errors.subject && <p className='text-sm text-red-500'>{errors.subject.message}</p>
                }
            </div>
            <div className='flex gap-2'>
                <button className='bg-rose-500 hover:bg-rose-600 py-2 w-1/2 rounded text-white font-semibold' type='submit'>Submit</button>
                <button 
                    className='bg-indigo-500 hover:bg-indigo-600 py-2 w-1/2 rounded text-white font-semibold' 
                    type='reset'
                    onClick={()=> reset()}
                >Reset</button>
            </div>
        </form>
    </div>
  )
}

export default StudentRegistration