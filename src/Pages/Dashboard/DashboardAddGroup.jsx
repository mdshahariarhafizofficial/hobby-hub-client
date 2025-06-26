import React, { useContext } from 'react';
import { MdGroupAdd } from 'react-icons/md';
import { TiArrowForward } from 'react-icons/ti';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const DashboardAddGroup = () => {
    const {user} = useContext(AuthContext);

    // Create Group
    const handleCreateGroup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newGroup = Object.fromEntries(formData.entries());

        // send data to DB
        fetch('https://hobby-hub-server-beta.vercel.app/groups', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newGroup)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                icon: "success",
                title: "Group Created Successfully!",
                showConfirmButton: false,
                timer: 1500
                });
            }
        })
        form.reset(); 
    } 


    return (
        <div>
            <div>
                <h2 className='flex pt-5 items-center justify-center gap-3 text-2xl md:text-5xl text-center text-secondary font-bold'>
                    <MdGroupAdd size={60}></MdGroupAdd>
                    Add a New Group</h2>
            </div>

            <div className='grid grid-cols-12 mb-20 mt-5 gap-7'>

                {/* Form  Section*/}
                <div className='col-span-12'>
                        <div className="card w-full md:max-w-6xl mx-auto shrink-0">

                            {/* Form */}
                            <form onSubmit={handleCreateGroup} className="card-body p-0">
                                <fieldset className="fieldset">
                                    

                                    <div className='grid md:grid-cols-2 gap-5'>
                                        <div>
                                            {/* User Name */}
                                            <label className="label text-secondary font-bold">User Name</label>
                                            <input 
                                            type="text"
                                            name='userName' 
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
                                            name='groupName' 
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
                                            name='maxMembers' 
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
                                    name='meetingLocation' 
                                    className="input w-full" 
                                    placeholder="Meeting Location"
                                    required />
                                    {/* ------------ */}

                                    {/* Image URL */}
                                    <label className="label text-secondary font-bold">Image URL</label>
                                    <input 
                                    type="url"
                                    name='imageUrl' 
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

export default DashboardAddGroup;