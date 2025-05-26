import { create } from 'zustand';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
};

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

interface ShopState {
  cart: CartItem[];
  user: User | null;
  isAuthenticated: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  login: (user: User) => void;
  logout: () => void;
}

const useShopStore = create<ShopState>((set) => ({
  cart: [],
  user: null,
  isAuthenticated: false,
  
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (i) => i.id === item.id && i.size === item.size && i.color === item.color
      );

      if (existingItem) {
        // Aktualizovat existující položku
        return {
          cart: state.cart.map((i) =>
            i.id === item.id && i.size === item.size && i.color === item.color
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      } else {
        // Přidat novou položku
        return {
          cart: [...state.cart, item],
        };
      }
    }),
  
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  
  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),
  
  clearCart: () => set({ cart: [] }),
  
  login: (user) =>
    set({
      user,
      isAuthenticated: true,
    }),
  
  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));

export default useShopStore;
