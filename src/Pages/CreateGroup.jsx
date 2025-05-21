import React, { useContext } from 'react';
import { MdGroupAdd } from 'react-icons/md';
import { TiArrowForward } from 'react-icons/ti';
import { AuthContext } from '../Context/AuthContext';

const CreateGroup = () => {
    const {user} = useContext(AuthContext);

    // Create Group
    const handleCreateGroup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newGroup = Object.fromEntries(formData.entries());
        console.log(newGroup);
        
    } 


    return (
        <div>
            <div className='bg-primary p-5 mt-4 rounded'>
                <h2 className='flex items-center justify-center gap-3 text-2xl md:text-5xl text-center text-secondary font-bold'>
                    <MdGroupAdd size={60}></MdGroupAdd>
                    Create a New Group</h2>
            </div>

            <div className='grid grid-cols-12 mb-20 mt-10 gap-7'>
                <div className='col-span-12 md:col-span-5 space-y-5'>
                    <h2 className='text-5xl font-bold text-secondary'>Turn Your Hobby Into a Gateway to Friendship.</h2>
                    <p className='text-gray-500 font-medium'>
                        Everyone needs time for themselves — but imagine spending that time with people who love the same things you do. Whether it's painting, reading, hiking, or cooking, shared hobbies lead to real connections.
                    </p>
                    <ul className='space-y-2'>
                        <h2 className='text-3xl font-bold text-secondary'>HobbyHub makes that possible.</h2>
                        <li className='flex items-center gap-1 font-semibold'> <TiArrowForward color='#ff5722' size={30}></TiArrowForward> Connect with people in your local area</li>
                        <li className='flex items-center gap-1 font-semibold'> <TiArrowForward color='#ff5722' size={30}></TiArrowForward>Join or start a group that shares your passion</li>
                        <li className='flex items-center gap-1 font-semibold'> <TiArrowForward color='#ff5722' size={30}></TiArrowForward>Attend meetups, have fun, and grow together</li>
                    </ul>

                    <h4 className='text-2xl font-bold text-secondary'>
                        Fill out the form and take the first step toward connection. Let’s make your free time meaningful!
                    </h4>
                </div>

                {/* Form  Section*/}
                <div className='col-span-12 md:col-span-7'>
                        <div className="card w-full max-w-full shrink-0">

                            {/* Form */}
                            <form onSubmit={handleCreateGroup} className="card-body p-0">
                                <fieldset className="fieldset">
                                    

                                    <div className='grid md:grid-cols-2 gap-5'>
                                        <div>
                                            {/* User Name */}
                                            <label className="label text-secondary font-bold">User Name</label>
                                            <input 
                                            type="text"
                                            name='user-name' 
                                            className="input w-full"
                                            value={`${user ? user.displayName : ''}`}
                                            onChange={e=>e.target}
                                            readOnly
                                            placeholder="User Name" />
                                            {/* ------------ */}                                           
                                        </div>
                                        <div>
                                            {/* User Email */}
                                            <label className="label text-secondary font-bold">User Email</label>
                                            <input 
                                            type="email"
                                            name='email' 
                                            className="input w-full" 
                                            value={`${user ? user.email : ''}`}
                                            onChange={e=>e.target}
                                            readOnly
                                            placeholder={`${user? user.email: "User Email"}`} />
                                            {/* ------------ */} 
                                        </div>
                                    </div>


                                    <div className='grid md:grid-cols-2 gap-5'>
                                        <div>
                                            {/* Group Name */}
                                            <label className="label text-secondary font-bold">Group Name</label>
                                            <input 
                                            type="text"
                                            name='group-name' 
                                            className="input w-full" 
                                            placeholder="Group Name"
                                            required />
                                            {/* ------------ */}
                                        </div>

                                        <div>
                                            {/* Hobby Category Name */}
                                            <label className="label text-secondary font-bold">Hobby Category</label>
                                            <select name='category' className='w-full border border-gray-300 py-3 px-2 text-primary font-bold rounded' required>

                                                <option value="">
                                                    Select a Category
                                                </option>

                                                <option
                                                className='text-secondary font-bold'
                                                value="drawing-and-painting">Drawing & Painting</option>
                                                <option
                                                className='text-secondary font-bold'
                                                value="photography">Photography</option>
                                                <option
                                                className='text-secondary font-bold'
                                                value="video-gaming">Video Gaming</option>
                                                <option
                                                className='text-secondary font-bold'
                                                value="fishing">Fishing</option>
                                                <option
                                                className='text-secondary font-bold'
                                                value="running">Running</option>
                                                <option
                                                className='text-secondary font-bold'
                                                value="cooking">Cooking</option>
                                                <option
                                                className='text-secondary font-bold'
                                                value="reading">Reading</option>

                                            </select>
                                        </div>
                                    </div>


                                    <div className='grid md:grid-cols-2 gap-5'>
                                        <div>
                                            {/* Start Date */}
                                            <label className="label text-secondary font-bold">Start Date</label>
                                            <input 
                                            type="date"
                                            name='date' 
                                            className="input w-full" 
                                            placeholder="Start Date"
                                            required />
                                            {/* ------------ */}
                                        </div>
                                        <div>
                                            {/* Max Members */}
                                            <label className="label text-secondary font-bold">Max Members</label>
                                            <input 
                                            type="number"
                                            name='max-members' 
                                            className="input w-full" 
                                            placeholder="Max Members"
                                            required />
                                            {/* ------------ */}
                                        </div>
                                    </div>


                                    {/* Meeting Location */}
                                    <label className="label text-secondary font-bold">Meeting Location</label>
                                    <input 
                                    type="text"
                                    name='meeting-location' 
                                    className="input w-full" 
                                    placeholder="Meeting Location"
                                    required />
                                    {/* ------------ */}

                                    {/* Image URL */}
                                    <label className="label text-secondary font-bold">Image URL</label>
                                    <input 
                                    type="url"
                                    name='image-url' 
                                    className="input w-full" 
                                    placeholder="Image URL"
                                    required />
                                    {/* ------------ */}

                                    {/* Description */}
                                    <label className="label text-secondary font-bold">Description</label>
                                    <textarea 
                                    placeholder="Description"
                                    name='description'
                                    required
                                    className="textarea textarea-lg w-full"></textarea>
                                    {/* ------------ */}
                                    
                                    <button 
                                    type='submit' className="btn btn-primary mt-4 text-xl text-secondary font-bold"><MdGroupAdd size={25}></MdGroupAdd> Create Group</button>
                                </fieldset>
                            </form>
                            </div>
                </div>

            </div>

        </div>
    );
};

export default CreateGroup;