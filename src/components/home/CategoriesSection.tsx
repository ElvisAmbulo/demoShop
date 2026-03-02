import { Link } from 'react-router-dom';

const cats = [
  { name: "Men's Wear", img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=500&fit=crop' },
  { name: "Women's Wear", img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop' },
  { name: 'Streetwear', img: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=400&h=500&fit=crop' },
  { name: 'Shoes', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop' },
  { name: 'Accessories', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop' },
  { name: 'Formal Wear', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop' },
];

export default function CategoriesSection() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-10 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cats.map(c => (
            <Link key={c.name} to={`/products?category=${encodeURIComponent(c.name)}`} className="group relative overflow-hidden rounded-xl aspect-[3/4]">
              <img src={c.img} alt={c.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <span className="absolute bottom-4 left-4 text-primary-foreground font-heading text-sm sm:text-base font-semibold">{c.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
