interface ExpertiseTag {
  label: string;
  color: "retail" | "ia" | "commerce" | "transformation" | "education";
}

const tagColors = {
  retail: { border: "#2D5016", text: "#2D5016", bg: "#F0F9E8" }, // Green
  ia: { border: "#5B4A9F", text: "#5B4A9F", bg: "#F4F1FC" }, // Purple
  commerce: { border: "#D97706", text: "#D97706", bg: "#FEF3E2" }, // Orange
  transformation: { border: "#1A3A2A", text: "#1A3A2A", bg: "#E8F0ED" }, // Forest
  education: { border: "#C8A96E", text: "#8B6040", bg: "#FBF9F3" }, // Gold
};

const expertiseTags: ExpertiseTag[] = [
  { label: "Retail Media", color: "retail" },
  { label: "IA Aplicada", color: "ia" },
  { label: "Digital Commerce", color: "commerce" },
  { label: "Transformación Digital", color: "transformation" },
  { label: "Educación", color: "education" },
];

export default function ExpertiseTagsSection() {
  return (
    <div className="mt-12 flex flex-wrap gap-3">
      {expertiseTags.map((tag) => (
        <span
          key={tag.label}
          className="rounded-full border-2 px-4 py-2 text-xs font-semibold transition-all hover:shadow-md"
          style={{
            borderColor: tagColors[tag.color].border,
            color: tagColors[tag.color].text,
            backgroundColor: tagColors[tag.color].bg,
          }}
        >
          {tag.label}
        </span>
      ))}
    </div>
  );
}
