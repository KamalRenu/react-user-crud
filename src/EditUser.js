import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function EditUser() {
    let params = useParams()
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: ''
        },
        onSubmit: async values => {
            try {
                await fetch(`https://619a30ba9022ea0017a7b085.mockapi.io/users/${params.id}`, {
                    method: "PUT",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                alert('Data Updated Successfully')
            } catch (error) {
                console.log(error)
            }
        }
    })
    useEffect(async () => {
        try {
            let userData = await fetch(`https://619a30ba9022ea0017a7b085.mockapi.io/users/${params.id}`)
            let user = await userData.json()
            formik.setValues(user)
        } catch (error) {
            console.log(error)
        }

    }, [])
    return (
        <div>
            <h3 className='header'>Edit User</h3>
            <form className='userForm' onSubmit={formik.handleSubmit}>

                <div className="form-group">
                    <label for="firstname">First Name</label>
                    <input type="text" className="form-control" id="firstname" placeholder="Enter First Name...."
                        onChange={formik.handleChange} value={formik.values.firstname} />

                </div>
                <div className="form-group">
                    <label for="lastname">Last Name</label>
                    <input type="text" className="form-control" id="lastname" placeholder="Enter Last Name...."
                        onChange={formik.handleChange} value={formik.values.lastname} />

                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email...."
                        onChange={formik.handleChange} value={formik.values.email} />
                </div>

                <button type="submit" className="btn btn-primary">Confirm Edit User</button>
            </form>
        </div>
    )
}

export default EditUser