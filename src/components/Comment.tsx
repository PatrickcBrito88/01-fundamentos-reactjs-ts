import styles from './Comment.module.css';
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar";
import {useState} from "react";

interface CommentProps {
    content: string;
    onCommentDelete: (commentToDelete: string) => void;
    //Na tipagem da função eu descrevo que é uma função (), que retorna void e possui os parâmetros que eu quero daquele tipo
}

export function Comment({content, onCommentDelete}: CommentProps){

    function handleDeleteComment(){
        onCommentDelete(content);
    }

    const [likeCount, setLikeCount] = useState(0);

    //Sempre que for atualizar uma informação e essa informação depende do valor
    // que tinha anteriormente, é necessário usar uma função como parâmetro do set
    //Exemplo: setLikeCount((state) => state + 1);
    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://github.com/PatrickcBrito88.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Patrick Brito</strong>
                            <time title="11 de maio às 08:13" dateTime="2022-05-11">Cerca de 1h atrás</time>
                        </div>

                        <button
                            title="Apagar comentário"
                            onClick={handleDeleteComment}
                        >
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button
                    onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
            
        </div>
    )
}