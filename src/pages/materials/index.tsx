import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import HomeBubble from '@/components/home/bubble/HomeBubble';
import Item from '@/components/home/bubble/Item';
import Route from '@/utils/Route';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';

export class MaterialsIndexRoute extends Route {
	category: number;

	constructor(category: number) {
		super('/materials');
		this.category = category;
	}
}

export default function MaterialsIndex() {
	const router = useRouter();
	const [firstCategory, setFirstCategory] = useState<any | null>(null);
	const [secondCategory, setSecondCategory] = useState<any | null>(null);
	const [chosenItem, setItem] = useState('');

	useEffect(() => {
		setFirstCategory(router.query.firstCategory);
		setSecondCategory(router.query.secondCategory);
	}, [router.query.firstCategory, router.query.secondCategory]);

	return (
		<Page
			title="Lista materiałów"
			description="Spis wszystkich materiałów danej kategorii."
		>
			<Container className="px-7 pb-4 max-w-7xl mx-auto text-black text-[28px] font-semibold">
				<div>
					<h1 className="py-5">
						{firstCategory}/{secondCategory}
					</h1>
				</div>
				<div className=" px-7 pb-8 flex max-w-7xl mx-auto  ">
					<HomeBubble
						className=""
						name="gamedev ogolny"
						variant="ButtonBubble"
						category={secondCategory}
						setCategory={setSecondCategory}
					>
						<>gamedev ogolny</>
					</HomeBubble>
					<HomeBubble
						className=""
						name="unity"
						variant="ButtonBubble"
						category={secondCategory}
						setCategory={setSecondCategory}
					>
						<>Unity</>
					</HomeBubble>
					<HomeBubble
						className=""
						name="unreal"
						category={secondCategory}
						variant="ButtonBubble"
						setCategory={setSecondCategory}
					>
						<>unreal</>
					</HomeBubble>
					<HomeBubble
						className=""
						name="godot"
						category={secondCategory}
						variant="ButtonBubble"
						setCategory={setSecondCategory}
					>
						<>Godot</>
					</HomeBubble>
					<HomeBubble
						className=""
						name="grafika 3d"
						category={secondCategory}
						variant="ButtonBubble"
						setCategory={setSecondCategory}
					>
						<>grafika 3d</>
					</HomeBubble>
					<HomeBubble
						className=""
						name="grafika 2d"
						category={secondCategory}
						variant="ButtonBubble"
						setCategory={setSecondCategory}
					>
						<>grafika 2d</>
					</HomeBubble>
				</div>
				<div className="px-7 pb-12  max-w-7xl mx-auto ">
					<Item
						className="basis-5/12 my-4 relative bottom-2"
						name="unreal documentation"
						description=" taki tam testowy test"
						item={chosenItem}
						category="unreal"
						addedBy="Szczepan"
						data="02.02.2022"
						status="Odrzucony"
						chosenCategory={secondCategory}
						setItem={setItem}
					>
						<></>
					</Item>
					<Item
						className="basis-5/12 my-8 relative bottom-2"
						name="godot"
						description="lorem ipsum cośtam cośtam lorem ipsum cośtam cośtamlorem ipsum cośtam cośtamlorem ipsum cośtam cośtamlorem ipsum cośtam cośtamlorem ipsum cośtam cośtamlorem ipsum cośtam cośtamlorem ipsum cośtam cośtam"
						status="Zatwierdzony"
						category="godot"
						addedBy="Andrzej"
						data="02.02.2022"
						chosenCategory={secondCategory}
						item={chosenItem}
						setItem={setItem}
					>
						<> </>
					</Item>
					<Item
						className="basis-5/12 my-8 relative bottom-2"
						name="Obrazki"
						description="lorem ipsum cośtam cośtamlorem ipsum cośtam cośtamlorem ipsum cośtam cośtamlorem ipsum cośtam cośtamlorem "
						status="Oczekujący"
						category="gamedev ogolny"
						addedBy="Stefan"
						data="02.02.2022"
						chosenCategory={secondCategory}
						item={chosenItem}
						setItem={setItem}
					>
						<> </>
					</Item>
				</div>
			</Container>
		</Page>
	);
}
