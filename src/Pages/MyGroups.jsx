import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import GroupCard from '../Components/GroupCard/GroupCard';
import { FaEdit, FaInfoCircle } from 'react-icons/fa';
import { MdDeleteForever, MdGroupAdd } from 'react-icons/md';
import Swal from 'sweetalert2';
import { IoSave } from 'react-icons/io5';

const MyGroups = () => {
    const {user} = useContext(AuthContext);
    const data = useLoaderData();
    const [myGroups, setMyGroups] = useState(data);
    const [singleGroup, setSingleGroup] = useState(myGroups);
    

    useEffect(()=>{
        const remainingGroups = data.filter(group => group.email === user.email );
        setMyGroups(remainingGroups)
    },[data, user.email])

    // Delete
    const handleDelete = (id) => {
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://hobby-hub-server-beta.vercel.app/groups/${id}`,{
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remainingData = myGroups.filter(group => group._id !== id);
                    setMyGroups(remainingData)
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your Group has been deleted.",
                    icon: "success"
                    });  
                }
            })

        }
        });
        
    }

    // Get Single Group Data 
    const handleUpdateData = (id) => {
        const remainingGroups = data.find(group => group._id === id );
        console.log(remainingGroups);
        setSingleGroup(remainingGroups) 
    }

    // Handle Update Data
    const sendUpdateDataToDb = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateData = Object.fromEntries(formData.entries());
        // console.log(updateData);
        
        // Send Data to Db
        fetch(`https://hobby-hub-server-beta.vercel.app/groups/${singleGroup._id}`,{
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                document.getElementById('my_modal_5').close();
                Swal.fire({
                icon: "success",
                title: "Updated data has been saved",
                showConfirmButton: false,
                timer: 1500
                });
            }
        })
    }
    
    
    
    return (
        <div>
            <div className='my-10'>
                <h2 className='text-5xl dark:text-[#ff946a] font-bold text-center text-secondary'>My Groups</h2>
                <div className="divider divider-primary w-52 mx-auto"></div>
            </div>

            <div className='mb-20'>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table text-center">
                    {/* head */}
                    <thead className='bg-secondary text-white'>
                    <tr>
                        <th>No.</th>
                        <th>Group Name</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row  */}
                    {
                        myGroups.map( (group, index) => 
                    <tr key={group._id} className='border-secondary'>
                        <th>{index+1}</th>
                        <td className='text-md font-bold text-primary'>{group.groupName}</td>
                        <td className='text-secondary font-medium'>{group.category}</td>
                        <td className='font-semibold text-gray-600'>{group.date}</td>
                        <td className='text-md text-secondary font-semibold'>{group.userName}</td>
                        <td>{
                            <div>
                                <div className="join flex justify-center gap-7">
                                    <Link to={`/group/${group._id}`}>
                                        <button className="join-item">
                                            <FaInfoCircle size={22} color='#ff5722'></FaInfoCircle>
                                        </button>
                                    </Link>
                                    {/* Edit */}
                                    <button onClick={()=>{
                                        document.getElementById('my_modal_5').showModal()
                                        handleUpdateData(group._id)
                                        }} className=" join-item">
                                        <FaEdit 
                                        size={22} color='#1e0a3c'></FaEdit>
                                    </button>
                                    <button onClick={()=>handleDelete(group._id)} className=" join-item">
                                        <MdDeleteForever
                                        size={25} color='red'
                                        ></MdDeleteForever>
                                    </button>
                                </div>
                            </div>    
                        }</td>
                    </tr>
                        )
                    }
                    </tbody>
                </table>
                </div>
            </div>

            {/* Modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_5" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">

                {/* Content */}
                <div className='my-6'>
                    <h2 className='text-5xl font-bold text-center text-secondary'>Update Group</h2>
                    <div className="divider divider-primary w-60 mx-auto"></div>
                </div>

                {/* Form  Section*/}
                <div className=''>
                        <div className="card w-full max-w-full shrink-0">

                            {/* Form */}
                            <form onSubmit={sendUpdateDataToDb} className="card-body p-0">
                                <fieldset className="fieldset">
                                    

                                    <div className='grid md:grid-cols-2 gap-5'>
                                        <div>
                                            {/* User Name */}
                                            <label className="label text-secondary font-bold">User Name</label>
                                            <input 
                                            type="text"
                                            name='userName' 
                                            className="input w-full"
                                            defaultValue={singleGroup?.userName}
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
                                            defaultValue={singleGroup?.email}
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
                                            defaultValue={singleGroup?.groupName}
                                            placeholder="Group Name"
                                            required />
                                            {/* ------------ */}
                                        </div>

                                        <div>
                                            {/* Hobby Category Name */}
                                            <label className="label text-secondary font-bold">Hobby Category</label>
                                            <select name='category' className='w-full border border-gray-300 py-3 px-2 text-primary font-bold rounded' required>

                                                <option value={`${singleGroup?.category}`}>
                                                    {singleGroup?.category}
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
                                            defaultValue={singleGroup?.date || ''}
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
                                            defaultValue={singleGroup?.maxMembers}
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
                                    defaultValue={singleGroup?.meetingLocation} 
                                    className="input w-full" 
                                    placeholder="Meeting Location"
                                    required />
                                    {/* ------------ */}

                                    {/* Image URL */}
                                    <label className="label text-secondary font-bold">Image URL</label>
                                    <input 
                                    type="url"
                                    name='imageUrl'
                                    defaultValue={singleGroup?.imageUrl} 
                                    className="input w-full" 
                                    placeholder="Image URL"
                                    required />
                                    {/* ------------ */}

                                    {/* Description */}
                                    <label className="label text-secondary font-bold">Description</label>
                                    <textarea 
                                    placeholder="Description"
                                    name='description'
                                    defaultValue={singleGroup?.description}
                                    required
                                    className="textarea textarea-lg w-full"></textarea>
                                    {/* ------------ */}
                                    
                                    <button 
                                    type='submit' className="btn btn-primary mt-4 text-xl text-secondary font-bold">
                                        <IoSave size={25}></IoSave>Update Group</button>
                                </fieldset>
                            </form>
                            </div>
                </div>


                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-primary text-white">✕</button>
                </form>
                </div>
            </div>
            </dialog>

        </div>
    );
};

export default MyGroups;