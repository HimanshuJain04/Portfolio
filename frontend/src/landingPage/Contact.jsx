import React, { useState } from 'react';
import axios from "axios";

function Contact() {

    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            message: ""
        }
    );

    function onChange(event) {
        setFormData(
            {
                ...formData,
                [event.target.name]: event.target.value
            }
        );
    }

    const formSumbit = async () => {
        console.log(formData);
        await axios.post("http://localhost:4000/api/v1/sendMessage", formData)
            .then((res) => {
                alert("Data Send Successfully");
                console.log(res);
            })
            .catch((err) => {
                alert("Data Send Failed");
                console.log(err);
            })
    }

    return (
        <div className='bg-black w-full py-20 flex justify-center '>
            <div className='w-10/12 h-full flex justify-center gap-20 items-start'>

                {/* left for details */}
                <div className='flex  gap-5 w-[530px] flex-col items-start justify-start'>
                    <p className='text-white text-8xl font-serif font-semibold'>Let's get <br /> started</p>
                    <p className='text-[white]/[0.5] text-md font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id hic veritatis minima dolor officiis, rerum maxime corrupti voluptatem dicta odio nemo est quo rem libero repellat alias architecto enim cumque.</p>

                </div>

                {/* right for form */}
                <div className=' flex flex-col gap-7 justify-end items-end'>

                    {/* name section */}
                    <div className='flex flex-col gap-1 w-full'>
                        <label className='text-[white]/[0.5] font-semibold text-lg ml-2' htmlFor="name">Name</label>
                        <input onChange={onChange} id='name' type="text" name='name' className='text-[white]/[0.7] rounded-md font-semibold outline-none bg-[#270a27] py-3 px-3 w-[400px]' placeholder="What's your name" />
                    </div>

                    {/* email section */}
                    <div className='flex flex-col gap-1 w-full'>
                        <label className='text-[white]/[0.5] font-semibold text-lg ml-2' htmlFor="email">Email</label>
                        <input id='email' onChange={onChange} type="email" name='email' className='text-[white]/[0.7] rounded-md font-semibold outline-none bg-[#270a27] py-3 px-3 w-[400px]' placeholder="What's your email address" />
                    </div>

                    {/* message section */}
                    <div className='flex flex-col gap-1 w-full'>
                        <label className='text-[white]/[0.5] font-semibold text-lg ml-2' htmlFor="message">Message</label>
                        <textarea id='message' onChange={onChange} name='message' className='text-[white]/[0.7] overflow-auto rounded-md font-semibold outline-none bg-[#270a27] py-3 px-3 w-[400px] min-h-[200px] max-h-[200px] ' placeholder="What do you want to say" />
                    </div>

                    <div className='w-full mt-5'>
                        <button onClick={formSumbit} className='text-white font-semibold text-base bg-blue-800 py-3 w-full rounded-sm'>LET'S GET STARTED</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact