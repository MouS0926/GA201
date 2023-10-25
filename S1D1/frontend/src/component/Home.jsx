
import Monacoeditor from './Monacoeditor'
import { useState } from 'react';

export default function Home() {
    const [code, setCode] = useState('const hello = "Hello, world!";\nconsole.log(hello);');
    const handleCodeChange = (newCode) => {
        setCode(newCode);
      };
  return (
    <div>
        <Monacoeditor code={code} onChange={handleCodeChange}/>
    </div>
  )
}
