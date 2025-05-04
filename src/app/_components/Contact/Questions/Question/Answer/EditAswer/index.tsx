import { Dispatch, SetStateAction } from "react";

function EditAnswer({
  setIsEditing,
  setCurrentAnsweringForm,
  questionId,
  isAdmin,
}: {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  setCurrentAnsweringForm: Dispatch<SetStateAction<string>>;
  questionId: string;
  isAdmin: boolean;
}) {
  return (
    isAdmin && (
      <button
        type="button"
        className="text-info font-bold text-sm cursor-pointer transition-all hover:text-info/70 hover:scale-110"
        onClick={() => {
          setIsEditing((prev) => !prev);
          setCurrentAnsweringForm(questionId);
        }}
      >
        Düzelt
      </button>
    )
  );
}
export default EditAnswer;
