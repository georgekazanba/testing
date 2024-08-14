import EntryList from '../components/EntryList'
import PostForm from '../components/UI/Post/PostForm'
import PostFilter from '../components/UI/Post/PostFilter'
import Modal from '../components/UI/Modal/Modal'
import MainButton from '../components/UI/Button/MainButton'
import { usePosts } from '../hooks/usePosts'
import PostService from '../api/PostService'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetch'
import ErrorHandler from '../components/UI/ErrorHandler/ErrorHandler'
import { getPagesArray, getPagesCount } from '../components/utils/Pages/Pages'
import Pager from '../components/UI/Pager/Pager'
import { useContext, useEffect, useState } from 'react'
import { KIWAMIGREEN } from '../context'

function Posts() {
    // посты, функция установки значения поста
    const [posts, setPosts] = useState([]);
    // фильтр - объект, принимающий искомую строку и поле записи для сортировки
    const [filter, setFilter] = useState({sort:'', query:''});
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    
    const [fetchPosts, arePostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit));
        setPosts(response.data);
    })

    const pagesArray = getPagesArray(totalPages);
    
    // функция добавления нового поста в массив постов
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    // функция удаления поста
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page);
    }

    // видимость модалки
    const [modal, setModal] = useState(false);

    // все выводимые записи
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    useEffect(() => {
        fetchPosts();

    }, [filter, page]);

    const {isGreen, setIsGreen} = useContext(KIWAMIGREEN);

    return (
        <>
            <MainButton onClick={() => setModal(true)}>Добавить момент</MainButton>
            {/* create принимает функцию добавления нового поста */}
            <Modal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} />
            </Modal>
            {/* фильтрация и поиск */}
            <PostFilter filter={filter} setFilter={setFilter}/>
            {/* posts - имеющиеся записи */}
            {postError ? <ErrorHandler>{postError}</ErrorHandler> : ''}
            {arePostsLoading
            ? <div style={{width:"100%", display:"flex", justifyContent:"center", marginTop:"25px"}}>
                <Loader/>
                </div>
            : <EntryList posts={sortedAndSearchedPosts} remove={removePost} title={"ТОП МОМЕНТОВ"}/>
            }
            <Pager changePage={changePage} totalPages={totalPages}/>
        </>
    )
}

export default Posts;