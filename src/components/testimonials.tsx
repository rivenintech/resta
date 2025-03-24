import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { fetchReviews } from "@/utils/fetchReviews";
import { getTimeAgo } from "@/utils/formatters";
import Autoplay from "embla-carousel-autoplay";

export function Testimonials({ reviews }: { reviews: Awaited<ReturnType<typeof fetchReviews>> }) {
    if (reviews.length === 0) {
        return (
            <div className="text-center">
                <p className="text-neutral-400">Brak opinii</p>
                <p className="text-2xl font-bold">Dodaj pierwszą opinię!</p>
            </div>
        );
    }

    return (
        <Carousel
            className="overflow-hidden md:mx-12 md:overflow-visible xl:mx-0"
            opts={{ align: "start" }}
            plugins={[Autoplay({ stopOnMouseEnter: true })]}
        >
            <CarouselContent>
                {reviews.map((review) => (
                    <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3" key={review.id}>
                        <div className="flex h-full flex-col justify-between bg-neutral-900 p-6">
                            <p>{review.text}</p>
                            <div>
                                <hr className="my-3 border border-neutral-800" />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p>{review.author}</p>
                                        <p className="text-sm text-neutral-400">{getTimeAgo(review.datetime)}</p>
                                    </div>
                                    <div className="flex">
                                        {Array.from({ length: review.rating }).map((_, i) => (
                                            <svg
                                                key={`${review.id}-filled-${i}`}
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                                className="mr-1 h-4 w-4 text-yellow-300"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        ))}
                                        {Array.from({ length: 5 - review.rating }).map((_, i) => (
                                            <svg
                                                key={`${review.id}-empty-${i}`}
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                                className="mr-1 h-4 w-4 text-gray-300"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
