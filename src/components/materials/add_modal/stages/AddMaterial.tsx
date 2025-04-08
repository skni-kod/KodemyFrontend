import React, { useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import Error from '@/components/common/Error';
import Loading from '@/components/common/Loading';
import { Details } from '@/components/materials/add_modal/AddMaterialModal';
import { Tag, Tags } from '@/services/tag/types';
import TypesService from '@/services/tag/typesService';
import { TEXT } from '@/utils/constant';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';

const Label = ({ htmlFor, value, starred = false }: { htmlFor: string; value: string; starred?: boolean }) => {
	return (
		<label htmlFor={htmlFor} className="block pb-1.5 text-left text-secondary">
			{value}
			{starred ? '*' : ''}:
		</label>
	);
};

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
	useEffect(() => fetch(TypesService.getTags), [fetch]);

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
			<div>
				<Label htmlFor={title} value={TEXT.ADD_MATERIAL_MODAL.TITLE} />
				<input
					id="title"
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="w-full rounded-lg border bg-bg p-2 text-secondary"
					placeholder="Podaj tytuł materiału"
				/>
			</div>

			<div>
				<Label htmlFor="description" value={TEXT.ADD_MATERIAL_MODAL.DESC} />
				<textarea
					id="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className="w-full resize-none rounded-lg border bg-bg p-2 text-secondary"
					placeholder="Podaj opis materiału"
				></textarea>
			</div>

			<div>
				<Label htmlFor="link" value={TEXT.ADD_MATERIAL_MODAL.LINK} starred />
				<input
					id="link"
					type="text"
					value={link}
					onChange={(e) => setLink(e.target.value)}
					className="w-full rounded-lg border bg-bg p-2 text-secondary"
					placeholder="Podaj link do materiału"
				/>
				<small className="mt-1 block text-sm text-secondary">
					*Link musi zawierać przedrostek https:// lub http://
				</small>
			</div>

			<div>
				<Label htmlFor="tags" value={TEXT.ADD_MATERIAL_MODAL.FIND_TAGS} />
				<input
					id="tagSearch"
					type="text"
					value={tagSearch}
					onChange={(e) => setTagSearch(e.target.value)}
					className="w-full rounded-lg border bg-bg p-2 text-secondary"
					placeholder="Wpisz nazwę tagu"
					onClick={handleTagInputClick}
				/>
				{showTagList && filteredTags.length > 0 && (
					<ul className="max-h-40 w-full overflow-y-auto rounded-lg border bg-bg text-secondary">
						{filteredTags.map((tag) => (
							<li key={tag.id} onClick={() => handleAddTag(tag.id)} className="cursor-pointer p-2 hover:bg-bgHover">
								{tag.name}
							</li>
						))}
					</ul>
				)}
			</div>

			<div>
				<Label htmlFor="tagsSelected" value={TEXT.ADD_MATERIAL_MODAL.SELECTED_TAGS} />
				<div className="flex flex-wrap gap-2">
					{tagsIds.map((tagId) => {
						const tag = tags.find((t) => t.id === tagId);
						return tag ? (
							<span
								className="relative flex cursor-pointer items-center rounded p-2"
								onClick={() => handleRemoveTag(tag.id)}
							>
								<span className="text-secondary">{tag.name}</span>
								<span className="flex items-center justify-center">
									<IoCloseOutline className="h-6 w-6 font-semibold text-secondary" />
								</span>
							</span>
						) : null;
					})}
				</div>
			</div>
		</div>
	);
}
