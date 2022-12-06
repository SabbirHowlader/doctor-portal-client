import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostkey = process.env.REACT_APP_imgbb_key
    const navigate = useNavigate();

    const {data: specialties, isLoading} = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })
    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url =`https://api.imgbb.com/1/upload?expiration=600&key=${imageHostkey} `
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            if(imgData.success){
                console.log(imgData.data.url);
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }

                // save doctor information to the databse 
                fetch('https://dental-portal-server-sabbirhowlader.vercel.app/doctors',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`)
                    navigate('/dashboard/managedoctors')


                })
            }
        })

    }

    if(isLoading){
        return<isLoading></isLoading>
    }
    return (
        <div className='w-96 p-7'>
            <h2>all doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text" {...register("name", { required: "Your name is required" })} className="input input-bordered w-full" />

                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="text" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full" />

                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Specialty</span></label>
                    <select {...register("specialty")} 
                    className="select select-ghost w-full input input-bordered max-w-xs">
                        {
                            specialties.map(specialty => <option 
                            key={specialty._id}
                            value={specialty.name}
                            >{specialty.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", { required: "Your Photo is required" })} className="input input-bordered w-full" />

                    {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                </div>

                <input className='btn btn-accent w-full' value="Add Doctor" type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;