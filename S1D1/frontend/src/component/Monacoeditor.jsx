
import MonacoEditor from 'react-monaco-editor';
export default function Monacoeditor({ code, onChange }) {
    const editorOptions = {
        selectOnLineNumbers: true,
      };
    

  return (
    <div>

<MonacoEditor
      width="800"
      height="600"
      language="javascript" // Set the initial language (e.g., JavaScript)
      theme="vs-dark" // Set the theme
      value={code}
      options={editorOptions}
      onChange={onChange}
    />
    </div>
  )
}
