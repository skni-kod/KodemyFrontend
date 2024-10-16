import React, { useState, useEffect } from 'react';
import TypesService from '@/services/tag/typesService';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import Tags from '@/services/tag/types/tags';
import { Details } from '@/components/materials/add_modal/AddMaterialModal';
import Tag from '@/services/tag/types/tag';
import { IoCloseOutline } from 'react-icons/io5';
export default function AddMaterial({
	onChange,
	initialData,
}: {
	onChange: (details: Details) => void;
	initialData: Details;
}) {
	const [title, setTitle] = useState(initialData.title);
	const [description, setDescription] = useState(initialData.description);
	const [link, setLink] = useState(initialData.link);
	const [tagsIds, setTagsIds] = useState(initialData.tagsIds);
	const [tagSearch, setTagSearch] = useState('');
	const [filteredTags, setFilteredTags] = useState<Tags>([]);
	const [showTagList, setShowTagList] = useState(false);

	const { data: tags, status, fetch } = useFetchState<Tags>();
	useEffect(() => fetch((): Promise<Tags> => TypesService.getTags()), []);

	useEffect(() => {
		if (tags) {
			const search = tagSearch.toLowerCase();
			setFilteredTags(tags.filter((tag: Tag) => tag.name.toLowerCase().includes(search) && !tagsIds.includes(tag.id)));
		} else {
			setFilteredTags([]);
		}
	}, [tagSearch, tags, tagsIds]);

	const handleAddTag = (tagId: number) => {
		if (!tagsIds.includes(tagId)) {
			const newTagsIds: number[] = [...tagsIds, tagId];
			setTagsIds(newTagsIds);
			onChange({ title, description, link, tagsIds: newTagsIds });
		}
	};

	const handleRemoveTag = (tagId: number) => {
		const newTagsIds = tagsIds.filter((id) => id !== tagId);
		setTagsIds(newTagsIds);
		onChange({ title, description, link, tagsIds: newTagsIds });
	};

	const handleTagInputClick = () => {
		setShowTagList(true);
	};

	if (status === Status.PENDING) return <Loading scale="small" />;
	if (status === Status.ERROR || !tags) return <Error />;

	return (
		<div className="flex w-full flex-col gap-4">
			<div className="form-group">
				<label htmlFor="title" className="block text-left text-gray-700">
					Tytuł materiału:
				</label>
				<input
					id="title"
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="w-full rounded-lg border p-2"
					placeholder="Podaj tytuł materiału"
				/>
			</div>

			<div className="form-group">
				<label htmlFor="description" className="block text-left text-gray-700">
					Opis materiału:
				</label>
				<textarea
					id="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className="w-full resize-none rounded-lg border p-2"
					placeholder="Podaj opis materiału"
				></textarea>
			</div>

			<div className="form-group">
				<label htmlFor="link" className="block text-left text-gray-700">
					Link do materiału*:
				</label>
				<input
					id="link"
					type="text"
					value={link}
					onChange={(e) => setLink(e.target.value)}
					className="w-full rounded-lg border p-2"
					placeholder="Podaj link do materiału"
				/>
				<small className="mt-1 block text-sm text-gray-500">*Link musi zawierać przedrostek https:// lub http://</small>
			</div>

			<div className="form-group">
				<label htmlFor="tags" className="block text-left text-gray-700">
					Szukaj tagów:
				</label>
				<input
					id="tagSearch"
					type="text"
					value={tagSearch}
					onChange={(e) => setTagSearch(e.target.value)}
					className="w-full rounded-lg border p-2"
					placeholder="Wpisz nazwę tagu"
					onClick={handleTagInputClick}
				/>
			</div>

			{showTagList && filteredTags.length > 0 && (
				<div className="form-group">
					<ul className="max-h-40 w-full overflow-y-auto rounded-lg border">
						{filteredTags.map((tag) => (
							<li key={tag.id} onClick={() => handleAddTag(tag.id)} className="cursor-pointer p-2 hover:bg-gray-100">
								{tag.name}
							</li>
						))}
					</ul>
				</div>
			)}

			<div className="form-group">
				<label htmlFor="tagsSelected" className="block text-left text-gray-700">
					Zaznaczone tagi:
				</label>
				<div className="flex flex-wrap gap-2">
					{tagsIds.map((tagId) => {
						const tag = tags.find((t) => t.id === tagId);
						return tag ? (
							<span
								key={tag.id}
								className="group relative flex cursor-pointer items-center justify-center rounded bg-gray-200 p-2"
								onClick={() => handleRemoveTag(tag.id)}
							>
								<span className="text-lg text-gray-800">{tag.name}</span>
								<span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
									<IoCloseOutline className="h-10 w-10 font-semibold text-gray-600" />
								</span>
							</span>
						) : null;
					})}
				</div>
			</div>
		</div>
	);
}
