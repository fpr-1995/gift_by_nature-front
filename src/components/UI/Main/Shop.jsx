import {useState} from 'react';

function Shop({categories}) {
    
    const [category, setCategory] = useState(0);

    const handleCategory = (e) => {
        setCategory(e.Target.value);
    }

    return (
        <main id="shop">
            <section>
				<h2>Our Products</h2>
                {products.map((product) => {
                    return (
                        <article key={product.id}>
                            <h3>{product.title}</h3>
                        </article>
                    );
                })}
            </section>
        </main>
    );
}

export default Shop;