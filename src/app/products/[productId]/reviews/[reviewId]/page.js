import { notFound } from "next/navigation"

export default function ReviewById ({ params })  {
    if(params.reviewId > 1000){
        return notFound()
    }

    return <>
        <h1>Product {params.productId}</h1>
        <h2>Review {params.reviewId}</h2>
    </>
}