
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItemType } from './ShoppingCart';

interface CartItemProps {
  item: CartItemType;
  onRemove: () => void;
}

const CartItem = ({ item, onRemove }: CartItemProps) => {
  return (
    <div className="flex items-center py-3 border-b">
      <div className="flex-1">
        <h4 className="text-base font-semibold truncate">{item.title}</h4>
        <p className="text-phonics-blue font-bold">₹{item.price.toFixed(2)}</p>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        className="ml-2 text-muted-foreground hover:text-destructive"
        onClick={onRemove}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
