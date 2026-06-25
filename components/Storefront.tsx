'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, ShoppingBag, Star, Truck, ShieldCheck, Headphones, X, Plus, Minus, MessageCircle } from 'lucide-react';
import { categories, products, Product } from '@/data/products';

type CartItem = Product & { quantity: number };

const money = (value: number) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(value);

export default function Storefront() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleProducts = useMemo(() => products.filter(product => {
    const categoryMatch = category === 'All' || product.category === category;
    const queryMatch = product.name.toLowerCase().includes(query.toLowerCase()) || product.category.toLowerCase().includes(query.toLowerCase());
    return categoryMatch && queryMatch;
  }), [category, query]);

  const addToCart = (product: Product) => {
    setCart(items => {
      const found = items.find(item => item.id === product.id);
      return found ? items.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (id: string, amount: number) => setCart(items => items.map(item => item.id === id ? { ...item, quantity: item.quantity + amount } : item).filter(item => item.quantity > 0));
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const checkoutMessage = encodeURIComponent(`Hello Kashmir Global, I would like to order:\n${cart.map(item => `• ${item.name} × ${item.quantity} — ${money(item.price * item.quantity)}`).join('\n')}\n\nTotal: ${money(total)}`);

  return (
    <main>
      <div className="announcement">Free delivery in Aba on selected orders above ₦100,000</div>
      <header className="header container">
        <Link href="/" className="brand"><span className="brand-mark">KG</span><span>Kashmir <b>Global</b></span></Link>
        <nav className={menuOpen ? 'nav mobile-open' : 'nav'}>
          <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a><a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a><a href="#about" onClick={() => setMenuOpen(false)}>Why us</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? <X /> : <Menu />}</button>
          <button className="cart-button" onClick={() => setCartOpen(true)}><ShoppingBag size={20}/><span>Cart</span>{itemCount > 0 && <b>{itemCount}</b>}</button>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Smart technology. Better everyday life.</span>
            <h1>Phones and accessories you can trust.</h1>
            <p>Discover quality smartphones, fast chargers, earbuds, smartwatches and mobile essentials—carefully selected for performance and value.</p>
            <div className="hero-actions"><a className="primary-button" href="#shop">Shop products</a><a className="secondary-button" href="https://wa.me/2348130963475" target="_blank">Chat on WhatsApp</a></div>
            <div className="hero-stats"><div><strong>1,000+</strong><span>Happy customers</span></div><div><strong>Quality</strong><span>Tested products</span></div><div><strong>Fast</strong><span>Local delivery</span></div></div>
          </div>
          <div className="hero-visual">
            <div className="hero-orb"></div>
            <Image src="/products/phone-blue.svg" alt="Featured smartphone" width={470} height={470} priority />
            <div className="floating-card card-one"><span>New</span><b>5G Smartphones</b></div>
            <div className="floating-card card-two"><Star size={17} fill="currentColor"/><b>Top-rated gadgets</b></div>
          </div>
        </div>
      </section>

      <section className="trust container" id="about">
        <div><Truck/><span><b>Fast delivery</b><small>Reliable local dispatch</small></span></div>
        <div><ShieldCheck/><span><b>Quality checked</b><small>Products selected with care</small></span></div>
        <div><Headphones/><span><b>Helpful support</b><small>Before and after purchase</small></span></div>
      </section>

      <section className="section container" id="categories">
        <div className="section-heading"><div><span className="eyebrow">Browse your way</span><h2>Popular categories</h2></div></div>
        <div className="category-grid">
          {categories.slice(1,7).map((item, index) => <button key={item} onClick={() => {setCategory(item); document.getElementById('shop')?.scrollIntoView({behavior:'smooth'});}}><span>{['📱','🎧','⚡','⌚','🔋','🛡️'][index]}</span><b>{item}</b><small>Explore collection</small></button>)}
        </div>
      </section>

      <section className="section soft-section" id="shop">
        <div className="container">
          <div className="shop-top"><div><span className="eyebrow">Featured collection</span><h2>Shop our latest gadgets</h2></div><div className="search-box"><Search size={19}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products..."/></div></div>
          <div className="filters">{categories.map(item => <button className={category === item ? 'active' : ''} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div>
          <div className="product-grid">
            {visibleProducts.map(product => <article className="product-card" key={product.id}>
              <Link href={`/product/${product.slug}`} className="product-image"><Image src={product.image} alt={product.name} width={360} height={300}/>{product.badge && <span className="badge">{product.badge}</span>}</Link>
              <div className="product-info"><span className="product-category">{product.category}</span><Link href={`/product/${product.slug}`}><h3>{product.name}</h3></Link><div className="rating"><Star size={15} fill="currentColor"/> {product.rating}</div><div className="price-row"><div><strong>{money(product.price)}</strong>{product.oldPrice && <del>{money(product.oldPrice)}</del>}</div><button onClick={() => addToCart(product)} aria-label={`Add ${product.name} to cart`}><Plus size={20}/></button></div></div>
            </article>)}
          </div>
          {visibleProducts.length === 0 && <div className="empty">No products match your search.</div>}
        </div>
      </section>

      <section className="promo container">
        <div><span className="eyebrow">Kashmir Global deals</span><h2>Upgrade your everyday tech.</h2><p>Get dependable mobile accessories and helpful product guidance in one place.</p><a href="#shop" className="primary-button">Explore deals</a></div>
        <Image src="/products/earbuds.svg" alt="Wireless earbuds" width={340} height={280}/>
      </section>

      <footer id="contact"><div className="container footer-grid"><div><div className="brand light"><span className="brand-mark">KG</span><span>Kashmir <b>Global</b></span></div><p>Your dependable destination for phones and accessories.</p></div><div><b>Shop</b><a href="#shop">All products</a><a href="#categories">Categories</a><a href="#shop">New arrivals</a></div><div><b>Support</b><a href="https://wa.me/2348130963475">WhatsApp</a><a href="mailto:hello@kashmirglobal.com">Email support</a><a href="#">Delivery information</a></div><div><b>Contact</b><p>Aba, Abia State, Nigeria</p><p>0813 096 3475</p></div></div><div className="copyright">© 2026 Kashmir Global. All rights reserved.</div></footer>

      <aside className={cartOpen ? 'cart-drawer open' : 'cart-drawer'}><div className="cart-backdrop" onClick={() => setCartOpen(false)}></div><div className="cart-panel"><div className="cart-head"><div><span>Your cart</span><b>{itemCount} item{itemCount === 1 ? '' : 's'}</b></div><button onClick={() => setCartOpen(false)}><X/></button></div><div className="cart-items">{cart.length === 0 ? <div className="cart-empty"><ShoppingBag size={38}/><b>Your cart is empty</b><span>Add a product to get started.</span></div> : cart.map(item => <div className="cart-item" key={item.id}><Image src={item.image} alt={item.name} width={72} height={72}/><div><b>{item.name}</b><span>{money(item.price)}</span><div className="quantity"><button onClick={() => updateQuantity(item.id,-1)}><Minus size={15}/></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id,1)}><Plus size={15}/></button></div></div></div>)}</div>{cart.length > 0 && <div className="cart-footer"><div><span>Total</span><b>{money(total)}</b></div><a className="whatsapp-checkout" target="_blank" href={`https://wa.me/2348130963475?text=${checkoutMessage}`}><MessageCircle size={20}/> Checkout on WhatsApp</a><small>Delivery fee will be confirmed before payment.</small></div>}</div></aside>
    </main>
  );
}
