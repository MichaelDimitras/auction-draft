const promptTeam = () => {

    let attributes = {
      name: document.getElementById('name').value,
      position: document.getElementById('position').value,
      bid: parseInt(document.getElementById('bid').value),
    };
    
    if (/\d+/.test(attributes.bid)) {
        window.opener.postMessage(attributes, '*');
        window.close();
    } else {
        alert('Please enter a price');
    }
}