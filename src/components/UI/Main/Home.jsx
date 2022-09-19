import React from "react";
import {useEffect, useState} from 'react';
import {getCategories} from '../../../services/API/category'

function Home() {
    const [category, setCategory] = useState();

    useEffect(() =>
        async function getData() {
            const data = await fetch(getCategories);
            setCategory(data.category);
        },
        getData(),
    ), [];

    return (
        <main>
            <section>
                <h2>About us</h2>
                <p>Welcome to Gift by nature! The place where you can find natural and organic oils and butters for your hair and your skin.</p>
            </section>
            
            <section>
                <h2>Categories</h2> 
                <p>oil/butter</p>

                {!category ? (
                        <p>Loading...</p>
                ) : (
                        <>
                            {category.map((category) => { 
                                return (
                                    <section id="category">
                                        <Link to="category">
                                            <article key={category.id}>
                                                <h3>{category.title}</h3>
                                            </article>
                                        </Link>

                                    </section>
                                );

                            })}
                        
                        </>
                    )}
            </section>
        </main>
    );
}

export default Home;