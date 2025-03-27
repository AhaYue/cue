import { ArrowRight } from "lucide-react";
import NumberFlowContent from "@/components/NumberFlow";
interface Stats8Props {
  heading?: string;
  description?: string;
  link?: {
    text: string;
    url: string;
  };
  stats?: Array<{
    id: string;
    value: string;
    suffix?: string;
    label: string;
  }>;
}

const Stats = ({
  heading = "Platform performance insights",
  description = "Ensuring stability and scalability for all users",
  link = {
    text: "Read the full impact report",
    url: "/",
  },
  stats = [
    {
      id: "stat-1",
      value: "250",
      suffix: "%+",
      label: "average growth in user engagement",
    },
    {
      id: "stat-2",
      value: "25000",
      suffix: "$",
      label: "annual savings per enterprise partner",
    },
    {
      id: "stat-3",
      value: "200",
      suffix: "+",
      label: "integrations with top industry platforms",
    },
    {
      id: "stat-4",
      value: "99.9",
      suffix: "%",
      label: "customer satisfaction over the last year",
    },
  ],
}: Stats8Props) => {
  return (
    <section className="py-16 md:py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-4xl">{heading}</h2>
          <p>{description}</p>
          <a
            href={link.url}
            className="flex items-center gap-1 font-bold hover:underline"
          >
            {link.text}
            <ArrowRight className="h-auto w-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-5">
         
              <div className="text-6xl font-bold">
              <NumberFlowContent value={Number(stat.value)} suffix={stat.suffix}  delay={200}/>
                
                {/* {stat.value} */}
              </div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
