import Page from '@/components/layout/Page';

export default function Home() {
	return (
		<Page>
			<div className="flex flex-col gap-20 leading-loose">
				{[].map((i) => (
					<div key={i}>
						<section>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac nulla arcu. Cras vel
							ex in ante pretium pulvinar. Cras rhoncus ex a facilisis ornare. Cras eu dictum ex.
							Morbi eu varius leo. Cras pharetra ipsum non turpis dignissim, sed aliquam massa
							maximus. Pellentesque diam mauris, consequat id faucibus vitae, cursus gravida urna.
							Nullam vel magna libero. Aliquam venenatis molestie orci, eget tristique lectus mattis
							tempus. Aliquam pharetra sodales neque non posuere. Fusce elementum eros at justo
							varius, eu feugiat nisl porta.
						</section>
						<section>
							Aliquam elementum, nibh ut pellentesque cursus, leo lorem porta massa, ac sodales elit
							arcu et nisl. Praesent hendrerit hendrerit mauris, ut dictum quam porttitor vitae.
							Cras feugiat convallis blandit. Nulla facilisi. Aliquam sed leo pellentesque, sodales
							nisl quis, posuere purus. Maecenas sagittis enim et congue ultricies. Etiam semper
							maximus erat, et sagittis erat fermentum nec. Nullam sem ligula, pharetra eu venenatis
							commodo, pellentesque id sapien. Pellentesque elementum mauris in nulla posuere, at
							lobortis augue accumsan. Donec bibendum massa id rhoncus vestibulum. Interdum et
							malesuada fames ac ante ipsum primis in faucibus. Nam efficitur dolor dolor, a
							fermentum ante pharetra ac. Curabitur commodo in metus eu blandit. Aenean aliquam leo
							vestibulum mi pellentesque, nec imperdiet augue viverra. Proin semper sollicitudin
							dictum.
						</section>
						<section>
							Mauris eu est erat. Donec fringilla erat eu ex posuere scelerisque. Sed in placerat
							felis, in fringilla turpis. Ut quis mauris sed ante luctus luctus. Aliquam erat
							volutpat. Vestibulum vitae libero at risus accumsan laoreet. Nulla mattis congue eros.
							Sed aliquam nunc eget ullamcorper sollicitudin. Vivamus ut placerat leo. Vestibulum at
							sapien sed purus varius aliquam. Etiam varius tristique metus, id iaculis lacus
							feugiat vitae. Duis commodo pretium egestas.
						</section>
					</div>
				))}
			</div>
		</Page>
	);
}
