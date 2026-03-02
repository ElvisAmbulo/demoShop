import { Shield, Truck, RefreshCw, Smartphone } from 'lucide-react';

const items = [
  { icon: Shield, label: 'Secure Checkout', desc: '256-bit encryption' },
  { icon: Smartphone, label: 'M-Pesa Ready', desc: 'Pay with Lipa Na M-Pesa' },
  { icon: Truck, label: 'Fast Delivery', desc: 'Across Kenya in 2-5 days' },
  { icon: RefreshCw, label: 'Easy Returns', desc: '14-day return policy' },
];

export default function TrustBar() {
  return (
    <section className="bg-secondary py-6 border-y">
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, label, desc }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-sm">{label}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
