import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroBanner from '@/assets/hero-banner.jpg';

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <img
        src={heroBanner}
        alt="Shop Kenya Fashion"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      <div className="relative container h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-xl text-primary-foreground"
        >
          <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            New Season 2026
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Elevate Your Style,{' '}
            <span className="italic">Own the Streets</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 font-light leading-relaxed">
            Premium fashion at prices that make sense. From Nairobi to the world — discover looks that define you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              <Link to="/products?badge=trending">Explore Deals</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
