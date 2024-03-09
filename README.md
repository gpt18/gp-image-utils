
# gp-image-utils

A utility package for image compression and cropping in TypeScript/JavaScript.

## Installation

Install the package using npm:

```bash
npm install gp-image-utils
```

## Usage

Here's a basic example of how to use the `compressImage` function in a React component:

```jsx
import React, { useState } from 'react';
import { compressImage } from 'gp-image-utils';

function ImageUploader() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (selectedFile) {
            const compressedFile = await compressImage(selectedFile, 100, { crop: true });
            // Now you can use the compressedFile...
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default ImageUploader;
```

In this example, the `ImageUploader` component renders a file input and a button. When a file is selected, it's stored in the `selectedFile` state variable. When the button is clicked, the `handleUpload` function is called, which compresses the selected file using the `compressImage` function.

## API

### compressImage(file, maxSizeKB, options)

Compresses an image file.

- `file`: The image file to compress.
- `maxSizeKB`: The maximum size of the compressed image in kilobytes.
- `options`: An object with the following properties:
  - `crop`: A boolean indicating whether to crop the image.

Returns a Promise that resolves with the compressed image file.

## License

MIT
