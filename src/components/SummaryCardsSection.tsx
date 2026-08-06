import QuoteCard from "./QuoteCard";
import SummaryCard from "./ui/SummaryCard";

export default function SummaryCardsSection() {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch h-min">
      <QuoteCard />
      <SummaryCard
        mainTitle="1"
        subTitle="Total Applications
"
      />
      <SummaryCard
        mainTitle="$34.1K
"
        evaluation="+6.1%l"
        subTitle="Monthly recurring revenue"
      />

      <SummaryCard
        mainTitle="$34.1K
"
        evaluation="+6.1%"
        subTitle="Monthly recurring revenue"
      />
    </section>
  );
}
