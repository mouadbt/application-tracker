import Table from "./Table";

export default function ApplicationsSection() {
  return (
    <section className="mt-12 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="heading">Recent Applications</h2>
        <div className="flex items-center gap-2">
          <span className="text-xs">Showing 2 results</span>
        </div>
      </div>
      <Table/>
    </section>
  );
}