import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from '../components/Footer';
import Product from "../components/Product";



export default function Main({product}) {
    const [products, setProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    
       
    useEffect(()=>{
        fetch(`http://cozshopping.codestates-seb.link/api/v1/products?count=4`)
        .then((res => res.json()))
        .then(json => setProducts(json))
    }, []);
    
    return (
        <container>
            <Header></Header>
            
            <article className="product-im">
            {products.map((product) => {
                return <Product key={product.id} title={product.title} image_url={product.image_url} ></Product>
                
            })}
            
            </article>
          

            <Footer></Footer>
        </container>
    )
}
/* // App => Main => useState (상태 생성) => useEffect => render(return) => 빈 배열 렌더링
      => fetch  => 데이터를 받아오고 => useState의 상태 갱신 함수 setProduct(데이터)
      => 어? 상태 데이터가 바뀌었네? => 컴포넌트를 재렌더링 => 비로소 products들이 보였다. */