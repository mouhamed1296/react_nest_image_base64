import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Form = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        //permet de pouvoir lire des fichier au niveau du navigateur
        const lecteur = new FileReader()

        lecteur.readAsDataURL(data.image[0]);
    
        lecteur.onload = async () => {
            //Récupération de l'image encodé en base64
           const base64Image = lecteur.result.split(',')[1]
           //console.log(lecteur.result);
           //console.log(base64Image);

           //envoi du formulaire au serveur
          const reponse = await axios.post('http://localhost:3000/users', {
                prenom: data.prenom,
                nom: data.nom,
                image: base64Image
           })
           console.log(reponse);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="prenom">Prenom</label>
                <input type="text" id="prenom" {...register('prenom')} />
            </div>
            <div>
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" {...register('nom')} />
            </div>
            <div>
                <label htmlFor="image">Photo</label>
                <input type="file" id="image" {...register('image')} />
            </div>
            <button style={{
                marginTop: "1rem",
                backgroundColor: "blue",
                color: "white"
            }} type="submit">Envoyer</button>
        </form>
  )
}

export default Form