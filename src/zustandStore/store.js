import { create } from 'zustand';
const useStoreZustand = create((set) => ({
    sayi:0,
    arttir: () => set((state) => {
        console.log('Burada işlemler yapılabilir')
        return {sayi: state.sayi + 1}
    }),
    azalt: () => set((state) => ({sayi: state.sayi - 1})),
    ayarla: (newValue) => set(() => ({sayi: newValue})),
}));
export default useStoreZustand