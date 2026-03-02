import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/data/products';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-heading text-xl">Your Bag ({totalItems})</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
            <ShoppingBag className="w-12 h-12" />
            <p>Your bag is empty</p>
            <Button variant="default" onClick={() => setIsOpen(false)}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 py-4">
              {items.map(item => (
                <div key={item.product.id + item.size + item.color} className="flex gap-4 p-3 rounded-lg bg-muted/50">
                  <img src={item.product.images[0]} alt={item.product.name} className="w-20 h-24 object-cover rounded" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-sm truncate pr-2">{item.product.name}</h4>
                      <button onClick={() => removeItem(item.product.id)}>
                        <X className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.size} / {item.color}</p>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center border rounded-md">
                        <button className="p-1.5" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button className="p-1.5" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-semibold text-sm">{formatPrice(item.product.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-4">
              <div className="bg-accent/20 text-accent-foreground p-3 rounded-lg text-sm text-center">
                🎁 Add {formatPrice(Math.max(0, 5000 - totalPrice))} more for FREE delivery!
              </div>
              <div className="flex justify-between font-heading text-lg">
                <span>Total</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <Button className="w-full" size="lg">
                Checkout — {formatPrice(totalPrice)}
              </Button>
              <p className="text-center text-xs text-muted-foreground">M-Pesa, Visa & Mastercard accepted</p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
