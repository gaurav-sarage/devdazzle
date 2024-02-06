import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: 'j0mtb37d',
    useCdn: false,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
};