const Post = ({ posts }) => {
  return (
    <div>
        <h2>{posts.title}</h2>
        <p>{posts.body}</p>
    </div>
  )
}

export async function getStaticProps({ params }) {
    const id = params.id 

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const posts = await res.json()

    return {
      props: {
        posts,
      }
    }
}

export async function getStaticPaths() {
  const url = `https://jsonplaceholder.typicode.com/posts`
  const res = await fetch(url)
  const posts = await res.json()

  const paths = posts.map((post) => {
    return {
      params: { id: String(post.id) },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export default Post