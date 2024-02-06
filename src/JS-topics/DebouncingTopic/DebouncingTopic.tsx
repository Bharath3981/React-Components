import { useRef, useEffect, useState } from "react";

const DebouncingTopic = () => {
  const albums: any = useRef([]);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    const getAlbums = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await res.json();
      albums.current = data;
      setFilteredList(data);
    };
    getAlbums();
  }, []);

  const filterAlbums = (e: any) => {
    console.log(e.target.value);
    if (e.target.value) {
      const filteredAlbums = albums.current.filter((album: any) => {
        return album.title.indexOf(e.target.value) >= 0;
      });
      setFilteredList(filteredAlbums);
    } else {
      setFilteredList(albums.current);
    }
  };
  return (
    <div>
      <div className="main-title">Debouncing</div>
      <p className="description">
        In JavaScript, debounce is a powerful technique used to optimize event
        handling by delaying the execution of a function until after a specified
        period of inactivity. It helps prevent excessive function calls
        triggered by rapid events, such as keystrokes or scroll movements.
      </p>
      <div className="side-title">Albums</div>
      <input
        type="text"
        onChange={(e) => filterAlbums(e)}
        placeholder="search"
      />
      <ul className="border-2 border-black-500 h-80 overflow-auto rounded-md p-2 mt-3">
        {filteredList.map((album: any) => {
          return (
            <li key={album.id} className="hover:bg-slate-200">
              {album.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DebouncingTopic;
