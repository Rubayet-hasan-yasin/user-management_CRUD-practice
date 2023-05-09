import { FaUser } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import TableRow from "./TableRow";
import { useState } from "react";


const Home = () => {
    const loddedUsers = useLoaderData()
    const [users, setUsers] = useState(loddedUsers)

    

    // console.log(users);
    return (
        <div>
            

            <div className="md:max-w-6xl mx-auto my-32">
                <Link to={'/add-user'}>
                    <button className="text-sky-500 text-xl font-semibold border py-2 px-5 rounded-md shadow-xl inline-flex items-center gap-2">New User <FaUser></FaUser></button>
                </Link>


                {/* Table */}
                <div className="overflow-x-auto my-8">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>@Email</th>
                                <th>Gender</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row  */}
                            
                            {
                                users.map((user, i)=> <TableRow 
                                    key={user._id}
                                    user={user}
                                    i={i}
                                    users={users}
                                    setUsers={setUsers}
                                    ></TableRow>)
                            }
                            

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Home;