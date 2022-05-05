import { useState } from "react";
import { useEffect } from "react";
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My New Website', body: 'Lorem ipsum dolor sit amet...', author: 'Mario', id: 1 },
    { title: 'Understanding Layout Algorithms', body: 'Lorem ipsum dolor sit amet', author: 'Luigi', id: 2 },
    { title: 'Building Scalable Websites with React', body: 'Lorem ipsum dolor sit amet', author: 'Daisy', id: 3 }
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('ran use effect');
  })

  return (
    <div className="home">
      <BlogList blogs={blogs} title='All blogs' handleDelete={handleDelete} />
    </div>
   );
}

export default Home;
