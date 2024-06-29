import { useLoaderData } from 'react-router-dom';
import Card from '../../components/card/Card.jsx';
import Filter from '../../components/filter/Filter';
import Map from '../../components/map/Map.jsx';
import './listPage.scss';

function ListPage() {
    const posts = useLoaderData();
    // const data = listData;

    return (
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter/>
                    {
                        posts.map(item => (
                            <Card key={item.id} item={item}/>
                        ))
                    }
                </div>
            </div>
            <div className="mapContainer">
                <Map items={posts}/>
            </div>
        </div>
    );
}

export default ListPage;