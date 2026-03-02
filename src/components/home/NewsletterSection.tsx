import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    toast.success('Welcome! Your 10% discount code: WELCOME10');
    setEmail('');
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container text-center max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Get 10% Off Your First Order</h2>
        <p className="text-primary-foreground/80 mb-8">Sign up for exclusive deals, new arrivals, and style tips delivered to your inbox.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 flex-1"
          />
          <Button type="submit" variant="secondary" size="lg" className="font-semibold">
            Get My 10% Off
          </Button>
        </form>
        <p className="text-xs text-primary-foreground/50 mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
