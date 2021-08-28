const postList = [
    {title: 'Post 1', text: 'Post 1 yazisi burda'},
    {title: 'Post 2', text: 'Post 2 yazisi burda'},
    {title: 'Post 3', text: 'Post 3 yazisi burda'},
]

const listPost = () => {
    postList.map((post) => {
        console.log(post.title)
        console.log(post.text)
        console.log('\n')
    })
}

const addPost = (newPost) =>{
    const postPromise = new Promise((resolve,reject) => {
        postList.push(newPost)
        resolve(postList)
    })
    return postPromise
}

async function showPosts (){
    try{
        await addPost( { title: 'New Post', text: 'New post yazisi burda' } )
        listPost()
    }catch(e){
        console.log(e)
    }
}

showPosts()
