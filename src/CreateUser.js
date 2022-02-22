import { useFormik } from 'formik'
import React from 'react'

function CreateUser() {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: ''
        },
        onSubmit: async values => {
            try {
                await fetch(`https://619a30ba9022ea0017a7b085.mockapi.io/users`, {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                alert('Data Saved Successfully')
            } catch (error) {
                console.log(error)
            }
        }

    })
    return (
        <div>
            <h3 className='header'>Create User</h3>
            <form className='userForm' onSubmit={formik.handleSubmit}>

                <div className="form-group">
                    <label for="firstname">First Name</label>
                    <input type="text" className="form-control" id="firstname" name='firstname' placeholder="Enter First Name...."
                        onChange={formik.handleChange} value={formik.values.firstname} />

                </div>
                <div className="form-group">
                    <label for="lastname">Last Name</label>
                    <input type="text" className="form-control" id="lastname" name='lastname' placeholder="Enter Last Name...." onChange={formik.handleChange} value={formik.values.lastname} />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder="Enter email...." onChange={formik.handleChange} value={formik.values.email} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <button type="submit" className="btn btn-primary">Create User</button>
            </form>
        </div>
    )
}

export default CreateUser