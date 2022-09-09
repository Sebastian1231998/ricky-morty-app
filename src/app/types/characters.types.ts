export interface Characters{
    created:string,
    id:number,
    episode:string[],
    gender:string,
    image:string,
    location:location,
    name:string,
    origin:location,
    species:string,
    status:string,
    type:string,
    url:string
}

interface location{
    name:string,
    url:string
}