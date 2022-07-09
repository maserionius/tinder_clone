import './App.css';
import Gallery from "./components/Gallery";
import {useState} from "react";
import {End} from "./components/End"

const images = ['https://images.pexels.com/photos/881583/pexels-photo-881583.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/745767/pexels-photo-745767.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/289227/pexels-photo-289227.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1020053/pexels-photo-1020053.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/323244/pexels-photo-323244.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1548274/pexels-photo-1548274.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1123819/pexels-photo-1123819.jpeg?auto=compress&cs=tinysrgb&w=600']

function App() {
    const [index, setIndex] = useState(0);
    const [liked, setLiked] = useState([]);
    const [disliked, setDisliked] = useState([])
    if (index > 9) {
        return <End liked={liked} disliked={disliked} />
    }
    return (<div class='container' className="App">
            <div className='img'>
                {/*<img src={img} className="dncinGirl" alt="girl"/>*/}
                <Gallery images={images} x={index}></Gallery>
                <div className='yay_nayQestion'>
                    <button
                        onClick={() => {
                            setIndex(index + 1)
                            // setLiked(liked + 1)
                            liked.push(images[index])
                        }}
                        className='yay'>
                        {/*yes*/}
                        <ul className="wrapper">
                            <li className="icon facebook">
                                <span className="tooltip">yes</span>
                                <span><i className="fab fa-facebook-f">🤍</i></span>
                            </li>
                        </ul>
                    </button>
                    <button onClick={() => {
                        setIndex(index + 1)
                        disliked.push(images[index])
                    }}
                            className='nay'>
                        <ul className="wwrapper">
                            <li className="icon instagram">
                                <span className="tooltip">no</span>
                                <span><i className="fab fa-instagram">✖</i></span>
                            </li>
                        </ul>
                    </button>
                </div>
            </div>
        </div>
    );
}


export default App;
