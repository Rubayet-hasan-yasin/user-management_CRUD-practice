import { ImPencil, ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TableRow = ({ user,i, users, setUsers }) => {
    const { _id, name, email, gender, status } = user;

    const navigate = useNavigate()



    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/user/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = users.filter(user=> user._id !== id );
                            setUsers(remaining)
                        }
                    })
            }
        })
    }



    const handleUpdate = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You wont to Edit this?!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Edit it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire(
            //     'Edited!',
            //     'Your file has been deleted.',
            //     'success'
            //   )

            navigate(`/update-user/${id}`)

            
            }
          })
    }



    return (
        <tr>
            <th>{i+1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{status}</td>
            <td>
                <button
                onClick={()=>handleUpdate(_id)}
                    className="py-1 px-2 shadow-lg border mr-3">
                    <ImPencil className="text-sky-600" />
                </button>
                <button
                    onClick={() => handleDelete(_id)}
                    className="py-1 px-2 shadow-lg border">
                    <ImCross className="text-sky-600" />
                </button>
            </td>
        </tr>
    );
};

export default TableRow;