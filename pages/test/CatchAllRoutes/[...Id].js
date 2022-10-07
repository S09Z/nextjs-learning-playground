import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter()
  const { Id } = router.query

  return <p>Product ID : {Id?.join(' ::: ')}</p>
}

export default Product