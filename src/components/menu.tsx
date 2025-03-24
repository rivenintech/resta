import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { currency } from "@/utils/formatters";
import type { CollectionEntry } from "astro:content";

type menuItem = CollectionEntry<"menuCategories"> & {
    items: CollectionEntry<"menu">[];
};

export function MenuTabs({ menu }: { menu: menuItem[] }) {
    return (
        <Tabs defaultValue={menu[0].id} className="w-full">
            <TabsList className="mb-3 flex h-auto w-full flex-wrap py-3 dark:bg-neutral-900">
                {menu?.map((item) => (
                    <TabsTrigger
                        key={item.id}
                        className="text-base transition-all duration-200 dark:data-[state=active]:bg-yellow-500 dark:data-[state=active]:text-black"
                        value={item.id}
                    >
                        {item.data.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            {menu?.map((item) => (
                <TabsContent value={item.id} key={item.id}>
                    <div className="grid gap-6">
                        {item.items.map((item) => (
                            <div className="flex flex-col gap-6 md:flex-row" key={item.id}>
                                <img
                                    src={item.data.img.src}
                                    loading="lazy"
                                    decoding="async"
                                    width="140"
                                    height="140"
                                    alt={item.data.title}
                                    className="aspect-square border-2 border-white object-cover"
                                />
                                <div className="w-full">
                                    <div className="flex justify-between">
                                        <p className="mb-1 text-xl font-medium uppercase">{item.data.title}</p>
                                        {item.data.price && <p className="font-semibold text-neutral-300">{currency.format(item.data.price)}</p>}
                                    </div>
                                    <p className="text-neutral-400">{item.data.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    );
}
