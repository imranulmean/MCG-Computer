import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Spinner } from "flowbite-react";

export default function PostCard({ post, cartPage, productCompareModal }) {

    return (
        <div class="w-[170px] max-w-sm bg-white md:w-[200px] product-card">
            <div>
                <img src={post.productImage} alt="product image"  loading="lazy"
                onError={handleError} onLoad={handleLoad}/>
            </div>
            <div class="px-2 pb-2 w-full" style={{'border': '1px solid #0075BD', 'box-shadow':' 0 0 1px 0px'}}>
                <h5 class="product-title">{post.productTitle}</h5>
                <div class="flex-center gap-2">
                    <span class="product-title">{post.shop}</span>
                    <span class="product-title">${post.productPrice}</span>                    
                </div>
                {
                    post.matched && 
                    <p class="product-title" style={{"color":"#0075BD", "font-weight":"600"}}>String Matched:{post.matched}%</p>
                }                
                {
                    !cartPage &&
                    <div className='flex-center gap-2'>
                        <button class="view-all-button product-card-button"  onClick={()=>addToCart(post)}>Add To Cart</button>
                        <button class="view-all-button product-card-button" onClick={()=>setShowModal(true)}>Compare</button>
                    </div>                    
                }
                {
                    productCompareModal &&
                    <button class="view-all-button product-card-button"  onClick={()=>addToCart(post)}>Add To Cart</button>
                }
            </div>

        </div>    
    );
}