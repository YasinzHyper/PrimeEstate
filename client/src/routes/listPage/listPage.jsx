import Card from '../../components/card/Card.jsx';
import Filter from '../../components/filter/Filter';
import Map from '../../components/map/Map.jsx';
import { listData } from '../../lib/dummydata.js';
import './listPage.scss';

function ListPage() {

    const data = listData;

    return (
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter/>
                    {
                        data.map(item => (
                            <Card key={item.id} item={item}/>
                        ))
                    }
                </div>
            </div>
            <div className="mapContainer">
                <Map items={data}/>
            </div>
        </div>
    );
}

export default ListPage;