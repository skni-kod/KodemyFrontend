import Page from "@/components/common/Page";
import Container from "@/components/common/Container";

const MaterialsIndex = () => {
	return (
		<Page
			title="Lista materiałów"
			description="Spis wszystkich materiałów danej kategorii."
		>
			<Container className="mt-5 max-w-7xl mx-auto">
				<div className="mx-7">
					<h1 className="py-[10px] text-4xl"/>
					<div className="flex"/>
				</div>
				<div className="px-7 pb-8 flex max-w-7xl mx-auto"/>
			</Container>
		</Page>
	);
};

export default MaterialsIndex;