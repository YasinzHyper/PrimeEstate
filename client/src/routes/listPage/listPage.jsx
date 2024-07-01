import { Await, useLoaderData } from "react-router-dom";
import Card from "../../components/card/Card.jsx";
import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map.jsx";
import "./listPage.scss";
import { Suspense } from "react";

function ListPage() {
  const data = useLoaderData();
  // const data = listData;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {/* {posts.map((item) => (
            <Card key={item.id} item={item} />
          ))} */}
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Failed to get posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default ListPage;
