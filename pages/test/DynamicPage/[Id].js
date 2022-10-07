import { useRouter } from "next/router";  

const Blog = () => {
  const router = useRouter()
  const { Id } = router.query 

  return <p>Blog ID : {Id}</p>
}

export default Blog