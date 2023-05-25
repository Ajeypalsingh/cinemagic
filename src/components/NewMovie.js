import React from 'react';
import { useForm } from 'react-hook-form';


function NewMovie() {

    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({ mode: 'onChange',});

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }


  return (
    <div className='form-container'>
         <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Add Movies</h2>
                        <div className='form-content'>
                            <div className='inputs'>
                                <label>Movie Name</label>
                                <input {...register('movieName', {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Za-z\s]{4,}$/,
                                    },
                                })}

                                    type='text'
                                    autoComplete="off"
                                    placeholder='Enter Movie name'
                                />
                            </div>

                             <div className='inputs'>
                                <label>Genre</label>
                                <input {...register('genre', {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Za-z\s]{4,}$/,
                                    },
                                })} type='text'
                                    autoComplete="off"
                                    placeholder='Enter movie genre' />
                            </div> 

                        <div className='inputs'>
                                <label>Languages</label>
                                <input {...register('language', {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Za-z\s]{4,}$/,
                                    },
                                })} type='text'
                                    placeholder='Enter movie languages'
                                    autoComplete="off"
                                 />
                            </div>

                            <div className='inputs'>
                                <label>Release year</label>
                                <input  {...register('releaseYear', {
                                    required: true,
                                    pattern: {
                                        value: /^\d{4}$/,
                                    },
                                })} type='number' 
                                    placeholder='Enter release year'
                                    autoComplete="off"
                                     />
                            </div>

                            <div className='inputs'>
                                <label>Reviews</label>
                                <input {...register("review", {
                                    required: true,
                                     pattern: {
                                        value: /^[A-Za-z\s]{4,}$/,
                                    },
                                })} type='text'
                                    placeholder='Enter movie reviews'
                                    autoComplete="off"
                                     />
                            </div> 


                        </div>
                        <input type='submit' value='submit' className='button' disabled={!isValid} />
                    </form>
    </div>
  )
}

export default NewMovie;