import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Mario');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  /* Handle 'Add blog' clicks */
  const handleSubmit = (e) => {
    e.preventDefault(); /* Prevents default behaviour of button (which is to refresh the page) */
    const blog = { title, body, author };

    setIsPending(true);

    /* Submit POST request */
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
      history.push('/'); /* Returns to home page after user submits form */
    })
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
          <option value="Daisy">Daisy</option>
        </select>
        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled>Adding Blog</button>}
      </form>
    </div>
  );
}

export default Create;
