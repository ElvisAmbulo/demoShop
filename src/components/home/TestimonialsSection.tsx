import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Aisha M.', location: 'Nairobi', text: "The quality is unmatched at this price point. I've been shopping here for 6 months and every piece feels premium.", rating: 5 },
  { name: 'Brian K.', location: 'Mombasa', text: "Fast delivery and the clothes fit perfectly. The size guide is actually accurate! Will definitely shop again.", rating: 5 },
  { name: 'Grace W.', location: 'Kisumu', text: "Love the Ankara collection — authentic prints and beautiful craftsmanship. My go-to store for events.", rating: 5 },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold">Loved by Thousands</h2>
          <p className="text-muted-foreground text-sm mt-2">Join 10,000+ happy customers across Kenya</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border rounded-xl p-6 space-y-4">
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground/80">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
