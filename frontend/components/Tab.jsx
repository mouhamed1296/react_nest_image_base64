import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

const Tab = () => {
    const [users, setUsers] = useState([])
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        axios.get('http://localhost:3000/users').then((response) => {
            console.log(response);
            setUsers(response.data)
        })
    }, [])
    useEffect(() => {
        axios.get('http://localhost:3000/biens').then((response) => {
            console.log(response);
           
        })
    }, [])
    const onSubmit = async (data) => {
        console.log(data)
        const userId = users[0].id
          const reponse = await axios.post('http://localhost:3000/biens', {
                libelle: data.libelle,
                user: userId
           })
           console.log(reponse);
    }
  return (
    <div>
        <>
        {
            users.map((user, index) => {
               return <img key={index} src={`data:image/png;base64,${user.image}`} alt="" />
            })
        }
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="libelle">Libelle</label>
            <input type="text" name="" id="libelle" {...register("libelle")} />
            <button>Ajouter bien</button>
        </form>
        </>
    </div>
  )
}

export default Tab