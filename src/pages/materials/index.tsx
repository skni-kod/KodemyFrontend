import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import Route from '@/utils/Route';

export class MaterialsIndexRoute extends Route {
	category: number;

	constructor(category: number) {
		super('/materials');
		this.category = category;
	}
}

const MaterialsIndex = () => {
	const cos = 12;

	return (
		<Page
			title="Lista materiałów"
			description="Spis wszystkich materiałów danej kategorii."
		>
			<Container className="mt-5 max-w-7xl mx-auto">
				<div className="">
					<h1>GameDev/Unity</h1>
					<div className="flex items-center">
						{[...Array(5)].map((i) => (
							<div key={i}>Nazwa {i}</div>
						))}
					</div>
				</div>
				<div className="" />
			</Container>
		</Page>
	);
};

export default MaterialsIndex;
