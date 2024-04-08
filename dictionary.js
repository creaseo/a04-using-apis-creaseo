function getDefinition() {
    const word = document.getElementById('wordInput').value;
    if (!word) {
        alert("Please enter a word.");
        return;
    }

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Word not found.');
            }
            return response.json();
        })
        .then(data => {
            const definitions = data[0].meanings[0].definitions[0].definition;
            document.getElementById('definition').innerHTML = `<p><strong>Definition:</strong> ${definitions}</p>`;
        })
        .catch(error => {
            document.getElementById('definition').innerHTML = `<p>Error: ${error.message}</p>`;
        });
}
function getImage(word) {
    const accessKey = 'yhn9WZbDGIxTq7dkYF_eIp7NhN3mR59Q4u4oxEg0hJs';
    const url = `https://api.unsplash.com/search/photos?query=${word}&client_id=${accessKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const rand = Math.floor(Math.random() * data.results.length);
                const imageUrl = data.results[rand].urls.regular;
                console.log(imageUrl)
                
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = `Random image for ${word}`;
                img.style.maxWidth = "100%";
                img.style.height = "auto";

                const imageContainer = document.getElementById('imageContainer');
                imageContainer.innerHTML = '';
                imageContainer.appendChild(img);
            } else {
                document.getElementById('image').innerHTML = '<p>No image found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching image:', error);
            document.getElementById('image').innerHTML = '<p>Error fetching image.</p>';
        });
}

/* BELOW is an implementation of fetching image through Unsplashes source API which doesn't require an api key
function getImage(word) {
    const imageUrl = `https://source.unsplash.com/random?${word}`;
    console.log("The other one is RUNNING")
    fetch(imageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const img = document.createElement('img');
            img.src = response.url;
            img.alt = `Random image for ${word}`;
            img.style.maxWidth = "100%";
            img.style.height = "auto";

            const imageContainer = document.getElementById('imageContainer');
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
        })
        .catch(error => {
            console.error('Error fetching image:', error);
            document.getElementById('imageContainer').innerHTML = '<p>Image not found.</p>';
        });
} */

function getSynonyms(word) {
    fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
        .then(response => response.json())
        .then(data => {
            const synonymsList = data.map(syn => syn.word).join(', ');
            document.getElementById('synonyms').innerHTML = `<p><strong>Synonyms:</strong> ${synonymsList || 'No synonyms found.'}</p>`;
        })
        .catch(error => {
            console.error('Error fetching synonyms:', error);
            document.getElementById('synonyms').innerHTML = '<p>Error fetching synonyms.</p>';
        });
}