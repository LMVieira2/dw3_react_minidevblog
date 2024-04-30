import styles from './CreatePost.module.css';
import { useState } from 'react';
import { userInsertDocument } from '../../hooks/userInsertDocument';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState('');
    const [formError, setFormError] = useState('');
    const { user } = useAuthValue();

    const navigate = useNavigate();

    const { insertDocument, response } = userInsertDocument('posts');

    const handlerSubmit = async (e) => {
        e.preventDefault();
        setFormError('');

        try {
            new URL(image);
        } catch (error) {
            setFormError('URL da imagem inválida');
        }

        const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());

        if (!title || !image || !body || !tags) {
            setFormError('Preencha todos os campos');
        }

        console.log(tagsArray);

        console.log({
            title,
            image,
            body,
            tags: tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        })

        if (formError) return

        insertDocument({
            title,
            image,
            body,
            tags: tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        });

        navigate('/');
    }

    return (
        <><div className={styles.create_post}>
            <h2>Nova Postagem</h2>
            <p>Compartilhe sya experiencia no mundo desenvolvedor</p>
            <form onSubmit={handlerSubmit}>
                <label>
                    <span>Titulo</span>
                    <input
                        type="text"
                        name="title"
                        id='title'
                        placeholder='Titulo da postagem'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>
                <label>
                    <span>URL da Imagem</span>
                    <input
                        type="text"
                        name="image"
                        id='image'
                        placeholder='URL da imagem'
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                        required
                    />
                </label>
                <label>
                    <span>Conteúdo</span>
                    <textarea
                        name="body"
                        id='body'
                        placeholder='Conteúdo da postagem'
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                        required
                    />
                </label>
                <label>
                    <span>Tags</span>
                    <input
                        type="text"
                        name="tags"
                        id='tags'
                        placeholder='Tags da postagem'
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                        required
                    />
                </label>
                {!response.loading && <button className='btn'>Criar Postagem</button>}
                {response.loading && <button className='btn' disabled>Carregando...</button>}
                {(response.error || formError) && <p className='error'>error || formError</p>}
            </form>
        </div>
        </>
    )
}

export default CreatePost;