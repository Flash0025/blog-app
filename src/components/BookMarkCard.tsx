import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Bookmark } from '@/types/bookmark';
import Link from 'next/link';

interface BookmarkCardProps {
  bookmark: Bookmark;
  view: 'grid' | 'list';
  isSelected: boolean;
  onSelect: (id: string) => void;
  onEdit: (bookmark: Bookmark) => void;
  onDelete: (id: string) => void;
}

export default function BookmarkCard({
  bookmark,
  view,
  isSelected,
  onSelect,
  onEdit,
  onDelete,
}: BookmarkCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: bookmark.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-white border rounded-lg transition-shadow duration-200 ${
        isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:shadow-md'
      } ${view === 'list' ? 'p-4' : 'p-6'}`}
    >
      <div className="flex items-start gap-4">
        {/* Drag handle */}
        <div
          {...attributes}
          {...listeners}
          className="cursor-move text-gray-400 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9v1a1 1 0 11-2 0V6H4a1 1 0 110-2h3V3a1 1 0 011-1zm0 8a1 1 0 011 1v1h3a1 1 0 110 2H9v1a1 1 0 11-2 0v-1H4a1 1 0 110-2h3v-1a1 1 0 011-1z" />
          </svg>
        </div>

        {/* Checkbox for selection */}
        <div className="flex-shrink-0">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onSelect(bookmark.id)}
            className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <Link
                href={bookmark.url}
                className="text-lg font-medium text-gray-900 hover:text-blue-600 line-clamp-1"
              >
                {bookmark.title}
              </Link>
              {bookmark.description && (
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {bookmark.description}
                </p>
              )}
            </div>

            {/* Actions menu */}
            <div className="relative flex-shrink-0 ml-4">
              <button
                onClick={() => onEdit(bookmark)}
                className="text-gray-400 hover:text-gray-600 mr-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
              <button
                onClick={() => onDelete(bookmark.id)}
                className="text-gray-400 hover:text-red-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {bookmark.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <span className={`w-2 h-2 rounded-full mr-2 ${
                bookmark.type === 'post' ? 'bg-green-500' : 'bg-purple-500'
              }`} />
              <span>{bookmark.type === 'post' ? 'Blog Post' : 'Documentation'}</span>
            </div>
            <span>{new Date(bookmark.createdAt).toLocaleDateString()}</span>
          </div>

          {bookmark.note && (
            <div className="mt-4 p-3 bg-gray-50 rounded-md text-sm text-gray-600">
              {bookmark.note}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
