import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, MessageCircle, Star } from 'lucide-react';
import { products } from '@/data/products';

const money = (value: number) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(value);

export function generateStaticParams() { return products.map(product => ({ slug: product.slug })); }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(item => item.slug === slug);
  if (!product) notFound();
  const message = encodeURIComponent(`Hello Kashmir Global, I am interested in ${product.name} listed at ${money(product.price)}.`);
  return <main className="product-page"><header className="simple-header container"><Link href="/" className="brand"><span className="brand-mark">KG</span><span>Kashmir <b>Global</b></span></Link><Link href="/" className="back-link"><ArrowLeft size={18}/> Back to shop</Link></header><section className="container detail-grid"><div className="detail-image"><Image src={product.image} alt={product.name} width={650} height={590}/>{product.badge && <span className="badge">{product.badge}</span>}</div><div className="detail-copy"><span className="product-category">{product.category}</span><h1>{product.name}</h1><div className="rating large"><Star size={17} fill="currentColor"/> {product.rating} customer rating</div><div className="detail-price">{money(product.price)} {product.oldPrice && <del>{money(product.oldPrice)}</del>}</div><p>{product.description}</p><div className="feature-list">{product.features.map(feature => <div key={feature}><Check size={18}/><span>{feature}</span></div>)}</div><a className="whatsapp-large" href={`https://wa.me/2348130963475?text=${message}`} target="_blank"><MessageCircle/> Order on WhatsApp</a><small>Confirm availability, delivery fee and payment details with our team.</small></div></section></main>;
}
