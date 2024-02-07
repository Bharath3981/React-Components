import { useRef, useEffect, useState } from "react";
import CodeSnippet from "../../util/CodeSnippet";

const DebouncingTopic = () => {
  const albums: any = useRef([]);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    console.log("useEffect called");
    let albumsFetched = false;
    const getAlbums = async () => {
      console.log("getAlbum calle");
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await res.json();
      albums.current = data;
      if (!albumsFetched) {
        setFilteredList(data);
      }
    };
    getAlbums();
    return () => {
      albumsFetched = true;
    };
  }, []);

  let timeout: number = 0;
  const debouncing = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      filterAlbums(e);
    }, 400);
  };

  const filterAlbums = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  const someMagic = (fn: any, d: number) => {
    let timer: any = 0;
    return (e: any) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn(e);
      }, d);
    };
  };

  const debouncing1 = someMagic(filterAlbums, 400);
  return (
    <div>
      <div className="main-title">Debouncing</div>
      <p className="description">
        In JavaScript, debounce is a powerful technique used to optimize event
        handling by delaying the execution of a function until after a specified
        period of inactivity. It helps prevent excessive function calls
        triggered by rapid events, such as keystrokes or scroll movements.
      </p>
      <div className="side-title">Debouncing implementation1</div>
      <CodeSnippet>{`const debouncing = (fn: any, d: number) => {
    let timer: any = 0;
    return (e: any) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn(e);
      }, d);
    };
  };`}</CodeSnippet>
      <div className="side-title">Debouncing implementation2</div>
      <CodeSnippet>{`let timeout: number = 0;
  const debouncing = (e: any) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      filterAlbums(e);
    }, 400);
  };`}</CodeSnippet>
      <div className="side-title">Albums</div>
      <div>
        <input
          type="text"
          onChange={(e) => debouncing1(e)}
          placeholder="search debouncing 1"
        />
      </div>
      <div>
        <input
          className="mt-2"
          type="text"
          onChange={(e) => debouncing(e)}
          placeholder="search debouncing 2"
        />
      </div>
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
