import React, { useEffect, useState } from 'react';
import Config from '../Config/Config';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
import { Link } from 'react-router-dom';


function Home({ alt, category, setProgress }) {
    const [data, setData] = useState([]);
    const [Imagedata, setImageData] = useState([]);
    const [totalResult, setTotalResult] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setpageSize] = useState(6);
    const [end, setEnd] = useState(6);



    const arrCategory = category.split("")
    const firstWord = arrCategory[0].toUpperCase()
    const removeFirstWord = arrCategory.splice(1, arrCategory.length)
    const word = firstWord + removeFirstWord.join("");


    useEffect(() => {
        setProgress(5)
        fetchMore();
    }, []);

    const fetchMore = async () => {
        try {
            setProgress(10)
            const url = `${Config.base_url}top-headlines?country=in&category=${category}&apiKey=${Config.api_key}&page=${page}&pageSize=${pageSize}`;
            const ImageUrl = `${Config.base_url}top-headlines?country=in&category=${category}&apiKey=${Config.api_key}`;

            setPage(page + 1)
            setProgress(50)

            const response = await fetch(url);
            const ImageResponse = await fetch(ImageUrl);
            const result = await response.json();
            const ImageResult = await ImageResponse.json();

            console.log(result);
            setProgress(80)

            setData(prevData => [...prevData, ...result.articles]);
            setImageData(ImageResult.articles)
            setTotalResult(result.totalResults)
            setProgress(100)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    return (
        <div>
            <h1 className='flex justify-center font-serif font-bold mt-4 mb-4 md:mt-16 md:text-3xl md:mb-16 '>{`NewsFly - Top ${word} Headlines`} </h1>

            {/* <div className='flex flex-row mb-20 min-h-4'>
                {Imagedata &&
                    Imagedata.slice(0, 15).map((article, index) => (
                        <div key={index} className="w-[300px] rounded-md border">
                            <img
                                src={article.urlToImage || alt}
                                alt="Laptop"
                                className="h-[200px] w-full rounded-md object-cover"
                            />

                           

                        </div>
                    ))
                }
            </div> */}
            <InfiniteScroll
                dataLength={data.length}
                next={fetchMore}
                hasMore={data.length !== totalResult}
                loader={<Loader />}
            >
                <div className='flex flex-wrap justify-center gap-4'>
                    {data &&
                        data.map((article, index) => (
                            <div key={index} className="w-[300px] rounded-md border md:w-[425px] mb-8 ">

                                <img
                                    src={article.urlToImage || alt}
                                    alt='image'
                                    className="h-[250px] w-full rounded-md object-cover"
                                />
                                <div className="p-4">

                                    <p><small>By {!article.author ? "Unknown" : article.author} on  {new Date(article.publishedAt).toGMTString()}</small></p>

                                    <h1 className="text-lg font-semibold">{article.title.length > 50 ? article.title.split('').splice(0, 50).join("") + '...' : article.title}</h1>

                                    <p id='readMore' className="mt-3 text-sm text-gray-600">{article.description ? article.description.length > 120 ? article.description.split('').splice(0, 120).join('') + "..." : article.description + " " : null}</p>



                                </div>

                                <button className='bg-blue-700 p-2 text-white font-bold border rounded-3xl ml-4'>
                                    <Link to={article.url} target='_blank'>
                                        Read More
                                    </Link>
                                </button>
                            </div>
                        ))
                    }
                </div>
            </InfiniteScroll>
        </div>

    );
}

Home.defaultProps = {
    alt: 'https://www.livemint.com/lm-img/img/2023/09/26/600x338/CBDT-issued-a-set-of-guidelines-explaining-these-t_1684868300399_1695752045399.jpg'
};





export default Home;