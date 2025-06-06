import * as React from 'react';


const App = () => {

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'React'
  );

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

  }
  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>
        My Hacker Stories
      </h1>

      <InputWithLabel id="search" label="Search" value={searchTerm} onInputChange={handleSearch} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
};
  
const List = ({ list }) => (
  <ul>
    {list.map((item) => (
    <Item key={item.objectID} item={item} />
    ))}
  </ul>
  );
const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
  );
  
const InputWithLabel = ({ id, label, value, type='text', onInputChange}) => (
  <>
    <label htmlFor="id">{label}</label>
    &nbsp;
    <input type={type} id={id} value={value} onChange={onInputChange} />
  </>
);

export default App;
