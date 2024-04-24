import ComponentParentProps from '@/utils/types/node/componentParentProps';

export default function UserCardBody({ children }: ComponentParentProps) {
	return <div className="flex items-center justify-between pt-2">{children}</div>;
}
