type Review = {
    id: number;
    text: string;
    author: string;
    rating: number;
    datetime: string;
};

import ImportedReviews from "public/reviews.json";

export async function fetchReviews(limit?: number) {
    const reviews = ImportedReviews as Review[];
    reviews.sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());

    return reviews.slice(0, limit);
}
