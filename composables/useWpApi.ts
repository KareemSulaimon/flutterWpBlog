export default  () => {
const config = useRuntimeConfig();
const wpUrl= config.public.wpUrl

const  get = async <T>(endpoint: string) =>  useFetch<T>(`${wpUrl}/wp-json/wp/v2/${endpoint}`)

// get all posts

const getPosts = async <T>(
    page : number = 1,
    perPage : number = 9
) => {
   let query = `posts?_embed&per_page=${perPage}&page=${page}`
   return get<T>(query)
}


// get single post
const getPost = async <T>(slug: string) => get<T>(`posts?slug=${slug}&_embed`);

return {
   get, getPosts, getPost
}
}

