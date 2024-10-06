import  type {MetadataRoute} from "next";

export default function mainfest():MetadataRoute.Manifest {
    return {
        name:"SyllabiGenius",
        short_name:"SyllabiGenius",
        description:"SyllabiGenius  aims to simplify exam preparation by providing an intuitive interface for managing study materials and monitoring progress for various exams starting from GATE.",
        id:"https://syllabigenius.vercel.app/",
        scope:"/",
        start_url:"/branches",
        display:"standalone",
        background_color:"#ffffff",
        theme_color:"#ffffff", 
        orientation:"portrait",
        categories:["education","productivity","utilities"],
        icons:[
            {
                src:'/web-app-manifest-192x192.png',
                sizes:"192x192",
                type:"image/png",
            },
            {
                src:'/web-app-manifest-512x512.png',
                sizes:"512x512",
                type:"image/png",
            }
        ]
    }
}