import React from 'react';
import Enviar from '../../Assets/enviar.svg?react';
import useFetch from '../../Hooks/useFetch';
import Error from '../../Helper/Error';
import { COMMENT_POST } from '../../api';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (!comment.trim()) return;
    setComment('');
    setComments((comments) => [...comments, json]);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        id='comment'
        name='comment'
        placeholder='Comente...'
        className={styles.textarea}
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button} disabled={!comment.trim()}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
