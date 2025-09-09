import React, { useState } from 'react';

const Note = () => {
  const [note, setNote] = useState<string>('');
  const [noteList, setNoteList] = useState<string[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setNoteList((prev) => [...prev, note]);
    setNote('');
  };

  const handleDelete = (id: string) => {
    setNoteList((prevList) => prevList.filter((note) => note !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Note"
        onChange={handleInput}
        value={note}
      />
      <button onClick={handleSubmit}> Add Note</button>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {noteList.map((item, index) => (
          <ul key={index} style={{ listStyle: 'none' }}>
            <div className="note-wrapper">
              {noteList.length > 0 && (
                <div style={{ display: 'flex' }}>
                  <li>{item}</li>
                  <button onClick={() => handleDelete(item)}>Delete</button>
                </div>
              )}
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Note;
