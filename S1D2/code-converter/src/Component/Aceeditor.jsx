
import { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
export default function Aceeditor() {

    const [code, setCode] = useState('');
    const handleCodeChange = (newCode) => {
      setCode(newCode);
    };
  return (
    <div>
 <AceEditor
      mode="javascript"
      theme="monokai"
      value={code}
      onChange={handleCodeChange}
      name="code-editor"
      editorProps={{ $blockScrolling: true }}
    />

    </div>
  )
}


