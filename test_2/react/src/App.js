import { useEffect, useState } from "react";
import { getCustomers } from "./api/apiService";
import Header from "./components/Header";
import NotFound from "./components/Search/NotFound";
import Search from "./components/Search/Search";
import Table from "./components/Table";

function App() {
  const [customers, setCustomers] = useState([]);
  // (2000 records / 1 page)
  const [filters, setFilters] = useState({
    limit: 2000,
    page: 1,
    search: "",
  });

  // fetch data and on change search with server
  // useEffect(() => {
  //   const paramsString = queryString.stringify(filters);
  //   const endpoint = `customers?${paramsString}`;

  //   (async function fetchData() {
  //     const response = await getCustomers(endpoint);
  //     setCustomers(response.data);
  //   })();
  // }, [filters]);

  // only fetch data
  useEffect(() => {
    const endpoint = `customers`;
    (async function fetchData() {
      const response = await getCustomers(endpoint);
      if (response && response.data) setCustomers(response.data);
    })();
  }, []);

  const handleSearchChange = (newFilters) => {
    setFilters({
      ...filters,
      page: 1,
      search: newFilters.searchTerm,
    });
  };

  // search
  var searchResult;
  if (filters.search) {
    searchResult = customers.filter((customer) => {
      return (
        customer.customerID.trim().toUpperCase() ===
          filters.search.trim().toUpperCase() ||
        customer.companyName.trim().toUpperCase() ===
          filters.search.trim().toUpperCase() ||
        customer.contactName.trim().toUpperCase() ===
          filters.search.trim().toUpperCase()
      );
    });
  }

  return (
    <>
      <Header />
      <Search onSubmit={handleSearchChange} />
      <Table data={searchResult ? searchResult : customers} />
      {searchResult && searchResult.length === 0 ? (
        <NotFound msg={filters.search} />
      ) : null}
    </>
  );
}

export default App;

// indexOf === %LIKE% of sql
// customer.customerID.indexOf(filters.search) > -1
