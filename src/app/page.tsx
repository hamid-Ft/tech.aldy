import InfiniteMenu from './_components/infinite-menu';
import { items } from '@/data/menu-items';

export default function Home() {
	return (
		<main className='w-screen h-screen'>
			<InfiniteMenu items={items} />
		</main>
	);
}
