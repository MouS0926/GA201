
import MonacoEditor from 'react-monaco-editor';
export default function Monacoeditor({ code, onChange,language }) {
    const editorOptions = {
        selectOnLineNumbers: true,
      };
    
      useEffect(() => {
        // Dynamically load language definitions
        import('monaco-languages').then((languages) => {
          languages.getLanguages().forEach((language) => {
            // Register the language in Monaco
            monaco.languages.register({ id: language.id });
    
            // Define the language configuration (optional)
            monaco.languages.setMonarchTokensProvider(language.id, language.language);
          });
        });
      }, []);

  return (
    <div>

<MonacoEditor
      width="100%"
      height="600"
      language={language} // Set the initial language (e.g., JavaScript)
      theme="vs-dark" // Set the theme
      value={code}
      options={editorOptions}
      onChange={onChange}
    />
    </div>
  )
}
