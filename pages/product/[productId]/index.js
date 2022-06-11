import { useRouter } from "next/router";

const productId = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>productId: {productId}</div>;
};

export default productId;
