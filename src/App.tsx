import './global.css'
import {Header} from './components/Header';
import {Post} from './components/Post';
import styles from './App.module.css';
import {Sidebar} from './components/Sidebar';

function App() {

    const posts = [
        {
            id: 1,
            author: {
                name: 'Patrick Brito',
                avatarUrl: 'https://github.com/PatrickcBrito88.png',
                role: 'BackendDeveloper'
            },
            content: [
                {type: 'paragraph', content: 'Fala galeraa 👋'},
                {
                    type: 'paragraph',
                    content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
                },
                {type: 'link', content: '👉 jane.design/doctorcare'},
            ],
            publishedAt: new Date('2023-04-15 08:13:00'),
        },
        {
            id: 2,
            author: {
                name: 'Diego Fernandes',
                avatarUrl: 'https://github.com/diego3g.png',
                role: 'CTO @Rocketseat'
            },
            content: [
                {type: 'paragraph', content: 'Fala galeraa 👋'},
                {
                    type: 'paragraph',
                    content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
                },
                {type: 'link', content: '👉 jane.design/doctorcare'},
            ],
            publishedAt: new Date('2023-04-14 08:13:00'),
        }
    ]

    return (
        <div>
            <Header/>

            <div className={styles.wrapper}>

                <Sidebar/>

                <main>
                    {posts.map(post => {
                        return <Post
                            key={post.id}
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}/>
                    })
                    }
                </main>
            </div>
        </div>
    )
}

export default App
