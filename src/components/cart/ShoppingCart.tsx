
import { useState, useEffect } from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart as CartIcon, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import { toast } from '@/hooks/use-toast';

export type CartItemType = {
  id: string;
  title: string;
  price: number;
  image?: string;
};

interface ShoppingCartProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ShoppingCart = ({ isOpen, onOpenChange }: ShoppingCartProps) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const navigate = useNavigate();

  // Load cart items from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, [isOpen]); // Reload when the cart is opened

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      description: "Item removed from cart",
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast({
      description: "Cart cleared",
    });
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add some courses before checkout",
        variant: "destructive"
      });
      return;
    }
    
    // Close the cart sheet
    onOpenChange(false);
    
    // Navigate to onboarding/payment
    navigate('/onboarding');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <CartIcon className="h-5 w-5" />
            Your Cart ({cartItems.length})
          </SheetTitle>
        </SheetHeader>
        
        {cartItems.length > 0 ? (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-auto py-4">
              {cartItems.map(item => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  onRemove={() => removeItem(item.id)} 
                />
              ))}
            </div>
            
            <div className="pt-4">
              <Separator className="my-4" />
              
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm text-muted-foreground">Total</div>
                <div className="text-2xl font-bold">₹{totalAmount.toFixed(2)}</div>
              </div>
              
              <div className="flex gap-2 mb-4">
                <Button 
                  variant="outline" 
                  className="w-1/2" 
                  onClick={clearCart}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear Cart
                </Button>
                <Button 
                  className="w-1/2 bg-phonics-blue"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center gap-4 text-center">
            <div className="rounded-full bg-muted p-6">
              <CartIcon className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold">Your cart is empty</h3>
            <p className="text-muted-foreground">
              Add some courses to get started with your learning journey
            </p>
            <SheetClose asChild>
              <Button 
                className="mt-4 bg-phonics-blue" 
                onClick={() => navigate('/courses')}
              >
                Browse Courses
              </Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
