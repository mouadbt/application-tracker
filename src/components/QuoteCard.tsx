import { useQuery } from "@tanstack/react-query";
import Quote from "./icons/Quote";
const FALLBACK_QUOTE = {
  author: "Sam Levenson",
  quote: "Don't watch the clock...",
};
const LOADING_QUOTE = {
  author: "Loading...",
  quote: "Quote is loading...",
};
export default function QuoteCard() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://random-quotes-freeapi.vercel.app/api/random").then((res) =>
        res.json(),
      ),
  });
  return (
    <div className="bg-card flex flex-col rounded-xl space-y-4 p-6 border border-border pr-24 relative">
      <span className="text-muted-foreground truncate text-sm z-10">
        {isPending
          ? LOADING_QUOTE.author
          : error
            ? FALLBACK_QUOTE.author
            : data.author}
      </span>
      <dd className="heading mt-1 z-10 text-card-foreground">
        {isPending
          ? LOADING_QUOTE.quote
          : error
            ? FALLBACK_QUOTE.quote
            : data.quote}
      </dd>
      <Quote/>
    </div>
  );
}
