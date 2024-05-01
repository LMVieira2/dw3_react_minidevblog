import React from 'react'
import { Link } from 'react-router-dom'
import sstyles from './About.module.css'

const About = () => {
    return (
        <>
            <div className={StyleSheet.About}>
                <h2> Sobre o blog <span>DEV</span></h2>
                <p>
                    Este projeto escopo de blog front end
                </p>
                <Link to="/post/create" className='styles.btn'>
                    Criar Post
                </Link>
            </div>
        </>
    )
}

export default About