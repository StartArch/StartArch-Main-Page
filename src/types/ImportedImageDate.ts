import { StaticImageData } from "next/image";

type ImportedImageData = {
    asset: string | StaticImageData,
    description: string
}

export type { ImportedImageData };