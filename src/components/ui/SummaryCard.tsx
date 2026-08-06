type SummaryCardProps = {
  subTitle: string;
  mainTitle: string;
  evaluation?: string;
};
export default function SummaryCard(props: SummaryCardProps) {
  const { mainTitle, subTitle, evaluation } = props;
  return (
    <div className="bg-card text-card-foreground flex flex-col rounded-xl space-y-4 p-6 border border-border">
      <div className="flex items-start justify-between space-x-2">
        <span className="text-muted-foreground truncate text-sm">
          {subTitle}
        </span>
        <span className="text-sm font-medium text-emerald-700">{evaluation}</span>
      </div>
      <dd className="heading mt-1 text-3xl">{mainTitle}</dd>
    </div>
  );
}
