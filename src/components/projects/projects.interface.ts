export interface Project {
    id:number
    title:string
    tag:string
    desc:string
    github_link:string
    imagesLink:string
    category:'personal' | 'professional' | null
}