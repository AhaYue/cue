import { useTranslations } from "next-intl";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const newsList = [
  {
    image: "/images/placeholder-dark-1.svg",
    title: "Duis sem sem, gravida vel",
    date: "2024-01-01",
    description:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    tags: ["porttitor eu, volutpat ut", "tag2", "tag3"],
  },
  {
    image: "/images/placeholder-dark-1.svg",
    title: "Duis sem sem, gravida velDuis sem sem, gravida vel",
    date: "2024-01-01",
    description:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    tags: ["tag1", "porttitor eu, volutpat ut"],
  },
  {
    image: "/images/placeholder-dark-1.svg",
    title: "News 3",
    date: "2024-01-01",
    description:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
  },
  {
    image: "/images/placeholder-dark-1.svg",
    title: "News 3",
    date: "2024-01-01",
    description:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
  },
  {
    image: "/images/placeholder-dark-1.svg",
    title: "News 3",
    description:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
  },
  {
    image: "/images/placeholder-dark-1.svg",
    title: "News 3",
    description:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
  },
  {
    image: "/images/placeholder-dark-1.svg",
    title: "News 3",
    description:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
  },
];

export default function News() {
  const t = useTranslations("News");
  return (
    <div>
      <h1 className="text-6xl md:text-6xl font-bold pt-8 pb-16  md:py-32">
        {t("title")}
      </h1>

      <div className="card-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-8  md:gap-y-12 gap-x-6">
        {newsList.map((item, index) => (
          <NewsCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            tags={item.tags}
            date={item.date}

          />
        ))}
      </div>
    </div>
  );
}

const NewsCard = ({
  image,
  title,
  description,
  tags,
  date,
}: {
  image: string;
  title: string;
  description: string;
  tags?: string[];
  date?: string;
}) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded-lg cursor-pointer">
     

        <Image
          className="w-full  flex object-cover aspect-[4/3]   hover:scale-110 transition-transform duration-600 ease-in-out"
          src={image}
          alt="news-1"
          width={200}
          height={200}
        />
     
      </div>

      <div className="flex flex-col justify-end   flex-grow ">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap  justify-between items-baseline mt-6 gap-2">
            <div className="flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
            </div>
          </div>
        )}
        <div className="flex flex-col gap-2 self-end mt-auto">
          <h3 className="text-2xl font-bold line-clamp-1 mt-4">{title}</h3>
          <p className="text-sm text-gray-500 line-clamp-3  min-h-[4.5em] leading-[1.5em]">
            {description}
          </p>
          <p className="text-xs   text-muted-foreground mt-4 min-h-[1em]">{date}</p>
        </div>
      </div>
    </div>
  );
};
