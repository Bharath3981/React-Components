import { useRef, useEffect, useState } from "react";
import CodeSnippet from "../../util/CodeSnippet";

const ThrottlingTopic = () => {
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

  const flag = useRef<boolean>(true);
  const debouncing = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (flag.current) {
      filterAlbums(e);
      flag.current = false;
      setTimeout(() => {
        flag.current = true;
      }, 700);
    }
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
  const someMagic = (fn: () => void, d) => {
    let flag2 = useRef<boolean>(true);
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      if (flag2.current) {
        fn(e);
        flag2.current = false;
        setTimeout(() => {
          flag2.current = true;
        }, d);
      }
    };
  };
  const debouncing1 = someMagic(filterAlbums, 700);
  return (
    <div>
      <div className="main-title">Throttling</div>
      <p className="description">
        Throttling is a technique that limits how often a function can be called
        in a given period of time. It is useful for improving the performance
        and responsiveness of web pages that have event listeners that trigger
        heavy or expensive operations, such as animations, scrolling, resizing,
        fetching data, etc. <br />
        For example, if you have a function that fetches some data from an API
        every time the user scrolls the page, you might want to throttle it so
        that it only makes one request every second, instead of making hundreds
        of requests as the user scrolls. This way, you can avoid overloading the
        server or the browser with unnecessary requests and reduce the bandwidth
        consumption.
      </p>
      <div className="side-title">Throttling implementation1</div>
      <CodeSnippet>{`const flag = true;
  const throttling1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (flag) {
      filterAlbums(e);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, 700);
    }
  };`}</CodeSnippet>
      <div className="side-title">Throttling implementation2</div>
      <CodeSnippet>{`const throttling2 = (fn: () => void, d) => {
    let flag2 = true;
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      if (flag2) {
        fn(e);
        flag2 = false;
        setTimeout(() => {
          flag2 = true;
        }, d);
      }
    };
  };`}</CodeSnippet>
      <div>
        <div className="side-title">Albums</div>
        <div>
          <input
            type="text"
            onChange={(e) => debouncing(e)}
            placeholder="search throttling 1"
          />
        </div>
        <div>
          <input
            className="mt-2"
            type="text"
            onChange={(e) => debouncing1(e)}
            placeholder="search throttling 2"
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
    </div>
  );
};

export default ThrottlingTopic;
