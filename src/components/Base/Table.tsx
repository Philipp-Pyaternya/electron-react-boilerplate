function Table({ data }) {
  if (!data || Object.keys(data).length === 0) {
    return <p>No data available</p>;
  }

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <tbody>
        {Object.entries(data).map(([key, value]) =>
          typeof value === 'string' &&
          typeof key === 'string' &&
          value !== '' ? (
            <tr key={key} className="border-b border-teal-500">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {key?.slice(0, 20)?.toUpperCase()}
              </th>
              <td className="px-6 py-4">{value?.slice(0, 30)}</td>
            </tr>
          ) : (
            <> </>
          ),
        )}
      </tbody>
    </table>
  );
}

export default Table;
