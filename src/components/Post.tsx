import styles from './Post.module.css'
import {Comment} from "./Comment";
import {Avatar} from "./Avatar";
import {format, formatDistanceToNow} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import {useState} from "react";

export function Post({author, publishedAt, content}) {

    const publishedAtFormatted = format(publishedAt, "d 'de' MM 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    const [comments, setComments] = useState(['Post muito bacana, hein']);
    const [newCommentText, setNewCommentText] = useState('');

    function handleNewCommentTextChange(event) {
        setNewCommentText(event.target.value);
    }

    function handleNewCommentSubmit(event) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('')
        event.target.setCustomValidity('')
    }

    function deleteComment(commentToDelete) {
        //Cria uma nova lista de comentários, sem o comentário que quero deletar
        const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete);
        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid(event){
        event.target.setCustomValidity("Escreva um comentário antes de publicar");
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form
                onSubmit={handleNewCommentSubmit}
                className={styles.commentForm}
            >
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentTextChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button
                        type="submit"
                        disabled={isNewCommentEmpty}
                    >
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                        return <Comment
                            key={comment}
                            content={comment}
                            onCommentDelete={deleteComment}
                        />
                    }
                )}
            </div>
        </article>
    )
}