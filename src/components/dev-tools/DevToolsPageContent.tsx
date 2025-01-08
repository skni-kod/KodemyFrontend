import PageContent from '../layout/PageContent';
import AddTagsSection from './add-tags/AddTagsSection';
import DownloadBearerSection from './download-bearer/DownloadBearerSection';
import ReindexMaterialsSection from './reindex-materials/ReindexMaterialsSection';

export default function DevToolsPageContent() {
	return (
		<PageContent headerValue={'Narzędzia deweloperskie'}>
			<ReindexMaterialsSection />
			<AddTagsSection />
			<DownloadBearerSection />
		</PageContent>
	);
}
