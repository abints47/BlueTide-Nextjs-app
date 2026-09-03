interface TagBadgesProps {
  tags: string[];
}

export default function TagBadges({ tags }: TagBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block px-3 py-1 text-xs font-medium tracking-wide rounded-full border border-gray-200 text-gray-500 bg-gray-50 hover:bg-gray-100 hover:text-[#2B2B28] transition-colors cursor-default"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
