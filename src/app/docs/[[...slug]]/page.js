export default function Page({ params }) {
    if (params.slug?.length === 2){
        return <>
            <h1>Viewing docs for feature {params.slug[0]}, the concept is: {params.slug[1]} </h1>
        </>
    }
    else if (params.slug?.length == 1){
        return <>
            <h1> Viewing docs for the feature {params.slug[0]}</h1>
        </>
    }
    else{
        return <>
            <h1> Viewing the docs home page</h1>
        </>
    }
}