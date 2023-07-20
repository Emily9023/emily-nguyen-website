import { GalleryOverlay } from "../../components/Gallery/GalleryOverlay/GalleryOverlay.jsx"
import { galleryOverlayContent } from "../../util/About/galleryOverlayContent"
import tula from "../../assets/About/tula.jpg"
import fours_tournament_2023 from "../../assets/About/fours_tournament_2023.jpeg"
import frisbee_intrumural_champs_2022 from "../../assets/About/frisbee_intrumural_champs_2022.jpg"
import mudgirl_run_2022 from "../../assets/About/mudgirl_run_2022.jpg"
import tbog_2022 from "../../assets/About/tbog_2022.jpg"
import tbog_2022_riding from "../../assets/About/tbog_2022_riding.jpg"
import tula_2022 from "../../assets/About/tula_2022.jpg"
import tula_champs_2021 from "../../assets/About/tula_champs_2021.jpeg"
import womens_intramurals_champs_2023 from "../../assets/About/womens_intramurals_champs_2023.jpeg"
import bluesky_car_running_2022 from "../../assets/About/bluesky_car_running_2022.jpg"
import brake_work_tbog_2023 from "../../assets/About/brake_work_tbog_2023.jpg"
import bluesky_car_test_2022 from "../../assets/About/bluesky_car_test_2022.jpg"
import technical_presentation_tbog_2023 from "../../assets/About/technical_presentation_tbog_2023.jpg"

export const galleryContent = [
        {
                src: tula,
                customOverlay: <GalleryOverlay galleryOverlayContent={ galleryOverlayContent["Tula"] }></GalleryOverlay>,
                caption: "Boats (Jeshu John - designerspics.com)",
                height: tula.height,
        },
]
