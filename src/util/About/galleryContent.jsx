import { GalleryOverlay } from "../../components/Gallery/GalleryOverlay/GalleryOverlay.jsx"
import { galleryOverlayContent } from "../../util/About/galleryOverlayContent"
// import tula from "../../assets/About/tula.jpg"
import fours_tournament_2023 from "../../assets/About/fours_tournament_2023.jpeg"
import frisbee_intrumural_champs_2022 from "../../assets/About/frisbee_intrumural_champs_2022.jpg"
import mudgirl_run_2022 from "../../assets/About/mudgirl_run_2022.jpg"
import tbog_2022 from "../../assets/About/tbog_2022.jpg"
import tbog_2022_riding from "../../assets/About/tbog_2022_riding.jpg"
// import tula_2022 from "../../assets/About/tula_2022.jpg"
// import tula_champs_2021 from "../../assets/About/tula_champs_2021.jpeg"
import womens_intramurals_champs_2023 from "../../assets/About/womens_intramurals_champs_2023.jpeg"
import bluesky_car_running_2022 from "../../assets/About/bluesky_car_running_2022.jpg"
import brake_work_tbog_2023 from "../../assets/About/brake_work_tbog_2023.jpg"
// import bluesky_car_test_2022 from "../../assets/About/bluesky_car_test_2022.jpg"
import technical_presentation_tbog_2023 from "../../assets/About/technical_presentation_tbog_2023.jpg"

export const galleryContent = [
        {
                src: fours_tournament_2023,
                customOverlay: <GalleryOverlay galleryOverlayContent={ galleryOverlayContent["fours_tournament_2023"] }></GalleryOverlay>,
                caption: "Boats (Jeshu John - designerspics.com)",
                height: fours_tournament_2023.height,
        },
        {
                src: mudgirl_run_2022,
                customOverlay: <GalleryOverlay galleryOverlayContent={ galleryOverlayContent["mudgirl_run_2022"] }></GalleryOverlay>,
                caption: "Boats (Jeshu John - designerspics.com)",
        },
        {
                src: frisbee_intrumural_champs_2022,
                customOverlay: <GalleryOverlay galleryOverlayContent={ galleryOverlayContent["frisbee_intrumural_champs_2022"] }></GalleryOverlay>,
                caption: "Boats (Jeshu John - designerspics.com)",
                height: 300,
        },
        {
                src: tbog_2022,
                customOverlay: <GalleryOverlay galleryOverlayContent={ galleryOverlayContent["tbog_2022"] }></GalleryOverlay>,
                caption: "Boats (Jeshu John - designerspics.com)",
        },
        {
                src: tbog_2022_riding,
                customOverlay: <GalleryOverlay galleryOverlayContent={ galleryOverlayContent["tbog_2022_riding"] }></GalleryOverlay>,
                caption: "Boats (Jeshu John - designerspics.com)",
        },
        {
                src: womens_intramurals_champs_2023,
                customOverlay: <GalleryOverlay galleryOverlayContent={ galleryOverlayContent["womens_intramurals_champs_2023"] }></GalleryOverlay>,
                caption: "Boats (Jeshu John - designerspics.com)",
        },
        {
                src: bluesky_car_running_2022,
                customOverlay: <GalleryOverlay galleryOverlayContent={ galleryOverlayContent["bluesky_car_running_2022"] }></GalleryOverlay>,
                caption: "Boats (Jeshu John - designerspics.com)",
        },
        {
                src: brake_work_tbog_2023,
                customOverlay: <GalleryOverlay galleryOverlayContent={ galleryOverlayContent["brake_work_tbog_2023"] }></GalleryOverlay>,
                caption: "Boats (Jeshu John - designerspics.com)",
        },
        {
                src: technical_presentation_tbog_2023,
                customOverlay: <GalleryOverlay galleryOverlayContent={ galleryOverlayContent["technical_presentation_tbog_2023"] }></GalleryOverlay>,
                caption: "Boats (Jeshu John - designerspics.com)",
        },
        // {
        //         src: tula,
        //         customOverlay: <GalleryOverlay galleryOverlayContent={ galleryOverlayContent["Tula"] }></GalleryOverlay>,
        //         caption: "Boats (Jeshu John - designerspics.com)",
        // },
        // {
        //         src: tula_2022,
        //         customOverlay: <GalleryOverlay galleryOverlayContent={ galleryOverlayContent["tula_2022"] }></GalleryOverlay>,
        //         caption: "Boats (Jeshu John - designerspics.com)",
        //         width: 300,
        // },
        // {
        //         src: tula_champs_2021,
        //         customOverlay: <GalleryOverlay galleryOverlayContent={ galleryOverlayContent["tula_champs_2021"] }></GalleryOverlay>,
        //         caption: "Boats (Jeshu John - designerspics.com)",
        //         width: 3,
        //         height: tula_champs_2021.height
        // },
]
