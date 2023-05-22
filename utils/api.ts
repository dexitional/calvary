import { sanityClient }  from '../sanity'

export const SANITY_API_URL = `https://zp7mbokg.api.sanity.io/v2021-06-07/data/query/production`;

export const revalidate = 60;
 
export const fetchNews = async () => {
    const query = `*[_type == "post" && "publication" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...4]`
    const data = await sanityClient.fetch(query)
    return data;
}

export const fetchEvents = async () => {
    const query = `*[_type == "post" && "events" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...4]`
    const data = await sanityClient.fetch(query)
    return data;
}
 
export const fetchMenus = async () => {
    const query = `
    *[_type == "setting"][0]['mainmenu'][]->{title,link,submenus[]->{title,link}}
    `
    const data = await sanityClient.fetch(query)
    return data;
}

export const getPostSlugs = async () => {
    const query = `*[_type == "post"][0] { slug }`
    const data = await sanityClient.fetch(query)
    const slugs = data.map((row:any) => ({ slug: row.slug.current }))
    return slugs;
}

export const getPost = async (slug:string) => {
    const query = `*[_type == "post" && slug.current == $slug ][0] {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }}`
    const data = await sanityClient.fetch(query,{ slug })
    return data;
}