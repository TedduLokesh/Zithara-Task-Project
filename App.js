
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get(`http://localhost:3001/api/data?search=${search}&sort=${sort}&page=${page}`)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      });
  }, [search, sort, page]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  const handleSort = (column) => {
    setSort(column);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div
      style={{
        backgroundImage: `url('/path/to/your/image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <div className="container">
        <input
          type="text"
          placeholder="Search by name or location"
          value={search}
          onChange={handleSearch}
          className="form-control mt-4"
        />

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <table className="table mt-4">
          <thead>
            <tr>
              <th onClick={() => handleSort('sno')}>SNo</th>
              <th onClick={() => handleSort('name')}>Name</th>
              <th onClick={() => handleSort('age')}>Age</th>
              <th onClick={() => handleSort('phone')}>Phone</th>
              <th onClick={() => handleSort('location')}>Location</th>
              <th onClick={() => handleSort('created_at_date')}>Date</th>
              <th onClick={() => handleSort('created_at_time')}>Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.sno}>
                <td>{item.sno}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
                <td>{item.location}</td>
                <td>{item.created_at_date}</td>
                <td>{item.created_at_time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination-container mt-4">
          <button onClick={() => handlePageChange(page - 1)} disabled={page === 1} className="btn btn-primary">
            Previous
          </button>
          <span className="mx-3">Page {page}</span>
          <button onClick={() => handlePageChange(page + 1)} className="btn btn-primary">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
