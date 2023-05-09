import { HiChevronDoubleLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddUser = () => {


    const handleAddUser = event =>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;
        const user = {name, email, gender, status}
        

        fetch('http://localhost:5000/add-user', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Saved',
                    text: 'User has been saved'
                  })
            }
        })
    }


    return (
        <div className="md:max-w-6xl mx-auto my-20">
            <Link to={'/'}>
                <button className="text-sky-500 text-xl font-semibold border py-2 px-5 rounded-md shadow-xl inline-flex items-center gap-2"><HiChevronDoubleLeft /> All users</button>
            </Link>


            <div className="my-16">
                <h1 className="text-5xl text-center font-bold">New User</h1>
                <p className="text-gray-400 text-center">Use the below form to create a new account</p>


                {/* form  */}

                <form onSubmit={handleAddUser}>
                    <div className="mx-auto w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="mx-auto w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <span>Email</span>
                            <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="mx-auto w-1/2 my-7">
                        <label className="text-xl font-bold text-gray-500">Gender</label>
                        <label className="ml-12 text-lg font-semibold">
                            <input type="radio" name="gender" value={'Male'} id="" className="m-3 w-4 h-4" />
                            <span>Male</span>
                        </label>
                        <label className="ml-12 text-lg font-semibold">
                            <input type="radio" name="gender" value={'Female'} id="" className="m-3 w-4 h-4" />
                            <span>Female</span>
                        </label>
                    </div>
                    <div className="mx-auto w-1/2 my-7">
                        <label className="text-xl font-bold text-gray-500">Status</label>
                        <label className="ml-12 text-lg font-semibold">
                            <input type="radio" name="status" value={'Active'} id="" className="m-3 w-4 h-4" />
                            <span>Active</span>
                        </label>
                        <label className="ml-12 text-lg font-semibold">
                            <input type="radio" name="status" value={'Inactive'} id="" className="m-3 w-4 h-4" />
                            <span>Inactive</span>
                        </label>
                    </div>

                    <div className="mx-auto w-1/2">
                        <input type="submit" value="Save" className="btn w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;