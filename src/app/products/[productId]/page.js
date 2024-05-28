import { Metadata } from "next"

export const generateMetadata = async ({params}) => {
    return {
        title: `Product ${params.productId}`
    }
}

export default function ProductId({params}){
    return (
        <div>
            <h1>Product {params.productId}</h1>
        </div>
    )
}