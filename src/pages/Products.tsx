import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products, categories, formatPrice } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal, X } from 'lucide-react';

export default function Products() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const badgeFilter = searchParams.get('badge');
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter || '');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 25000]);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (badgeFilter && p.badge !== badgeFilter) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      return true;
    });
  }, [selectedCategory, badgeFilter, search, priceRange]);

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-foreground">{selectedCategory || 'All Products'}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className={`lg:w-60 shrink-0 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div>
            <h3 className="font-semibold text-sm mb-3 uppercase tracking-wider">Categories</h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory('')}
                className={`block text-sm ${!selectedCategory ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
              >
                All Products ({products.length})
              </button>
              {categories.map(c => (
                <button
                  key={c.name}
                  onClick={() => setSelectedCategory(c.name)}
                  className={`block text-sm ${selectedCategory === c.name ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  {c.name} ({c.count})
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-3 uppercase tracking-wider">Price Range</h3>
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Min"
                value={priceRange[0] || ''}
                onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="text-sm"
              />
              <Input
                type="number"
                placeholder="Max"
                value={priceRange[1] || ''}
                onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="text-sm"
              />
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="lg:hidden" onClick={() => setShowFilters(!showFilters)}>
              <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
            </Button>
            {(selectedCategory || search) && (
              <Button variant="ghost" size="sm" onClick={() => { setSelectedCategory(''); setSearch(''); }}>
                <X className="w-3 h-3 mr-1" /> Clear
              </Button>
            )}
          </div>

          <p className="text-sm text-muted-foreground mb-6">{filtered.length} products found</p>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">No products found</p>
              <p className="text-sm mt-2">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
