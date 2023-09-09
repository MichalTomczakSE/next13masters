import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
    {
        id: '1',
        category: 'Accessories',
        name: '15" Laptop Case',
        price: 75,
        coverImage: {
            src: './kubek.png',

            alt: 'Brown leather folio case with matching wrap around zipper.',
        }
    },
    {
        id: '2',
        category: 'Accessories',
        name: '15" Laptop Case',
        price: 75,
        coverImage: {
            src: './kubek.png',

            alt: 'Brown leather folio case with matching wrap around zipper.',
        }
    },
    {
        id: '3',
        category: 'Accessories',
        name: '15" Laptop Case',
        price: 75,
        coverImage: {
            src: './kubek.png',

            alt: 'Brown leather folio case with matching wrap around zipper.',
        }
    },
    {
        id: '4',
        category: 'Accessories',
        name: '15" Laptop Case',
        price: 75,
        coverImage: {
            src: './kubek.png',
            alt: 'Brown leather folio case with matching wrap around zipper.',
        }
    }

]

export default function ProductsPage() {
    return (
        <section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
            <ProductList products={products} />
        </section>
    );
}
