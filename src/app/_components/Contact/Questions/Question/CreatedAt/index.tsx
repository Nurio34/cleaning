function CreatedAt({ createdAt }: { createdAt: Date }) {
  return (
    <span className="text-xs font-semibold text-base-content/70">
      {new Date(createdAt).toLocaleDateString("tr-TR")}
    </span>
  );
}
export default CreatedAt;
