import { GalleryOverlay } from "../../components/Gallery/GalleryOverlay/GalleryOverlay.jsx"
import { galleryOverlayContent } from "../../util/About/galleryOverlayContent"
import { tula } from "../../assets/About/tula.jpg"

export const galleryContent =
[
{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        customOverlay: <GalleryOverlay galleryOverlayContent={ galleryOverlayContent["Tula"] }></GalleryOverlay>,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]
