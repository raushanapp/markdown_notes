import { NoteData, Tag } from "../App";
import { NoteForm } from "./NoteForm";

export type EditNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export const EditNotes = ({
  onSubmit,
  onAddTag,
  availableTags,
}: EditNoteProps) => {
  return (
    <>
      <h1 className="mb-4">Edit Notes</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};
