import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsBookmarkFill, BsHeartFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark } from 'react-icons/bi';
import { endPoints } from '../../api/endPoints';
import Button from '../Button/Button';
import './ProyectCard.css';
import '../../index.css';
import '../../api/endPoints';
import useAllProjects from '../../hooks/useAllProjects';


const ProyectCard = () => {

    // Hook con los fetch para llamar a la api y funciones para el seteo de favoritos
    const { projects, toggleClickedHeart, toggleClickedBookmark } = useAllProjects();

    return (
        <div>
            {projects.map((project) => (
                <article key={project.id} className='container-fluid my-3 container-proyect-card'>
                    <div className='d-flex container-fluid pt-3'>
                        <div className='w-100'>
                            <h3 className='mb-0'>{project.titulo}</h3>
                            <p>Empresa: {project.empresaId}</p>
                        </div>
                        <div>
                            <p>{project.modalidad}</p>
                            <p><strong></strong> {project.estado}</p>
                        </div>
                    </div>
                    <div className='container-fluid pb-3'>
                        <p>{project.descripcion}</p>
                        <p className='mb-0'><strong>Categoría: </strong>{project.categoria}</p>
                        <p className='mb-0'><strong>Habilidades: </strong>{project.habilidades}</p>
                        <div className='d-flex justify-content-between mt-1 container-item'>
                            <div className='d-flex gap-3 container-ri'>
                                {project.clickedHeart 
                                    ? <BsHeartFill onClick={() => toggleClickedHeart(project.id)} className='ri-outlineheart' />
                                    : <AiOutlineHeart onClick={() => toggleClickedHeart(project.id)} className='ri-outlineheart' />
                                }
                                {project.clickedBookmark 
                                    ? <BsBookmarkFill onClick={() => toggleClickedBookmark(project.id)} className='ri-bookmark' />
                                    : <BiBookmark onClick={() => toggleClickedBookmark(project.id)} className='ri-bookmark' />
                                }
                            </div>
                            <div className='col-md-4 col-lg-2'>
                                <Button type='primary' to="/login">Postularse</Button>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default ProyectCard;
