import React from 'react';
import Balls from '../components/Ball';


function Skills() {
    return (
        <div className='w-full bg-SkillsImg bg-cover min-h-[100vh] flex bg-purple-400 justify-center gap-10 flex-col items-center'>


            <div className='cursor-pointer flex flex-col gap-5 transition-all duration-200 ease-in-out group'>
                <h4 className='text-white font-serif text-5xl font-bold '>Skills</h4>
                <div className='group-hover:w-full w-0 h-2 transition-all duration-500 ease-out bg-red-600'></div>
            </div>

            <div className='w-9/12 h-[600px] backdrop-blur-md bg-white/20'>
                <Balls />
            </div>
        </div>
    )
}

export default Skills;