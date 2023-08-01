
function Generator() {


    
    function handleSaveToPC(jsonData) {
        const fileData = jsonData;
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'filename.json';
        link.href = url;
        link.click();
        
    }

    function GenerateFile(data) {
        let jsonData = JSON.stringify(data);
        handleSaveToPC(jsonData);
    }
    
    return (
        <div> Click to test</div>
    );
}

export default Generator;   