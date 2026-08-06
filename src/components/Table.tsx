export default function Table() {
  return (
    <div className="border rounded-xl border-border">
      <table className="table">
        <thead className="table-thead bg-accent text-foreground">
          <tr>
            <th className="table-th">Company</th>
            <th className="table-th">Position</th>
            <th className="table-th">Status</th>
            <th className="table-th">Link</th>
            <th className="table-th">Notes</th>
            <th className="table-th text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="table-tbody" id="applications-tbody">
          <tr>
            <td
              colSpan={6}
              className="text-center p-4"
              id="applications-rows-placeholder"
            >
              Error fetching job applications
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
