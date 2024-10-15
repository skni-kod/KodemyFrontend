import React, { useState, useEffect } from 'react';
import TypesService from '@/services/tag/typesService';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import Tags from '@/services/tag/types/tags';

export default function AddMaterial({
	onChange,
	initialData,
}: {
	onChange: (details: any) => void;
	initialData?: any;
}) {
	const [title, setTitle] = useState(initialData?.title || '');
	const [description, setDescription] = useState(initialData?.description || '');
	const [link, setLink] = useState(initialData?.link || '');
	const [tagsIds, setTagsIds] = useState<string[]>(initialData?.tagsIds || []);

	useEffect(() => {
		setTitle(initialData?.title || '');
		setDescription(initialData?.description || '');
		setLink(initialData?.link || '');
		setTagsIds(initialData?.tagsIds || []);
	}, [initialData]);

	const { data: tags, status, fetch } = useFetchState<Tags>();
	useEffect(() => fetch((): Promise<Tags> => TypesService.getTags()), []);

	if (status === Status.PENDING) return <Loading scale="small" />;
	if (status === Status.ERROR || !tags) return <Error />;

	console.log('tags', tags);

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
					className="w-full rounded-lg border p-2"
					placeholder="Podaj opis materiału"
				></textarea>
			</div>

			<div className="form-group">
				<label htmlFor="link" className="block text-left text-gray-700">
					Link do materiału:
				</label>
				<input
					id="link"
					type="text"
					value={link}
					onChange={(e) => setLink(e.target.value)}
					className="w-full rounded-lg border p-2"
					placeholder="Podaj link do materiału"
				/>
			</div>

			<div className="form-group">
				<label htmlFor="tags" className="block text-left text-gray-700">
					Tagi materiału (wpisz ID tagów):
				</label>
				<input
					id="tags"
					type="text"
					value={tagsIds.join(', ')}
					onChange={(e) => {
						const tags = e.target.value.split(',').map((tag) => tag.trim());
						setTagsIds(tags);
						onChange({ title, description, link, tagsIds: tags });
					}}
					className="w-full rounded-lg border p-2"
					placeholder="Podaj tagi, oddzielone przecinkami"
				/>
			</div>
		</div>
	);
}
