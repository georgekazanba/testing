// кастомный хук
import { useMemo } from "react";

// хук для получения отсортированных постов
export const useSortedPosts = (posts, sort) => {

    const sortedPosts = useMemo(() => {
        if(sort){
          // т.к. id - это инт, надо сортироват иным способом
          if (sort == 'id') {
            return [...posts].sort((a,b) => a[sort] - b[sort])
          }
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        // если есть параметр сортировки, но возвращается дефолтный список
        // если нет, то срабатывается ебанина выше
        // объект[поле] 
        return posts;
      }, [sort, posts]);

    return sortedPosts;

}

// хук для получения постов после поиска и сортировки
export const usePosts = (posts, sort, query) => {
  // здесь принимаются отсортированные посты
    const sortedPosts = useSortedPosts(posts, sort);
    // вот эта ебанина - массив отфильтрованных постов, включающим какой-то текст
    // мемо нужно, чтобы каждый раз не грузить всё по-новой
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}